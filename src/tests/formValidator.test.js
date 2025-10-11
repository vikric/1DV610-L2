import { FormValidator } from '../js/validators/formValidator.js'

const validator = new FormValidator()

test('returns valid when value is not empty', () => {
  const result = validator.isNotEmpty('hello')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Input is not empty')
})

test('returns invalid when value is empty', () => {
  const result = validator.isNotEmpty('')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Input is empty')
})

test('returns invalid when value is not provided', () => {
  const result = validator.isNotEmpty()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Input is empty')
})

test('throws a TypeError when input is incorrect type', () => {
  /**
   * Test that throws a TypeError when input is not a string.
   *
   * @returns {void}
   */
  const test = () => {
    return validator.isNotEmpty(5)
  }
  expect(test).toThrow(TypeError)
  expect(test).toThrow('Must be a string')
})
