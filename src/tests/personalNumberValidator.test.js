import { PersonalNumberValidator } from '../validators/personalNumberValidator.js'

const validator = new PersonalNumberValidator()

test('returns valid when personal number have have correct length', () => {
  const result = validator.validatePersonalNumber('1212121212')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Valid personalnumber provided')
})

test('returns false when birthdate is incorrect', () => {
  const result = validator.validatePersonalNumber('12121212121')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Invalid length of personal number')
})

test('returns false when the last 4 digits are incorrect', () => {
  const result = validator.validatePersonalNumber('9005121244')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Invalid personalnumber provided')
})
