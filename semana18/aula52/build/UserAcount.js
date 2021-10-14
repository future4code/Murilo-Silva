"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}
exports.UserAccount = UserAccount;
const Pelé = new UserAccount("Pelé", "33333333", 69);
//# sourceMappingURL=UserAcount.js.map