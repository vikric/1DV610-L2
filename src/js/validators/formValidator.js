import {
  checkIsString,
  createValidMessage,
  createInvalidMessage
} from '../middleWare/middleWare.js'

/**
 *
 */
export class FormValidator {
  /**
   * Checks if the provided input value is not empty.
   *
   * @param {string} input - The input value to check for emptiness.
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  isNotEmpty (input) {
    if (!input) {
      return createInvalidMessage('Input is empty')
    }
    checkIsString(input)
    const valid = input.trim().length > 0
    return valid
      ? createValidMessage('Input is not empty')
      : createInvalidMessage('Input is empty')
  }
}
