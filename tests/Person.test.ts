import { expect } from 'chai';
import { Person } from '../src/models/Person'

describe('Person model test', () => {
    it('Person can mask emails', () => {
        let p = new Person("test", "test@test.com")
        p.maskEmail()
        expect(p.email()).to.equal('test@****')
    })
})