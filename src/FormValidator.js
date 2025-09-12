/**
 *
 */
export class FormValidator {
  /**
   *
   * @param element
   */
  validate (element) {
    if (!element) {
      return {
        valid: false, message: 'No element was found'
      }
    }
    console.log(element)

    if (
      ['text', 'email', 'number', 'search', 'tel', 'url', 'password', 'time']
        .includes(element.type)) {
      return this.isNotEmpty(element.value)
    }

    if (element.type === 'checkbox') {
      return this.checkBoxChecker(element)
    }

    if (element.type === 'radio') {
      return this.radioChecker(element)
    }
  }

  /**
   *
   * @param element
   */
  isNotEmpty (element) {
    const valid = element != null && element.trim().length > 0
    return {
      valid,
      message: valid ? '✅ Input is not empty' : '❌ Input is empty'
    }
  }

  /**
   *
   * @param element
   */
  checkBoxChecker (element) {
    const valid = element.checked
    return {
      valid,
      message: valid ? '✅ Checkbox is checked' : '❌ Checkbox is not checked'
    }
  }

  /**
   *
   * @param element
   */
  radioChecker (element) {
    const radiobuttons = document.querySelectorAll(`input[type="${element.type}"]`
    )
    const valid = [...radiobuttons].some(radio => radio.checked)
    return {
      valid,
      message: valid ? '✅ Radiobutton is selected' : '❌ Radiobutton is not selected'
    }
  }

  /**
   *
   * @param data
   */
  async ping (url) {
    const startTime = Date.now()
    try {
      const request = await fetch(url, { method: 'HEAD' })
      if (!request.ok) {
        throw new Error('Ping failed', request.statusText)
      }
      const endTime = Date.now() - startTime
      console.log(`Server responded in ${endTime} ms`)
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
