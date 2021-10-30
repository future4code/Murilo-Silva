import * as jwt from "jsonwebtoken"
import { authenticationData } from "../model/User"
export default class Authenticator {
   generateToken = (
      payload: authenticationData
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: "24days"
         }
      )
   }
   getTokenData = (
      token: string
   ): authenticationData => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as authenticationData
   }
}