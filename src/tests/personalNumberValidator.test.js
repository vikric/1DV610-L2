import { PersonalNumberValidator } from '../validators/personNumberValidator/personalNumberValidator.js'

const validator = new PersonalNumberValidator()

test('returns valid when personal number have have correct length', () => {
  const result = validator.validatePersonalNumber('190102034455')
  expect(result.valid).toBe(true)
  expect(result.message).toBe('✅ Correct date entered')
})

test('returns false when month is incorrect', () => {
  const result = validator.validatePersonalNumber('190113034455')
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ Invalid month')
})

/* test('returns false when phonenumber doesnt have correct length', () => {
  const result = validator.validatePhoneNumber()
  expect(result.valid).toBe(false)
  expect(result.message).toBe('❌ No number entered')
})
 */
