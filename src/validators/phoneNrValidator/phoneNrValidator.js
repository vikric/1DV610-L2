/**
 *
 */
export class PhoneNrValidator {
  /**
   *
   * @param htmlElement
   */
  constructor (htmlElement) {
    this.htmlElement = htmlElement
  }

  /**
   * Validates the length of a phone number string.
   *
   * @param {string} number - The phone number to validate.
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validateNumber (number) {
    console.log('Test', this.htmlElement)
    const re = /\d/g
    const digits = number.match(re).join('')

    return this.#checkNumberLength(digits)
  }

  /**
   *
   * @param digits
   */
  #checkNumberLength (digits) {
    let message = ''

    if (digits.length < 10 || digits.length > 11) {
      message = 'Invalid length of phone number'
    } else {
      message = 'Valid length of phone number '
    }
    return this.returnMessage(message)
  }

  /**
   *
   * @param message
   */
  returnMessage (message) {
    return message
  }
}
