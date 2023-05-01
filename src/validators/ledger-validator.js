const validateLedgerEntry = (entry) => {
    const { date, name, type, amount } = entry;
    // let errors be an empty obj
    const errors = {};

    // Checking name 
    if (!name) {
        errors.name = "Please provide a valid name";
    }
    //  Checking type
    if (!type || (type !== "Lend" && type !== "Owe")) {
        errors.type = "Please provide a valid type (Lend or Owe)";
    }
    //  Checking amount
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
        errors.amount = "Please provide a valid amount";
    }
    //  Return statement to give result
    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
}

export default validateLedgerEntry;