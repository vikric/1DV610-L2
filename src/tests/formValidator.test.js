import { FormValidator } from "../validators/formValidator/formValidator.js";

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

  test('returns invalid when value is empty', () => {
    const result = validator.isNotEmpty()
    expect(result.valid).toBe(false)
    expect(result.message).toBe('❌ Input is empty')
  })