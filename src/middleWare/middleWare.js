/**
 * Creates a result object indicating validity and a formatted message.
 *
 * @param {boolean} valid - Indicates if the result is valid.
 * @param {string} message - The message to display.
 * @returns {{valid: boolean, message: string}} The result object with validity and formatted message.
 */
export function createResult (valid, message) {
  return {
    valid,
    message: valid ? `✅ ${message}` : `❌ ${message}`
  }
}

/**
 * Throw an error if HTML element is missing.
 */
export function missingInputSendError () {
  throw new Error('Missing htmlElement')
}

/**
 * Throws a TypeError when a required value is missing.
 */
export function missingValue () {
  throw new Error('Missing Value')
}
