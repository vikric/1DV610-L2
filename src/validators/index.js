import { EmailValidator } from './EmailValidator/emailValidator.js'
import { FormValidator } from './formValidator/formValidator.js'
import { PhoneNrValidator } from './phoneNrValidator/phoneNrValidator.js'

/**
 *
 */
export class Validator {
  /**
   * Initializes the Validator with form, email, and phone number validators.
   */
  constructor () {
    this.formValidator = new FormValidator()
    this.emailValidator = new EmailValidator()
    this.phoneNrValidator = new PhoneNrValidator()
  }

  /**
   * Validates the provided input using the form validator.
   *
   * @param {any} input - The input value to be validated.
   * @returns {boolean} Returns true if the input is valid, otherwise false.
   */
  validateInput (input) {
    return this.formValidator.validate(input)
  }

  /**
   * Validates the provided email address.
   *
   * @param {string} email - The email address to validate.
   * @returns {boolean} Returns true if the email is valid, otherwise false.
   */
  checkEmail (email) {
    return this.emailValidator.validateEmail(email)
  }

  /**
   * Validates the provided phone number.
   *
   * @param {string} number - The phone number to validate.
   * @returns {boolean} Returns true if the phone number is valid, otherwise false.
   */
  validateNumber (number) {
    return this.phoneNrValidator.validateNumber(number)
  }
}
