import express from "express";
import { addLedger, allLedgers, deleteLedger, ledgerById } from "../handlers/ledger-handler.js";

const router = express.Router();

// Route to get all ledger entries

router.get('/ledger', async (req, res) => {
    allLedgers(req, res);
});


// Route to add a new ledger entry 

router.post('/ledger', async (req, res) => {
    addLedger(req, res);
});


// Route to find specific ledger entry using id

router.get('/ledger/:id', async (req, res) => {
    ledgerById(req, res);
});


// Route to delete a ledger entry using id

router.delete('/ledger/:id', async (req, res) => {
    deleteLedger(req, res);
})

// Handling all other routes
router.use((req, res) => {
    res.status(404).json({ message: "Invalid Request" });
  })


export default router;