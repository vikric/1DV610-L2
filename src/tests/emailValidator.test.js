import { EmailValidator } from '../validators/EmailValidator/emailValidator'

const validator = new EmailValidator()

test('returns valid when value is not empty', () => {
  const result = validator.validateEmail('test@kalle.se')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Valid emailaddress')
})

test('returns invalid when value is not correct', () => {
  const result = validator.validateEmail('testkalle.se')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Invalid emailaddress')
})

test('returns invalid when value is empty', () => {
  const result = validator.validateEmail()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Enter an emailaddress')
})
