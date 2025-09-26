import { Validator } from './validators/validator.js'
import { PersonalNumberValidator } from './validators/personNumberValidator/personalNumberValidator.js'

document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')

  fields.forEach(field => {
    const validator = new Validator()
    const person = new PersonalNumberValidator()

    const button = field.querySelector('button')
    const input = field.querySelector('input, textarea, select')
    const result = field.querySelector('.result')

    button.addEventListener('click', async () => {
      if (!input) return
      const validation = validator.validateInput(input.type, input.value)
      validator.validateEmail(/* 5 */)
      /* person.validatePersonalNumber('1912121212125') */
      validator.validatePersonalNumber('191212121212')
      /* console.log(validator.validatePassword(5)) */
      result.textContent = validation.message
    })
  })
})
