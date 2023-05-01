import sheets, { SHEET_ID } from '../config/google-sheet.js';
import { v4 as uuidv4 } from 'uuid';
import validateLedgerEntry from "../validators/ledger-validator.js";
import errorHandler from './error-handler.js';

// Function to get all ledgers
export async function allLedgers(req, res) {
    try {
        // Getting all ledgers from the sheet
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SHEET_ID,
            range: "Sheet1!A2:F"
        });

        // Mapping the rows
        const rows = response.data.values;
        const ledger = rows.map((row) => ({
            id: row[0],
            date: row[1],
            name: row[2],
            type: row[3],
            amount: row[4],
            description: row[5],
        }));
        res.json(ledger);
    } catch (err) {
        errorHandler(err, res)
    }
}

// Function to add a new ledger
export async function addLedger(req, res) {
    try {
        // Auto-generating date
        const date = new Date().toISOString().slice(0, 10);
        // Validating the request body
        const { isValid, errors } = validateLedgerEntry(req.body);
        if (!isValid) {
            return res.status(400).json({ errors });
        }
        // Get the values from the request body
        const { name, type, amount, description } = req.body;

        // Generate a new unique ID for the entry
        const id = uuidv4();

        // Adding a new row to the sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: "Sheet1",
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            requestBody: {
                values: [[id, date, name, type, amount, description]],
            },
        });

        res.json({ message: "Added Successfully" });
        
    } catch (err) {
        errorHandler(err, res)
    }

}

// Function to find a ledger using id
export async function ledgerById(req, res) {
    try {
        //Taking id from the params
        const id = req.params.id

        //Getting all the ledgers
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SHEET_ID,
            range: "Sheet1!A2:F"
        });

        //Getting the specific ledger using id
        const rows = response.data.values
        const ledger = rows.find((row) => row[0] === id)
        if (!ledger) {
            return res.status(404).json({ error: "Not Found" })
        }
        res.json({
            id: ledger[0],
            date: ledger[1],
            name: ledger[2],
            type: ledger[3],
            amount: ledger[4],
            description: ledger[5],
        })
    } catch (err) {
        errorHandler(err, res)
    }

}

// Function to delete a ledger using id
export async function deleteLedger(req, res) {
    try {
        const id = req.params.id;

        // Find the row with the id
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SHEET_ID,
            range: `Sheet1!A:A`,
        });

        const rows = response.data.values;
        const rowToDelete = rows.findIndex((row) => row[0] === id);
        if (rowToDelete === -1) {
            res.status(404).send(`Ledger entry with ID ${id} not found`);
            return;
        }

        // Delete the row with the given id
        const deleteRequests = [{
            deleteDimension: {
                range: {
                    sheetId: 0,
                    dimension: "ROWS",
                    startIndex: rowToDelete,
                    endIndex: rowToDelete + 1
                }
            }
        }];

        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SHEET_ID,
            requestBody: {
                requests: deleteRequests
            }
        });
        res.json("Deleted Succesfully");
    } catch (err) {
       errorHandler(err,res)
    }
}
