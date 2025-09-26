import { PasswordValidator } from '../validators/passwordValidator/passwordValidator'

const validator = new PasswordValidator()

test('returns valid when password is correct length', () => {
  const result = validator.checkPassword('KallE1213', 8)
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Password is valid')
})

test('returns false when password doesnt meet requirements', () => {
  const result = validator.checkPassword('Kalle')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Password doesnt meet the rquirements')
})

test('returns false when password is not provided', () => {
  const result = validator.checkPassword()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Password was not provided')
})

test('returns false when password is not a string', () => {
  /**
   *
   */
  const test = () => { return validator.checkPassword(5) }
  expect(test).toThrow(TypeError)
  expect(test).toThrow('Must be a string')
})
