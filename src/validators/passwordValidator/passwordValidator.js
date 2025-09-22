import { createResult, missingValue } from '../../middleWare/middleWare'

/**
 *
 */
export class PasswordValidator {
  /**
   *
   * @param htmlElement
   */
  constructor (htmlElement) {
    this.htmlElement = htmlElement
  }

  /**
   *
   * @param value
   * @param password
   * @param minlength
   */
  checkPassword (password, minlength = 8) {
    if (!password) {
      return missingValue()
    }

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
          hasLowerCase++
        } else if (lowerCase.test(count)) {
          hasUpperCase++
        } else if (digits.test(count)) {
          hasDigits++
        }
      }
      if (hasUpperCase > 1 && hasLowerCase > 1 && hasDigits > 1) {
        return createResult(true, 'Password is valid')
      } /* else {
      return createResult(false, 'Password doesnt meet the rquirements')} */
    }
return createResult(false, 'Password doesnt meet the rquirements')
  }
}
// 12 eller 10 siffror
// 11 22 33 44 55 66
