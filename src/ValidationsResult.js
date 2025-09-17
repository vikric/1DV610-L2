import { Validator } from './validators/index.js'

document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')

  fields.forEach(field => {
    const button = field.querySelector('button')
    const input = field.querySelector('input, textarea, select')
    const result = field.querySelector('.result')
    const validator = new Validator(input)

    button.addEventListener('click', async () => {
      if (!input) return
      const validation = validator.validateInput(input)
      if (input) {
        /*        if (input.type === 'email') {
          validation = validator.validateEmail()
        } else if (input.type === 'number') {
          validation = validator.validateNumber()
        } */
      }
      result.textContent = validation.message
    })
  })
})
