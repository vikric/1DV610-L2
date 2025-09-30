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
        const email = validator.validateEmail('test@test.se')
        const checkbox = validator.validateCheckbox(input.value)
        const radio = validator.validateRadio(input.value)
        const phoneNumber = validator.validatePhoneNumber('070 123 45 78')
        const password = validator.validatePassword('PassWord123', 8)
        const personalNumber = validator.validatePersonalNumber('1212121212')
        const date = validator.validateDate('2023-12-28')
        console.log(email)
        console.log(checkbox)
        console.log(radio)
        console.log(phoneNumber)
        console.log(password)
        console.log(personalNumber)
        console.log(date)
        result.textContent = validation.message
      } catch (err) {
        console.error('Validation failed:', err.message)
      }
    })
  })
})
