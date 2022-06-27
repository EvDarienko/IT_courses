const Worker = {
    name: '',
    surname: '',
    rate: '',
    days: '',
    getSalary: () => this.rate * this.days,
}

Administrator(Worker) {
    getNumberOfEmployees: () => {
        return {}
    },
    setPremiumToEmployees: () => {
        let bonus = '';
        let premium = bonus * this.days;
        return premium + '$';
    },
}

Cashier(Worker) {
    averageBill: '',
    getIncome: () => {
        return this.averageBill * this.days + '$';
    },
    getOutcome: () => {
        let taxes = '';
        return taxes * this.getIncome() + '$';
    },
}

Consultant(Worker) {
    soldProducts: '',
    getListOfProducts: () => {
        return {}
    },
    getInterest: () => {
        let interest = 10;
        return interest * this.soldProducts / 100 + '$';
    },
}