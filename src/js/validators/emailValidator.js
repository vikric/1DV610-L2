import {
  checkIsString,
  createValidMessage,
  createInvalidMessage
} from '../middleWare/middleWare.js'

/**
 *
 */
export class EmailValidator {
  /**
   * Validates whether the provided email address is in a valid format.
   *
   * @param {string} email - The email address to validate.
   * @returns {string} 'Valid email' if the email is valid, otherwise 'Not valid email'.
   */
  validateEmailAddress (email) {
    if (!email) {
      return createInvalidMessage('Enter an emailaddress')
    }
    checkIsString(email)

    // https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const valid = regex.test(email)
    return valid
      ? createValidMessage('Valid emailaddress')
      : createInvalidMessage('Invalid emailaddress')
  }
}
