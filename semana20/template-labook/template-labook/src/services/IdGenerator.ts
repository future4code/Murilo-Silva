import { v4 } from "uuid"
export default class IdGenerator {
    execute = (): string => v4()
}