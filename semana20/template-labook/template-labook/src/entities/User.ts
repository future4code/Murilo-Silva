
type authenticationData = {
    id: string
 }
 
 type user = {
    id: string,
    name: string,
    email: string,
    password: string
 }

 export interface SignUpInputDTO{
     name: string,
     email: string,
     password: string
 }
 