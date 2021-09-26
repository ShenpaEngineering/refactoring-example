export interface ModelUpdateData {
    name: string
    email: string
    status: string
}


export interface Model {
    outputRequest() : string
    updateWithResponse(data:ModelUpdateData) : void
}