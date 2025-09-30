import { Validator } from '../../validators/validator.js'
document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')
  fields.forEach(field => {
    const validator = new Validator()

    const button = field.querySelector('button')
    const input = field.querySelector('input, textarea, select')
    const result = field.querySelector('.result')

    button.addEventListener('click', async () => {
      if (!input) return
      try {
        const validation = validator.validateInput(input.type, input.value)
        console.log(validator.validatePersonalNumber('1212121212'))
        validator.validateDate('2023-12-28')
        result.textContent = validation.message
      } catch (err) {
        console.error('Validation failed:', err.message)
      }
    })
  })
})
