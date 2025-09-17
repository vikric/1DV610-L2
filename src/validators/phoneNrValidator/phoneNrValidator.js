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
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validatePhoneNumber () {
    if (this.htmlElement.value <= 0) {
      return this.returnMessage('No number entered', false)
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
    return this.returnMessage(message, valid)
  }

  /**
   *
   * @param message
   * @param valid
   */
  returnMessage (message, valid) {
    return { valid, message }
  }
}
