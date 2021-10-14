"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const customer_1 = require("./customer");
const primeiroUsuario = new users_1.User("abcde", "email@email.com", "João", "jaojao");
console.log(primeiroUsuario.getId());
console.log(primeiroUsuario.getEmail());
console.log(primeiroUsuario.getName());
const primeiroConsumidor = new customer_1.Customer("jediMaster", "email@gmail.com", "Nicolas", "batSenha", "400289-22");
//# sourceMappingURL=index.js.map