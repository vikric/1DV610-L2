import { EmailValidator } from './EmailValidator/emailValidator.js'
import { FormValidator } from './formValidator/formValidator.js'
import { PhoneNrValidator } from './phoneNrValidator/phoneNrValidator.js'
import { PersonalNumberValidator } from './personNumberValidator/personalNumberValidator.js'
import { PasswordValidator } from './passwordValidator/passwordValidator.js'
import { DOMFormValidator } from './domFormValidator/DOMFormValidator.js'
/**
 *
 */
export class Validator {
  /**
   * Initializes the Validator with form, email, and phone number validators.
   *
   */
  constructor () {
    this.formValidator = new FormValidator()
    this.emailValidator = new EmailValidator()
    this.phoneNrValidator = new PhoneNrValidator()
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
    console.log(type, input)
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
        return this.validateNumber(input)

      case 'checkbox':
        return this.validateCheckbox(input)

      case 'radio':
        return this.validateRadio(input)
    }
  }

  /**
   * Validates the provided email address.
   *
   * @param {string} email The email address to validate.
   * @returns {boolean} Returns true if the email is valid, otherwise false.
   */
  validateEmail (email) {
    try {
      return this.emailValidator.validateEmail(email)
    } catch (e) {
      console.error(e)
      return false
    }
  }

  /**
   * Validates the provided phone number.
   *
   * @param {number} number - The number to validate.
   * @returns {boolean} Returns true if the phone number is valid, otherwise false.
   */
  validateNumber (number) {
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
    return this.domFormValidator.radioChecker()
  }

  /**
   * Validates the provided password against a minimum length requirement.
   *
   * @param {string} password The password string to validate.
   * @param {number} [minlength=8] The minimum length required for the password.
   * @returns {boolean} Returns true if the password meets the requirements, otherwise false.
   */
  validatePassword (password, minlength = 8) {
    return this.passwordValidator.checkPassword(password, minlength)
  }
}
