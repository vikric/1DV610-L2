import { FormValidator } from './FormValidator.js'
const validator = new FormValidator()

document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')

  fields.forEach(field => {
    const button = field.querySelector('button')
    const input = field.querySelector('input, textarea, select')
    const result = field.querySelector('.result')

    button.addEventListener('click', () => {
      if (!input) return
      const validation = validator.validate(input)
      if (input) {
        result.textContent = validation.message
      }
    })
  })
})
