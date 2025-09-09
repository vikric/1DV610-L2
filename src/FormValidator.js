export class FormValidator {

  isNotEmpty(value) {
    const valid = value != null && value.trim().length > 0 
    return {
      valid,
      message: valid ? '✅ Input is not empty' : '❌ Input is empty'
    } 
  }

  checkBoxChecker(value)  {
    const valid = value.type === 'checkbox' && value.checked
    return {
      valid,
      message: valid ? '✅ Checkbox is checked' : '❌ Checkbox is not checked'
    }

  }

}
