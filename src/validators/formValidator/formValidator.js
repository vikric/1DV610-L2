import { CreateResult } from '../createResult/createResult'
/**
 *
 */
export class FormValidator extends CreateResult {
  /**
   * Creates an instance of FormValidator.
   *
   * @param {HTMLElement} htmlElement - The HTML element containing the input.
   */
  constructor (htmlElement) {
    super()
    this.htmlElement = htmlElement
  }

  /**
   * Checks if the provided input value is not empty.
   *
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  isNotEmpty () {
    if (!this.htmlElement) {
      return { valid: false, message: '❌ Input is empty' }
    }
    const valid = this.htmlElement != null && this.htmlElement.value.trim().length > 0
    return {
      valid,
      message: valid ? '✅ Input is not empty' : '❌ Input is empty'
    }
  }

  /**
   * Checks if the provided checkbox is checked or not.
   *
   * @param {HTMLInputElement} element - The checkbox element to validate.
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  #checkBoxChecker (element) {
    const valid = element.checked
    return {
      valid,
      message: valid ? '✅ Checkbox is checked' : '❌ Checkbox is not checked'
    }
  }

  /**
   * Checks if the provided radiobox is ticked or not.
   *
   * @param {HTMLInputElement} element - The checkbox element to validate.
   * @param elements
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  #radioChecker (elements) {
    /* const radiobuttons = document.querySelectorAll(`input[type="${element.type}"]`
    ) */
    const valid = [...elements].some(radio => radio.checked)
    return {
      valid,
      message: valid ? '✅ Radiobutton is selected' : '❌ Radiobutton is not selected'
    }
  }
}
