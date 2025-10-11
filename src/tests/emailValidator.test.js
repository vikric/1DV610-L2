import { EmailValidator } from '../js/validators/emailValidator.js'

const validator = new EmailValidator()

test('returns valid when emailaddress is correctly formatted', () => {
  const result = validator.validateEmailAddress('test@kalle.se')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Valid emailaddress')
})

test('returns invalid when emailaddress is incorrectly formatted', () => {
  const result = validator.validateEmailAddress('testkalle.se')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Invalid emailaddress')
})

test('returns invalid when emailaddress is not provided', () => {
  const result = validator.validateEmailAddress()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Enter an emailaddress')
})

test('throws a TypeError when input is empty', () => {
  /**
   * Test that throws a TypeError when input is not a string.
   *
   * @returns {void}
   */
  const test = () => {
    return validator.validateEmailAddress(5)
  }

  expect(test).toThrow(TypeError)
  expect(test).toThrow('Must be a string')
})
