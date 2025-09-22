import { EmailValidator } from './EmailValidator/emailValidator.js'
import { FormValidator } from './formValidator/formValidator.js'
import { PhoneNrValidator } from './phoneNrValidator/phoneNrValidator.js'
import { PersonalNumberValidator } from './personNumberValidator/personalNumberValidator.js'
import { missingInputSendError } from '../middleWare/middleWare.js'
import { PasswordValidator } from './passwordValidator/passwordValidator.js'
import { DOMFormValidator } from './domFormValidator/DOMFormValidator.js'
/**
 *
 */
export class Validator {
  /**
   * Initializes the Validator with form, email, and phone number validators.
   *
   * @param {HTMLElement} element The input element to be validated.
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
   * @param {*} value The value of the input element to validate.
   * @returns {boolean} Returns true if the input is valid, otherwise false.
   */
  validateInput (type, value) {
    console.log(type, value)
    switch (type) {
      case 'text':
      case 'search':
      case 'password':
      case 'time':
      case 'url':
        return this.formValidator.isNotEmpty(value)

      case 'email':
        return this.validateEmail(value)

      case 'number':
      case 'tel':
        return this.validateNumber(value)

      case 'checkbox':
        return this.validateCheckbox(value)

      case 'radio':
        return this.validateRadio(value)
    }
  }

  /**
   * Validates the provided email address.
   *
   * @returns {boolean} Returns true if the email is valid, otherwise false.
   */
  validateEmail (value) {
    return this.emailValidator.validateEmail(value)
  }

  /**
   * Validates the provided phone number.
   *
   * @returns {boolean} Returns true if the phone number is valid, otherwise false.
   */
  validateNumber (value) {
    return this.phoneNrValidator.validatePhoneNumber(value)
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
   *
   * @param length
   * @param value
   * @param minlength
   */
  validatePassword (value, minlength = 8) {
    return this.passwordValidator.checkPassword(value, minlength)
  }
}
