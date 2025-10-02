import { Validator } from '../../validator.js'

const validator = new Validator()
/* const email = validator.validateEmail('test@test.se') */

const phoneNumber = validator.validatePhoneNumber('070 123 45 78')
/* const password = validator.validatePassword('PassWord123', 8)
const personalNumber = validator.validatePersonalNumber('1212121212')
const date = validator.validateDate('2023-12-28') */
/* console.log(email) */

console.log(phoneNumber)
/* console.log(password)
console.log(personalNumber)
console.log(date)
 */
