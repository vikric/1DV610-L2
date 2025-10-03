import {
  validateStringType,
  createInvalidMessage,
  createValidMessage,
} from "../middleWare/middleWare.js";

/**
 *
 */
export class PasswordValidator {
  /**
   * Validates a password based on minimum length and character requirements.
   *
   * @param {string} password - The password string to validate.
   * @param {number} [minlength = 8] - The minimum required length for the password.
   * @returns {object} Result object indicating if the password is valid and a message.
   */
  validatePassword(password, minlength = 8) {
    if (!password) {
      return createInvalidMessage("Password was not provided");
    }
    validateStringType(password);

    const validLength = password.length >= minlength;

    if (validLength) {
      return this.#requirementsChecker(password);
    }
    return createInvalidMessage("Password doesnt meet the requirements");
  }

  #requirementsChecker(password) {
    const counter = {
      upperCase: 0,
      lowerCase: 0,
      digits: 0,
    };

    for (const char of password) {
      counter.upperCase = password.match(/[A-Z]/g);
      counter.lowerCase = password.match(/[a-z]/g);
      counter.digits = password.match(/\d/g);

      if (
        counter.upperCase.length > 1 &&
        counter.lowerCase.length > 1 &&
        counter.digits.length > 1
      )
        return createValidMessage("Password is valid");
    }
  }
}
