import { ModelUpdateData } from "../../models/interfaces";

export function formatRawResponseIntoInterface(data:any) : ModelUpdateData {
    let formattedData: ModelUpdateData
    formattedData.name = data.name
    formattedData.email = data.email
    formattedData.status = data.status
    return formattedData

}