import { createResult } from '../../middleWare/middleWare.js'
/**
 *
 */
export class EmailValidator {
  /**
   * Creates an instance of EmailValidator.
   *
   * @param {HTMLElement} htmlElement - The HTML element containing the email input.
   */
  constructor (htmlElement) {
    this.htmlElement = htmlElement
  }

  /**
   * Validates whether the provided email address is in a valid format.
   *
   * @returns {string} 'Valid email' if the email is valid, otherwise 'Not valid email'.
   */
  validateEmail () {
    if (!this.htmlElement) {
      return this.createResult(false, 'Enter an emailaddress')
    }
    // https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const valid = regex.test((this.htmlElement.value))
    console.log(valid)
    return createResult(valid, valid ? 'Valid emailaddress' : 'Invalid emailaddress')
  }
}
