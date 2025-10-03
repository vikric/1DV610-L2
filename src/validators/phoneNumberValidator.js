import {
  validateStringType,
  createInvalidMessage,
  createValidMessage,
} from "../middleWare/middleWare.js";

/**
 *
 */
export class PhoneNumberValidator {
  /**
   * Validates the phone number.
   *
   * @param {string} phoneNumber - The phone number to validate.
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validatePhoneNumber(phoneNumber) {
    if (!phoneNumber || phoneNumber.length < 1) {
      return createInvalidMessage("No number entered");
    }
    validateStringType(phoneNumber);

    const digitsOnly = this.#digitChecker(phoneNumber);
    if (!digitsOnly) return createInvalidMessage("Invalid length on number");

    const valid = this.#sweDigitsChecker(digitsOnly);

    return this.#validChecker(valid);
  }

  /**
   * Removes all non digits.
   *
   * @param {string} phoneNumber - The phone number to check.
   * @returns {string} A string with only digits.
   */
  #digitChecker(phoneNumber) {
    // /\D/g Removes any non digit
    return phoneNumber.replaceAll(/\D/g, "");
  }

  /**
   * Check if start digits are for swedish cellularphones.
   *
   * @param {string} digits - The digits to check.
   * @returns {Boolean}
   */
  #sweDigitsChecker(digits) {
    const startDigits = digits.toString().substring(0, 2);
    const valid =
      (startDigits === "46" && digits.length === 11) ||
      (startDigits === "07" && digits.length === 10);
    return valid;
  }

  #validChecker(valid) {
    return valid
      ? createValidMessage("Valid number entered")
      : createInvalidMessage("Invalid number entered");
  }
}
