import { Validator } from '../../js/index.js'
const validator = new Validator()

const correctFormatNumber = validator.validatePhoneNumber('070 123 45 78')
console.log(correctFormatNumber)

const incorrectFormatNumber = validator.validatePhoneNumber('70 123 45 78')
console.log(incorrectFormatNumber)

document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')
  fields.forEach((field) => {
    const button = field.querySelector('button')
    const input = field.querySelector('input, textarea, select')
    const result = field.querySelector('.result')

    button.addEventListener('click', async () => {
      if (!input) return
      try {
        const validation = validator.validateInput(input.type, input.value)
        const password = validator.validatePassword('PassWord123', 8)
        console.log(password)
        result.textContent = validation.message
      } catch (err) {
        console.error('Validation failed:', err.message)
      }
    })
  })
})
