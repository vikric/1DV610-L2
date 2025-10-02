import { createResult, validateType } from '../middleWare/middleWare.js'

/**
 *
 */
export class PhoneNumberValidator {
  /**
   * Validates the phone number.
   *
   * @param {string} phoneNumber - The phone number to validate.
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validatePhoneNumber (phoneNumber) {
    if (!phoneNumber || phoneNumber.length < 1) {
      return createResult(false, 'No number entered')
    }
    validateType(phoneNumber)

    const digits = /[0-9]/
    const regex = /\d/
    const digitsOnly = regex.exec(phoneNumber)
    console.log(digitsOnly.input)
    console.log(digitsOnly.length)
    console.log(digitsOnly.input.length)
    /*     const digitsOnly = phoneNumber.replaceAll('-', '').replaceAll(' ', '')
 */ if (!digitsOnly) return createResult(false, 'Invalid length on number')

    const startDigits = digitsOnly.toString().substring(0, 2)
    const valid =
      (startDigits === '46' && digitsOnly.length === 11) ||
      (startDigits === '07' && digitsOnly.length === 10)
    return createResult(valid, valid ? 'Valid number entered' : 'Invalid number entered')
  }
}
