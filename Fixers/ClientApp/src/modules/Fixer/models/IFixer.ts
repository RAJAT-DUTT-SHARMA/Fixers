import IProfession from "./IProfession";

export default interface IFixer{

    name: string,
    age: number,
    contactNumber : string,
    pinCode: number,
    professionalPortfolio: IProfession[]
}

