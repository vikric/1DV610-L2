import { FormValidator } from './FormValidator.js'
const validator = new FormValidator()

document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')

  fields.forEach(field => {
    const button = field.querySelector('button')
    const input = field.querySelector('input, textarea, select')
    const result = field.querySelector('.result')

    button.addEventListener('click', async () => {
      if (!input) return
      const validation = validator.validate(input)
      if (input) {
        result.textContent = validation.message
        validator.ping('www.aftonbladet.org')
        
      try {
        const request = await fetch('http://localhost:64574/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: 'kalle@homail.se'
            })
        })
        const text = await request.text()
        /* console.log(text) */
        if (!request.ok) {
          throw new Error('Ping domain failed', text)
        }

      } catch (err) {
        throw new Error(err.message)
      }
    }

      
    })
  })
})
