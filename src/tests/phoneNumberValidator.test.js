import { PhoneNrValidator } from '../validators/phoneNrValidator/phoneNrValidator.js'

const validator = new PhoneNrValidator()

test('returns valid when phonenumber have correct length', () => {
  const result = validator.validatePhoneNumber('070 123 4578')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Valid number entered')
})

test('returns valid when phonenumber have correct length', () => {
  const result = validator.validatePhoneNumber('0701234578')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Valid number entered')
})

test('returns valid when phonenumber have correct length', () => {
  const result = validator.validatePhoneNumber('070-1234578')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Valid number entered')
})

test('returns false when phonenumber doesnt have correct length', () => {
  const result = validator.validatePhoneNumber('112')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Invalid number entered')
})

test('returns false when phonenumber doesnt have correct length', () => {
  const result = validator.validatePhoneNumber()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ No number entered')
})

test('returns false when phonenumber is not a string', () => {
  /**
   *
   */
  const test = () => { return validator.validatePhoneNumber(55) }
  expect(test).toThrow(TypeError)
  expect(test).toThrow('Must be a string')
})
