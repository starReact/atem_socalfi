export const initialState = {
    aboutYou: [
        { item: 'Number of applicants', value: "1" },
        { item: 'First Time Buyer', value: "Yes"},
        { item: 'Date of birth', value: "12 / 12 / 1993"},
        { item: 'Marital status', value: "Single"},
        { item: 'Financial dependents', value: "1"},
    ],
    income: [
        { item: 'Basic income', value: 0 },
        { item: 'Car allowance', value: 0},
        { item: 'Shift allowance', value: 0},
        { item: 'Overtime', value: 0},
        { item: 'Bonus', value: 0},
        { item: 'Commission', value: 0},   
    ],
    loan: [
        { item: "Personal loan", value: 0},
        { item: 'Car loan', value: 0},
        { item: 'Other', value: 0},
        { item: 'Child care', value: 0},
        { item: 'Child maintenance', value: 0},
    ],
    panel: {
        "Mortgage loan": Math.round(Math.random()*(100000 - 100) + 100),
        "Purchase price": Math.round(Math.random()*(100000 - 100) + 100),
        "Deposit you'll need": Math.round(Math.random()*(100000 - 100) + 100),
        "Monthly repayment": Math.round(Math.random()*(100000 - 100) + 100),
    }

}
