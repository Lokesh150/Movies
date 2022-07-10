export interface actorsCreationDto{
    name:string,
    dateOfBirth: Date,
    biography : string,
    picture: File
}

export interface actorsDto{
    id : number
    name:string,
    dateOfBirth: Date,
    picture: string,
    biography : string
}