/**
 *
 */
export class PhoneNrValidator {
  /**
   * Validates the length of a phone number string.
   *
   * @param {string} number - The phone number to validate.
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validateNumber (number) {
    const re = /\d/g
    const digits = number.match(re).join('')

    if (digits.length < 10 || digits.length > 11) {
      return { valid: false, message: 'Invalid length of phone number' }
    }
    return { valid: true, message: 'Valid length of phone number ' }
  }
}
