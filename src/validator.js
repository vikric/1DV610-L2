import { EmailValidator } from './validators/emailValidator/emailValidator.js'
import { FormValidator } from './validators/formValidator/formValidator.js'
import { PhoneNumberValidator } from './validators/phoneNumberValidator/phoneNumberValidator.js'
import { PersonalNumberValidator } from './validators/personNumberValidator/personalNumberValidator.js'
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
   * @returns {boolean} Returns true if the email is valid, otherwise false.
   */
  validateEmail (email) {
    return this.emailValidator.validateEmail(email)
  }

  /**
   * Validates the provided phone number.
   *
   * @param {number} number - The number to validate.
   * @returns {boolean} Returns true if the phone number is valid, otherwise false.
   */
  validatePhoneNumber (number) {
    return this.phoneNrValidator.validatePhoneNumber(number)
  }

  /**
   * Validates the provided checkboxes.
   *
   * @returns {boolean} Returns true if a checkbox is selected, otherwise false.
   */
  validateCheckbox () {
    return this.domFormValidator.checkBoxChecker()
  }

  /**
   * Validates the radio button selection.
   *
   * @returns {boolean} Returns true if a radio button is selected, otherwise false.
   */
  validateRadio () {
    return this.domFormValidator.radioButton()
  }

  /**
   * Validates the provided password against a minimum length requirement.
   *
   * @param {string} password The password string to validate.
   * @param {number} [minlength=8] The minimum length required for the password.
   * @returns {boolean} Returns true if the password meets the requirements, otherwise false.
   */
  validatePassword (password, minlength = 8) {
    return this.passwordValidator.validatePassword(password, minlength)
  }

  /**
   * Validates the provided personal number.
   *
   * @param {string|number} personalNumber The personal number to validate.
   * @returns {boolean} Returns true if the personal number is valid, otherwise false.
   */
  validatePersonalNumber (personalNumber) {
    return this.personalNumberValidator.validatePersonalNumber(personalNumber)
  }

  /**
   * Validates the provided date string.
   *
   * @param {string} dateStr The date string to validate.
   * @returns {boolean} Returns true if the date is valid, otherwise false.
   */
  validateDate (dateStr) {
    return this.DateValidator.validateDate(dateStr)
  }
}
