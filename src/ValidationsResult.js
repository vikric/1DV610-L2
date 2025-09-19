import { Validator } from './validators/validator.js'

document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')

  fields.forEach(field => {
    const button = field.querySelector('button')
    const input = field.querySelector('input, textarea, select')

    const result = field.querySelector('.result')
    const validator = new Validator(input)

    button.addEventListener('click', async () => {
      if (!input) return
      const validation = validator.validateInput()
      result.textContent = validation.message
    })
  })
})
