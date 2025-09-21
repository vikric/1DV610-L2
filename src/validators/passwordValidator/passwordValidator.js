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
   */
  checkLength (value = 8) {
    if (!value) {
      return missingValue()
    }

    const password = this.htmlElement.value
    const valid = password.length > value
    const upperCase = /[A-Z]/
    const lowerCase = /[a-z]/
    const digits = /[0-9]/
    let lowerCount = 0
    let upperCount = 0
    let numbers = 0

    if (valid) {
      for (const count of password) {
        if (upperCase.test(count)) {
          upperCount++
        } else if (lowerCase.test(count)) {
          lowerCount++
        } else if (digits.test(count)) {
          numbers++
        }
      }
      if (lowerCount > 1 && upperCount > 1 && numbers > 1) {
        passwordIsValid()
        return createResult(valid, valid ? 'Password length is valid' : 'Password to simple')
      } else {
        return createResult(valid, valid ? 'Pa')
      }
    }

    console.log(password)
    /* console.log(test.test(password)) */
  }
}
// 12 eller 10 siffror
// 11 22 33 44 55 66
