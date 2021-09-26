import { Model, ModelUpdateData } from './interfaces'
export class Person implements Model {
    name: string
    _email: string
    private status: string
    private raw_email: string

    constructor(name:string , email:string) {
        this.name = name
        this._email = email
        this.raw_email = ''
        this.status = ''
    }

    maskEmail() {
        let email_parts = this._email.split("@")
        this.raw_email = email_parts[0] + "@****"
    }

    email() {
        if (this.raw_email == '') {
            return this._email
        } else {
            return this.raw_email
        }
    }

    outputRequest() {
        return JSON.stringify({ "fullname": this.name, "email": this.email() })
    }

    updateWithResponse(data:ModelUpdateData):void {
        this.status = data.status
    }
}