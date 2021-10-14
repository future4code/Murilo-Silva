import { User } from "./users";
import { Customer } from "./customer"

const primeiroUsuario = new User("abcde", "email@email.com", "João", "jaojao")

console.log(primeiroUsuario.getId());

console.log(primeiroUsuario.getEmail());

console.log(primeiroUsuario.getName());

const primeiroConsumidor = new Customer("jediMaster", "email@gmail.com", "Nicolas", "batSenha", "400289-22" )

// ----------- EXERCICIO 1 ------------

// A) - NÃO DA FORMA QUE ESTÁ, POIS NÃO TEM GETTER PARA A SENHA.

// B) - Apenas uma vez.

// ---------- EXERCICIO 2 -----------

// A) & B) - Ambas foram imressas uma vez cada...

