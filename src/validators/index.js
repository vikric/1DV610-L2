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
   * @param {HTMLElement} element The input element to be validated.
   */
  constructor (element) {
    this.element = element
    this.formValidator = new FormValidator(element)
    this.emailValidator = new EmailValidator(element)
    this.phoneNrValidator = new PhoneNrValidator(element)
  }

  /**
   * Validates the provided input using the form validator.
   *
   * @returns {boolean} Returns true if the input is valid, otherwise false.
   */
  validateInput () {
    console.log(this.element.type)
    switch (this.element.type) {
      case 'text':
      case 'search':
      case 'password':
      case 'time':
      case 'url':
        return this.formValidator.isNotEmpty()

      case 'email':
        return this.validateEmail()

      case 'number':
      case 'tel':
        return this.validateNumber()

      case 'checkbox':
        return this.validateCheckbox()

      case 'radio':
        return this.validateRadio()
    }
  }

  /**
   * Validates the provided email address.
   *
   * @returns {boolean} Returns true if the email is valid, otherwise false.
   */
  validateEmail () {
    return this.emailValidator.validateEmail()
  }

  /**
   * Validates the provided phone number.
   *
   * @returns {boolean} Returns true if the phone number is valid, otherwise false.
   */
  validateNumber () {
    return this.phoneNrValidator.validatePhoneNumber()
  }

  /**
   * Validates the provided checkboxes.
   *
   * @returns {boolean} Returns true if a checkbox is selected, otherwise false.
   */
  validateCheckbox () {
    return this.formValidator.checkBoxChecker()
  }

  /**
   * Validates the radio button selection.
   *
   * @returns {boolean} Returns true if a radio button is selected, otherwise false.
   */
  validateRadio () {
    return this.formValidator.radioChecker()
  }
}
