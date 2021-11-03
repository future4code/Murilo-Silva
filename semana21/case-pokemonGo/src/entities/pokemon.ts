export class Pokemon {
    constructor(
        private id: string,
        private name: string,
        private Pokedex_Number: Number,
        private Generation: Number,
        private Evolution_Stage: Number,
        private Evolved: boolean,
        private FamilyID: Number,
        private Cross_Gen:Number,
        private Weather1: string,
        private Weather2: string,
        private STAT_TOTAL: Number,
        private ATK: Number,
        private DEF: Number,
        private STA: Number,
        private Legendary: boolean,
        private Aquireable: boolean,
        private Spawns: Number,
        private Regional: Number,
        private Raidable: Number,
        private Hatchable: Number,
        private Shiny: Number,
        private Nest: boolean,
        private New: Number,
        private NotGettable: Number,
        private Future_Evolve: Number,
        private CP40: Number,
        private CP39: Number,
        private type1: string,
        private type2: string
    ) { }

    public getId = (): string => this.id
    public getName = (): string => this.name
    public getPokedex_Number = (): string => this.id
    public getGeneration = (): Number => this.Generation
    public getEvolution_Stage = (): Number => this.Evolution_Stage
    public getEvolved = (): boolean => this.Evolved
    public getFamilyID = (): Number => this.FamilyID
    public getCross_Gen = (): Number => this.Cross_Gen
    public getWeather1 = (): string => this.Weather1
    public getWeather2 = (): string => this.Weather2
    public getSTAT_TOTAL = (): Number => this.STAT_TOTAL
    public getATK = (): Number => this.ATK
    public getDEF = (): Number => this.DEF
    public getSTA = (): Number => this.STA
    public getLegendary = (): boolean => this.Legendary
    public getAquireable = (): boolean => this.Aquireable
    public getSpawns = (): Number => this.Spawns
    public getRegional = (): Number => this.Regional
    public getRaidable = (): Number => this.Raidable
    public getHatchable = (): Number => this.Hatchable
    public getShiny = (): Number => this.Shiny
    public getNest = (): boolean => this.Nest
    public getNew = (): Number => this.New
    public getNotGettable = (): Number => this.NotGettable
    public getFuture_Evolve = (): Number => this.Future_Evolve
    public getCP40 = (): Number => this.CP40
    public getCP39 = (): Number => this.CP39
    public getType1 = (): string => this.type1
    public getType2 = (): string => this.type2
}