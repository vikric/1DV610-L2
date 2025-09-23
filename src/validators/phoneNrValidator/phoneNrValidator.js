import { createResult } from '../../middleWare/middleWare.js'

/**
 *
 */
export class PhoneNrValidator {
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

    const digitsOnly = phoneNumber.replaceAll('-', '').replaceAll(' ', '')
    if (!digitsOnly) return createResult(false, 'Invalid number entered')

    const startDigits = digitsOnly.substring(0, 2)
    const valid =
      (startDigits === '46' && digitsOnly.length === 11) ||
      (startDigits === '07' && digitsOnly.length === 10)
    return createResult(valid, valid ? 'Valid number entered' : 'Invalid number entered')
  }
}
