import {
  checkIsString,
  createInvalidMessage,
  createValidMessage
} from '../middleWare/middleWare.js'

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
  validateSwedishPhoneNumber (phoneNumber) {
    if (!phoneNumber || phoneNumber.length < 1) {
      return createInvalidMessage('No number entered')
    }
    checkIsString(phoneNumber)

    const digitsOnly = this.#digitChecker(phoneNumber)
    if (!digitsOnly) return createInvalidMessage('Invalid length on number')

    const valid = this.#sweDigitsChecker(digitsOnly)

    return this.#validChecker(valid)
  }

  /**
   * Removes all non digits.
   *
   * @param {string} phoneNumber - The phone number to check.
   * @returns {string} A string with only digits.
   */
  #digitChecker (phoneNumber) {
    // /\D/g Removes any non digit
    return phoneNumber.replaceAll(/\D/g, '')
  }

  /**
   * Check if start digits are for swedish cellularphones.
   *
   * @param {string} digits - The digits to check.
   * @returns {boolean} True if the digits match Swedish cellular phone number format, otherwise false.
   */
  #sweDigitsChecker (digits) {
    const startDigits = digits.toString().substring(0, 2)
    const valid =
      (startDigits === '46' && digits.length === 11) ||
      (startDigits === '07' && digits.length === 10)
    return valid
  }

  /**
   * Returns a validation message based on the validity of the phone number.
   *
   * @param {boolean} valid - Indicates if the phone number is valid.
   * @returns {{ valid: boolean, message: string }} Validation result object with validity and message.
   */
  #validChecker (valid) {
    return valid
      ? createValidMessage('Valid number entered')
      : createInvalidMessage('Invalid number entered')
  }
}
