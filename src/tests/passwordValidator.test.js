import { PasswordValidator } from '../validators/passwordValidator'

const validator = new PasswordValidator()

test('returns valid when password has correct length', () => {
  const result = validator.validatePassword('KallE1213', 8)
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Password is valid')
})

test('returns false when password doesnt meet requirements', () => {
  const result = validator.validatePassword('Kalle', 6)
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Password doesnt meet the requirements')
})

test('returns false when password is not provided', () => {
  const result = validator.validatePassword()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Password was not provided')
})

test('returns false when password is not a string', () => {
  /**
   * Test that throws a TypeError when input is not a string.
   *
   * @returns {void}
   */
  const test = () => { return validator.validatePassword(5) }
  expect(test).toThrow(TypeError)
  expect(test).toThrow('Must be a string')
})
