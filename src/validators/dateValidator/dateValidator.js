import { createResult, validateType } from '../../middleWare/middleWare.js'

/**
 * Validates dates in string format.
 */
export class DateValidator {
  /**
   *
   * @param dateStr
   */
  validateDate (dateStr) {
    if (!dateStr) {
      return createResult(false, 'No date provided')
    }
    validateType(dateStr)

    const dateRegex = /\d{4}-\d{2}-\d{2}/
    if (!dateRegex.test(dateStr)) {
      return createResult(false, 'Date must be YYYY-MM-DD')
    }

    const date = new Date(dateStr)
    const [year, month, day] = dateStr.split('-')

    const valid = date.getFullYear() === parseInt(year) &&
    date.getMonth() + 1 === parseInt(month) &&
    date.getDate() === parseInt(day)

    return createResult(valid, valid ? 'Date is correct' : 'Date is invalid')
  }
}
