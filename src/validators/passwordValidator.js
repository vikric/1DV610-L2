import {
  checkIsString,
  createInvalidMessage,
  createValidMessage
} from '../middleWare/middleWare.js'

/**
 *
 */
export class PasswordValidator {
  /**
   * Validates a password based on minimum length and character requirements.
   *
   * @param {string} password - The password string to validate.
   * @param {number} [minlength = 8] - The minimum required length for the password.
   * @returns {object} Result object indicating if the password is valid and a message.
   */
  validatePasswordRequirements (password, minlength = 8) {
    if (!password) {
      return createInvalidMessage('Password was not provided')
    }
    checkIsString(password)

    if (password.length <= minlength) {
      return createInvalidMessage(
        `Password must be at least ${minlength} characters long`
      )
    }
    return this.#checkPasswordRequirements(password)
  }

  /**
   * Checks if the password contains at least 2 uppercase letters, 2 lowercase letters, and 2 digits.
   *
   * @param {string} password - The password string to check.
   * @returns {object} Result object indicating if the password meets the character requirements.
   */
  #checkPasswordRequirements (password) {
    const upperCaseMatches = password.match(/[A-Z]/g)
    const lowerCaseMatches = password.match(/[a-z]/g)
    const digitsMatches = password.match(/\d/g)

    const hasEnoughUpperCase = upperCaseMatches.length >= 2
    const hasEnoughLowerCase = lowerCaseMatches.length >= 2
    const hasEnoughDigits = digitsMatches.length >= 2

    if (hasEnoughUpperCase && hasEnoughLowerCase && hasEnoughDigits) {
      return createValidMessage('Password is valid')
    }
    return createInvalidMessage(
      'Password must contain atleast 2 uppercase letters, 2 lowercase letters and 2 digits'
    )
  }
}
