/**
 *
 */
export class FormValidator {
  /**
   *
   * @param htmlElement
   */

  /**
   * Validates the input element based on its type and value.
   *
   * @param {HTMLInputElement} htmlElement - The input element to validate.
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  validate (htmlElement) {
    if (!htmlElement) {
      return {
        valid: false, message: 'No element was found'
      }
    }

    if (
      ['text', 'email', 'number', 'search', 'tel', 'url', 'password', 'time']
        .includes(htmlElement.type)) {
      return this.#isNotEmpty(htmlElement.value)
    }

    if (htmlElement.type === 'checkbox') {
      return this.#checkBoxChecker(htmlElement)
    }

    if (htmlElement.type === 'radio') {
      return this.#radioChecker(htmlElement)
    }
    return {
      valid: false, message: 'No supported element was found'
    }
  }

  /**
   * Checks if the provided input value is not empty.
   *
   * @param {string} element - The value of the input element to check.
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  #isNotEmpty (element) {
    const valid = element != null && element.trim().length > 0
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
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  #radioChecker (element) {
    const radiobuttons = document.querySelectorAll(`input[type="${element.type}"]`
    )
    const valid = [...radiobuttons].some(radio => radio.checked)
    return {
      valid,
      message: valid ? '✅ Radiobutton is selected' : '❌ Radiobutton is not selected'
    }
  }
}
