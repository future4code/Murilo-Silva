"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const users_1 = require("./users");
class Customer extends users_1.User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map