import { EmailValidator } from './EmailValidator/emailValidator.js'
import { FormValidator } from './formValidator/formValidator.js'
import { PhoneNrValidator } from './phoneNrValidator/phoneNrValidator.js'

/**
 *
 */
export class Validator {
  /**
   * Initializes the Validator with form, email, and phone number validators.
   *
   * @param element
   */
  constructor (element) {
    this.formValidator = new FormValidator(element)
    this.emailValidator = new EmailValidator(element)
    this.phoneNrValidator = new PhoneNrValidator(element)
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
  validateEmail (email) {
    return this.emailValidator.validateEmail(email)
  }

  /**
   * Validates the provided phone number.
   *
   * @param {string} number - The phone number to validate.
   * @returns {boolean} Returns true if the phone number is valid, otherwise false.
   */
  validateNumber () {
    return this.phoneNrValidator.validatePhoneNumber()
  }

  /**
   *
   * @param element
   */
  validateCheckbox (element) {
    return this.formValidator.checkBoxChecker(element)
  }

  /**
   *
   * @param element
   */
  validateRadio (element) {
    return this.formValidator.radiochecker(element)
  }
}
