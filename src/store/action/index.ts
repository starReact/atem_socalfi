export const incomeTypes = {
    setIncome: "setIncome",
    setLoan: "setLoan"
}

export function setIncomeAction(income: any) {
    return {
        type: incomeTypes.setIncome,
        payload: income
    }
}

export function setLoanAction(loan: any) {
    return {
        type: incomeTypes.setLoan,
        payload: loan
    }
}
