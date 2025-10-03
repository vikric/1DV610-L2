import {
  createValidMessage,
  createInvalidMessage,
} from "../middleWare/middleWare.js";
/**
 *
 */
export class DOMFormValidator {
  /**
   * Checks if the provided checkbox is checked or not.
   *
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  checkBoxChecker() {
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    if (checkBoxes.length > 1) {
      checkBoxes = [...checkBoxes];
    }
    const valid = [...checkBoxes].some((checkbox) => checkbox.checked);
    return valid
      ? createValidMessage("Checkbox is checked")
      : createInvalidMessage("Checkbox is not checked");
  }

  /**
   * Checks if the provided radiobox is ticked or not.
   *
   * @returns {{valid: boolean, message: string}} The validation result object.
   */
  radioButton() {
    const radios = document.querySelectorAll('input[type="radio"]');
    const valid = [...radios].some((radio) => radio.checked);
    return valid
      ? createValidMessage("Radiobutton is selected")
      : createInvalidMessage("Radiobutton is not selected");
  }
}
