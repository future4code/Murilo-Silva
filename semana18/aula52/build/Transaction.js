"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saque = exports.Transaction = void 0;
class Transaction {
    constructor(date, value, description) {
        this.description = "";
        this.value = 10;
        this.date = "";
        this.getDescription = () => this.description;
        this.getValue = () => this.value;
        this.getDate = () => this.date;
        this.date = date;
        this.value = value;
        this.description = description;
    }
}
exports.Transaction = Transaction;
exports.saque = new Transaction("20/10/2020", 2, "saque de 2 reais");
//# sourceMappingURL=Transaction.js.map