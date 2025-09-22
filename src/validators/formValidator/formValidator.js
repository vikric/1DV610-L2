import { createResult } from '../../middleWare/middleWare.js'

/**
 *
 */
export class FormValidator {
  /**
   * Checks if the provided input value is not empty.
   *
   * @param {string} value - The input value to check for emptiness.
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  isNotEmpty (value) {
    const valid = typeof value === 'string' && value.trim().length > 0
    return createResult(valid, valid ? 'Input is not empty' : 'Input is empty')
  }
}
