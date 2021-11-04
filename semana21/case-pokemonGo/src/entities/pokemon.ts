export class Pokemon {
    constructor(
        private id: string,
        private name: string,
        private Pokedex_number: number,
        private Generation: number,
        private Evolution_Stage: number,
        private Evolved: boolean,
        private FamilyID: number,
        private Cross_Gen:number,
        private Weather1: string,
        private Weather2: string,
        private STAT_TOTAL: number,
        private ATK: number,
        private DEF: number,
        private STA: number,
        private Legendary: boolean,
        private Aquireable: boolean,
        private Spawns: number,
        private Regional: number,
        private Raidable: number,
        private Hatchable: number,
        private Shiny: number,
        private Nest: boolean,
        private New: number,
        private NotGettable: number,
        private Future_Evolve: number,
        private CP40: number,
        private CP39: number,
        private type1: string,
        private type2: string
    ) { }

    public getId = (): string => this.id
    public getName = (): string => this.name
    public getPokedex_number = (): number => this.Pokedex_number
    public getGeneration = (): number => this.Generation
    public getEvolution_Stage = (): number => this.Evolution_Stage
    public getEvolved = (): boolean => this.Evolved
    public getFamilyID = (): number => this.FamilyID
    public getCross_Gen = (): number => this.Cross_Gen
    public getWeather1 = (): string => this.Weather1
    public getWeather2 = (): string => this.Weather2
    public getSTAT_TOTAL = (): number => this.STAT_TOTAL
    public getATK = (): number => this.ATK
    public getDEF = (): number => this.DEF
    public getSTA = (): number => this.STA
    public getLegendary = (): boolean => this.Legendary
    public getAquireable = (): boolean => this.Aquireable
    public getSpawns = (): number => this.Spawns
    public getRegional = (): number => this.Regional
    public getRaidable = (): number => this.Raidable
    public getHatchable = (): number => this.Hatchable
    public getShiny = (): number => this.Shiny
    public getNest = (): boolean => this.Nest
    public getNew = (): number => this.New
    public getNotGettable = (): number => this.NotGettable
    public getFuture_Evolve = (): number => this.Future_Evolve
    public getCP40 = (): number => this.CP40
    public getCP39 = (): number => this.CP39
    public getType1 = (): string => this.type1
    public getType2 = (): string => this.type2
}