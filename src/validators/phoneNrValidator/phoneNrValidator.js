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
   * The variables which holds the phonenumber
   *
   */
  #phoneNumber

  /**
   * Validates the phone number.
   *
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validatePhoneNumber () {
    if (this.htmlElement.value <= 0) {
      return this.createResult(false, 'No number entered')
    }
    // Feature / Bug that letters will be removed with this.
    // Number 070 123 45 67 Testkalle will work
    // Since it removes everything except digits
    const regex = /\d/g
    this.#phoneNumber = this.htmlElement.value.match(regex).join('')

    const correctStartDigits = this.#startDigitsSWE()

    if (correctStartDigits) {
      return this.createResult(true, 'Valid number entered')
    }
    return this.createResult(false, 'Invalid number entered')
  }

  /**
   * Validates the length of the number.
   *
   * @param {string} length  - How long the number should be.
   * @returns {boolean} Result if length of number is same as argument.
   */
  #checkNumberLength (length) {
    if (this.#phoneNumber.length === length) {
      return true
    }
    return false
  }

  /**
   * Checks if the phone number starts with valid Swedish start digits and has the correct length.
   *
   * @returns {boolean} True if the phone number has valid start digits and correct length, otherwise false.
   */
  #startDigitsSWE () {
    const startDigits = this.#phoneNumber.substring(0, 2)

    switch (startDigits) {
      case '46':
        return this.#checkNumberLength(11)
      case '07':
        return this.#checkNumberLength(10)
    }
  }
}
