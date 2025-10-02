import { createResult, validateType } from '../middleWare/middleWare.js'

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
      return createResult(false, 'Input is empty')
    }
    validateType(input)
    const valid = input.trim().length > 0
    return createResult(valid, valid ? 'Input is not empty' : 'Input is empty')
  }
}
