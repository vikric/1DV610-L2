import { DateValidator } from '../validators/dateValidator.js'

const validator = new DateValidator()

test('returns valid when date have correct format', () => {
  const result = validator.validateDateString('2025-09-30')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Date is valid')
})

test('returns valid when date have correct format', () => {
  const result = validator.validateDateString('30/09/25')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Date is valid')
})

test('returns false  when date do not have correct format', () => {
  const result = validator.validateDateString('2025/09/30')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Date is invalid')
})

test('returns false  when not date is provided', () => {
  const result = validator.validateDateString()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ No date provided')
})

test('returns false when date is not a string', () => {
  /**
   * Test that throws a TypeError when input is not a string.
   *
   * @returns {void}
   */
  const test = () => {
    return validator.validateDateString(55)
  }
  expect(test).toThrow(TypeError)
  expect(test).toThrow('Must be a string')
})
