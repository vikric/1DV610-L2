import { PasswordValidator } from '../validators/passwordValidator/passwordValidator'

const validator = new PasswordValidator()

test('returns valid when password is correct length', () => {
  const result = validator.checkPassword('KallE1213', 8)
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Password is valid')
})

test('returns false when password doesnt meet requirements', () => {
  const result = validator.checkPassword('Kale')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Password doesnt meet the rquirements')
})

test('throws a TypeError with message STOP', () => {
  /**
   *
   */
  const test = () => {
    return validator.checkPassword()
  }

  expect(test).toThrow(Error)
  expect(test).toThrow('Missing Value')
}
)
