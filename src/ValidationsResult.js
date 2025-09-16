import { Validator } from './validators/index.js'
const validator = new Validator()

document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')

  fields.forEach(field => {
    const button = field.querySelector('button')
    const input = field.querySelector('input, textarea, select')
    const result = field.querySelector('.result')

    button.addEventListener('click', async () => {
      if (!input) return
      const validation = validator.validateInput(input)
      if (input) {
        result.textContent = validation.message
        console.log(validator.checkEmail(input.value))
        /*         if (input.type === 'number') { */
        console.log(validator.validateNumber('(Test)072-   1501501  ').message)
        /*         }
 */ }
    })
  })
})
