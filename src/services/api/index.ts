import { Model } from '../../models/interfaces'
import { formatRawResponseIntoInterface } from '../api/interfaces'



async function save(coreModel: Model) {
    fetch("/api" + coreModel.outputRequest())
        .then(function(res) {
            let body = formatRawResponseIntoInterface(res.body)
            coreModel.updateWithResponse(body)
        })
        .catch(function() {
            console.log('sdfasdf')
        })


}

export const API  = {
    "SAVE": save
}

