/**
 *
 */
export class CreateResult {
  /**
   * Creates a result object indicating validity and a formatted message.
   *
   * @param {boolean} valid - Indicates if the result is valid.
   * @param {string} message - The message to display.
   * @returns {{valid: boolean, message: string}} The result object with validity and formatted message.
   */
  createResult (valid, message) {
    return {
      valid,
      message: valid ? `✅ ${message}` : `❌ ${message}`
    }
  }
}
