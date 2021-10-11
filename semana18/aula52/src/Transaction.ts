export class Transaction {
    private description: string = "";
    private value: number = 10;
    private date: string = ""

    public getDescription = (): string => this.description
    public getValue = (): number => this.value
    public getDate = (): string => this.date

    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

  export const saque: Transaction = new Transaction("20/10/2020", 2, "saque de 2 reais")