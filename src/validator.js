import { EmailValidator } from './validators/emailValidator.js'
import { FormValidator } from './validators/formValidator.js'
import { PhoneNumberValidator } from './validators/phoneNumberValidator.js'
import { PersonalNumberValidator } from './validators/personalNumberValidator.js'
import { PasswordValidator } from './validators/passwordValidator.js'
import { DOMFormValidator } from './validators/DOMFormValidator.js'
import { DateValidator } from './validators/dateValidator.js'
/**
 *
 */
export class Validator {
  /**
   * Initializes the Validator with form, email, and phone number validators.
   *
   */
  constructor () {
    this.DateValidator = new DateValidator()
    this.formValidator = new FormValidator()
    this.emailValidator = new EmailValidator()
    this.phoneNrValidator = new PhoneNumberValidator()
    this.personalNumberValidator = new PersonalNumberValidator()
    this.passwordValidator = new PasswordValidator()
    this.domFormValidator = new DOMFormValidator()
  }

  /**
   * Validates the provided input using the form validator.
   *
   * @param {string} type The type of the input element to validate.
   * @param {*} input The value of the input element to validate.
   * @returns {boolean} Returns true if the input is valid, otherwise false.
   */
  validateInput (type, input) {
    switch (type) {
      case 'text':
      case 'search':
      case 'password':
      case 'time':
      case 'url':
        return this.formValidator.isNotEmpty(input)

      case 'email':
        return this.validateEmail(input)

      case 'number':
      case 'tel':
        return this.validatePhoneNumber(input)

      case 'checkbox':
        return this.validateCheckbox()

      case 'radio':
        return this.validateRadio()
    }
  }

  /**
   * Validates the provided email address.
   *
   * @param {string} email The email address to validate.
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validateEmail (email) {
    return this.emailValidator.validateEmailAddress(email)
  }

  /**
   * Validates the provided phone number.
   *
   * @param {number} number - The number to validate.
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validatePhoneNumber (number) {
    return this.phoneNrValidator.validatePhoneNumber(number)
  }

  /**
   * Validates the provided checkboxes.
   *
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validateCheckbox () {
    return this.domFormValidator.checkBoxChecker()
  }

  /**
   * Validates the radio button selection.
   *
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validateRadio () {
    return this.domFormValidator.radioButton()
  }

  /**
   * Validates the provided password against a minimum length requirement.
   *
   * @param {string} password The password string to validate.
   * @param {number} [minlength=8] The minimum length required for the password.
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validatePassword (password, minlength = 8) {
    return this.passwordValidator.validatePasswordRequirements(password, minlength)
  }

  /**
   * Validates the provided personal number.
   *
   * @param {string|number} personalNumber The personal number to validate.
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validatePersonalNumber (personalNumber) {
    return this.personalNumberValidator.validatePersonalNumber(personalNumber)
  }

  /**
   * Validates the provided date string.
   *
   * @param {string} dateStr The date string to validate.
   * @returns {{ valid: boolean, message: string }} Result of validation with validity and message.
   */
  validateDate (dateStr) {
    return this.DateValidator.validateDateString(dateStr)
  }
}
