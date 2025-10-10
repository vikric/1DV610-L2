import { PasswordValidator } from '../validators/passwordValidator'

const validator = new PasswordValidator()

test('returns valid when password has correct length', () => {
  const result = validator.validatePasswordRequirements('KallE1213', 8)
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Password is valid')
})

test('returns false when password is not long enough', () => {
  const result = validator.validatePasswordRequirements('Test')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Password must be at least 8 characters long')
})


test('returns false when password doesnt meet requirements', () => {
  const result = validator.validatePasswordRequirements('Kalle', 6)
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Password must be at least 6 characters long')
})

test('returns false when password doesnt meet requirements', () => {
  const result = validator.validatePasswordRequirements('AbRaKaDaBrA1')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Password must contain atleast 2 uppercase letters, 2 lowercase letters and 2 digits')
})

test('returns false when password is not provided', () => {
  const result = validator.validatePasswordRequirements()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Password was not provided')
})

test('returns false when password is not a string', () => {
  /**
   * Test that throws a TypeError when input is not a string.
   *
   * @returns {void}
   */
  const test = () => { return validator.validatePasswordRequirements(5) }
  expect(test).toThrow(TypeError)
  expect(test).toThrow('Must be a string')
})
