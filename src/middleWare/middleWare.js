/**
 * Creates an object indicating a sucesss and a formatted message.
 *
 * @param {string} message - The message to display.
 * @returns {{valid: boolean, message: string}} The result object with validity and formatted message.
 */
export function createValidMessage(message) {
  return {
    valid: true,
    message: `✅ ${message}`,
  };
}

/**
 * Creates an object indicating validity and a formatted message.
 *
 * @param {string} message - The message to display.
 * @returns {{valid: boolean, message: string}} The result object with validity and formatted message.
 */
export function createInvalidMessage(message) {
  return {
    valid: false,
    message: `❌ ${message}`,
  };
}

/**
 * Validates that the input is a string.
 *
 * @param {any} input - The value to validate.
 */
export function checkIsString(input) {
  switch (typeof input) {
    case "string":
      break;
    default:
      throw new TypeError("Must be a string");
  }
}
