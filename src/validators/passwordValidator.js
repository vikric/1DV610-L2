import { createResult, validateType } from '../middleWare/middleWare.js'

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
  validatePassword (password, minlength = 8) {
    if (!password) {
      return createResult(false, 'Password was not provided')
    }
    validateType(password)

    const validLength = password.length >= minlength
    const upperCase = /[A-Z]/
    const lowerCase = /[a-z]/
    const digits = /[0-9]/

    let hasUpperCase = 0
    let hasLowerCase = 0
    let hasDigits = 0

    if (validLength) {
      for (const count of password) {
        if (upperCase.test(count)) {
          hasUpperCase++
        } else if (lowerCase.test(count)) {
          hasLowerCase++
        } else if (digits.test(count)) {
          hasDigits++
        }
      }
      if (hasUpperCase > 1 && hasLowerCase > 1 && hasDigits > 1) {
        return createResult(true, 'Password is valid')
      }
    }
    return createResult(false, 'Password doesnt meet the rquirements')
  }
}
