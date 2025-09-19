import { createResult } from '../../middleWare/middleWare'

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
    const password = this.htmlElement.value

    const valid = password.length > value

    return createResult(valid, valid ? 'Password length is valid' : 'Password to simple')
  }
}

// 12 eller 10 siffror
// 11 22 33 44 55 66
