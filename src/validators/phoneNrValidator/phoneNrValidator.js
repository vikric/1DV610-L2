import { CreateResult } from '../createResult/createResult'
/**
 *
 */
export class PhoneNrValidator extends CreateResult {
  /**
   * Creates an instance of PhoneNrValidator.
   *
   * @param {HTMLElement} htmlElement - The HTML element containing the number input.
   */
  constructor (htmlElement) {
    super()
    this.htmlElement = htmlElement
  }

  /**
   * Validates the length of a phone number string.
   *
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validatePhoneNumber () {
    if (this.htmlElement.value <= 0) {
      return this.createResult(false, 'No number entered')
    }
    const re = /\d/g
    const digits = this.htmlElement.value.match(re).join('')
    return this.#checkNumberLength(digits)
  }

  /**
   *
   * @param digits
   */
  #checkNumberLength (digits) {
    let message = ''
    let valid = false

    if (digits.length < 10 || digits.length > 11) {
      message = 'Invalid length of phone number'
    } else {
      message = 'Valid length of phone number '
      valid = true
    }
    return this.createResult(message, valid)
  }
}
