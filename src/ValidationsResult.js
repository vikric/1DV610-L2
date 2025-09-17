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
      /* const validation = validator.validateInput(input) */

      if (input) {
        const email = validator.validateEmail()
        if (input.type === 'number') {
          console.log(validator.validateNumber())
        } else {
          /* console.log(validation) */
        }
        result.textContent = email.message
      }
    })
  })
})
