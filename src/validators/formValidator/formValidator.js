import { createResult } from '../../middleWare/middleWare.js'

/**
 *
 */
export class FormValidator {
  /**
   * Creates an instance of FormValidator.
   *
   * @param {HTMLElement} htmlElement - The HTML element containing the input.
   */
  constructor (htmlElement) {
    this.htmlElement = htmlElement
  }

  /**
   * Checks if the provided input value is not empty.
   *
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  isNotEmpty () {
    if (!this.htmlElement) {
      return { valid: false, message: '❌ HTMLElement is empty' }
    }
    const valid = this.htmlElement != null && this.htmlElement.value.trim().length > 0
    return createResult(valid, valid ? 'Input is not empty' : 'Input is empty')
  }

  /**
   * Checks if the provided checkbox is checked or not.
   *
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  checkBoxChecker () {
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]')
    if (checkBoxes.length > 1) {
      checkBoxes = [...checkBoxes]
    }
    const valid = [...checkBoxes].some(checkbox => checkbox.checked)
    return createResult(valid, valid ? 'Checkbox is checked' : 'Checkbox is not checked')
  }

  /**
   * Checks if the provided radiobox is ticked or not.
   *
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  radioChecker () {
    const radios = document.querySelectorAll('input[type="radio"]')
    const valid = [...radios].some(radio => radio.checked)
    return createResult(valid, valid ? 'Radiobutton is selected' : 'Radiobutton is not selected')
  }
}
