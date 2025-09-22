import { createResult } from '../../middleWare/middleWare.js'

/**
 *
 */
export class PhoneNrValidator {
  /**
   * Validates the phone number.
   *
   * @param phoneNumber
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validatePhoneNumber (phoneNumber) {
    if (!phoneNumber || phoneNumber.length < 1) {
      return createResult(false, 'No number entered')
    }
    // Feature / Bug that letters will be removed with this.
    // Number 070 123 45 67 Testkalle will work
    // Since it removes everything except digits
    const digitsOnly = phoneNumber.replace(/\D/g, '')
    if (!digitsOnly) return createResult(false, 'Invalid number entered')

    const startDigits = digitsOnly.substring(0, 2)
    const valid =
      (startDigits === '46' && digitsOnly.length === 11) ||
      (startDigits === '07' && digitsOnly.length === 10)
    return createResult(valid, valid ? 'Valid number entered' : 'Invalid number entered')
  }
}
