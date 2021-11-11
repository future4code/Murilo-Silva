import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { HashGeneratorMock } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/userDatabaseMock";

const userBusinessMock = new UserBusiness(
  new IdGeneratorMock(),
  new HashGeneratorMock(),
  new TokenGeneratorMock(),
  new UserDatabaseMock() as UserDatabase
)

describe("Testando o signup", () => {
  test("Deve retornar erro quando o nome está vazio", async () => {
    expect.assertions(2)
    try {
      await userBusinessMock.signup("", "bruno@bruno.com", "123456", "normal")
    } catch (error) {
      expect(error.message).toEqual("Missing input")
      expect(error.statusCode).toBe(422)
    }
  })

  test("Deve retornar um erro quando o email é inválido (não tem arroba)", async () => {
    expect.assertions(2)
    try {
      await userBusinessMock.signup("Bruno", "bruno.bruno.com", "123456", "normal")
    } catch (error) {
      expect(error.message).toEqual("Invalid email");
      expect(error.statusCode).toBe(422)
    }
  })

  test("Deve retornar erro quando receber uma senha com 5 ou menos caracteres", async () => {
    expect.assertions(2);
    try {
      await userBusinessMock.signup("Bruno", "bruno@bruno.com", "12345", "normal")
    } catch (error) {
      expect(error.message).toEqual("Invalid password");
      expect(error.statusCode).toBe(422)
    }
  })

  test("Deve retornar erro quando receber uma role não existente", async () => {
    expect.assertions(2);
    try {
      await userBusinessMock.signup("Bruno", "bruno@bruno.com", "123456", "guest")
    } catch (error) {
      expect(error.message).toEqual("Invalid user role")
      expect(error.statusCode).toBe(422);
    }
  })

  test("Sucesso no cadastro", async () => {
    expect.assertions(1)
    try {
      const { accessToken } = await userBusinessMock.signup(
        "Bruno",
        "bruno@bruno.com",
        "123456",
        "NORMAL"
      );

      expect(accessToken).toEqual("token_mock");

    } catch (error) {
      console.log(error)
    }
    
  })
})

describe("Testando o login", () => {
  test("Deve retornar erro quando o email fornecido não existe", async () => {
    expect.assertions(2)
    try {
      await userBusinessMock.login("email@email.com", "123456")
    } catch (error) {
      expect(error.message).toEqual("Invalid credentials")
      expect(error.statusCode).toBe(401)
    }
  })

  test("Deve retornar erro quando a senha está errada", async () => {
    expect.assertions(2)
    try {
      await userBusinessMock.login("user1@gmail.com", "123456");
    } catch (error) {
      expect(error.message).toEqual("Invalid credentials")
      expect(error.statusCode).toBe(401)
    }
  })

  test("Sucesso no login e verificação de token de acesso", async () => {
    expect.assertions(1)
    try {
      const { accessToken } = await userBusinessMock.login(
        "user1@gmail.com",
        "user1password"
      );

      expect(accessToken).toEqual("token_mock")
    } catch (error) {
      console.log(error)
    }
  })
})