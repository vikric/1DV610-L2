/**
 *
 */
export class FormValidator {
  /**
   * Validates the input element based on its type and value.
   *
   * @param {HTMLInputElement} element - The input element to validate.
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  validate (element) {
    if (!element) {
      return {
        valid: false, message: 'No element was found'
      }
    }

    if (
      ['text', 'email', 'number', 'search', 'tel', 'url', 'password', 'time']
        .includes(element.type)) {
      return this.#isNotEmpty(element.value)
    }

    if (element.type === 'checkbox') {
      return this.#checkBoxChecker(element)
    }

    if (element.type === 'radio') {
      return this.#radioChecker(element)
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
