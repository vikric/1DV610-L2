import { DateValidator } from '../validators/dateValidator/dateValidator.js'

const validator = new DateValidator()

test('returns valid when phonenumber have correct length', () => {
  const result = validator.validateDate('2025-09-30')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Date is valid')
})

test('returns valid when phonenumber have correct length', () => {
  const result = validator.validateDate('2025/09/30')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Valid number entered')
})

/* test('returns valid when phonenumber have correct length', () => {
  const result = validator.validateDate('070-1234578')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Valid number entered')
}) */

/* test('returns false when phonenumber doesnt have correct length', () => {
  const result = validator.validateDate('112')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Invalid number entered')
}) */

/* test('returns false when phonenumber doesnt have correct length', () => {
  const result = validator.validateDate()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ No number entered')
}) */

/* test('returns false when phonenumber is not a string', () => { */
/**
 * Test that throws a TypeError when input is not a string.
 *
 * @returns {void}
 */
/*   const test = () => { return validator.validateDate(55) }
  expect(test).toThrow(TypeError)
  expect(test).toThrow('Must be a string')
}) */
