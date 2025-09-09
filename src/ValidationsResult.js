import { FormValidator } from './FormValidator.js'
const validator = new FormValidator()

document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')

  fields.forEach(field => {
    const button = field.querySelector('button')
    const input = field.querySelector('.nameInput')
    const checkbox = field.querySelector('.checkbox')
    const result = field.querySelector('.result')
    const checkboxResult = field.querySelector('.checkboxResult')

    button.addEventListener('click', () => {
      if (checkbox && checkbox.type === 'checkbox') {
        const validation = validator.checkBoxChecker(checkbox)
        checkboxResult.textContent = validation.message
        return
      }

      if (input && input.type === 'text') {
        const validation = validator.isNotEmpty(input.value)
        result.textContent = validation.message
        return
      }
      if (input.type === 'radio') {
        console.log('RADIO!')
      }
    })
  })
})
