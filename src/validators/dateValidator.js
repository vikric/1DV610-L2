import { createResult, validateType } from '../middleWare/middleWare.js'

/**
 * Validates dates in string format.
 */
export class DateValidator {
  /**
   * Validates a date string and checks if it is a valid date.
   *
   * @param {string} dateStr - The date string to validate.
   * @returns {object} The result object indicating if the date is valid and a message.
   */
  validateDate (dateStr) {
    if (!dateStr) {
      return createResult(false, 'No date provided')
    }
    validateType(dateStr)

    const dateObj = this.#regexTester(dateStr)

    dateObj.year = this.#centuryChecker(dateObj.year)
    const date = new Date(dateObj.year, dateObj.month - 1, dateObj.day)

    const valid =
    date.getFullYear() === (dateObj.year) &&
    date.getMonth() + 1 === (dateObj.month) &&
    date.getDate() === (dateObj.day)

    return createResult(valid, valid ? 'Date is valid' : 'Date is invalid')
  }

  /**
   * Tests the date string and extracts year, month, and day components.
   *
   * @param {string} dateStr - The date string to test and parse.
   * @returns {{year: number, month: number, day: number}} An object containing year, month, and day as numbers.
   */
  #regexTester (dateStr) {
    let year = ''
    let month = ''
    let day = ''
    const stnDateRegex = /\d{4}-\d{2}-\d{2}/
    const altDateRegex = /\d{1,2}\/\d{1,2}\/\d{2,4}/
    if (stnDateRegex.test(dateStr)) {
      [year, month, day] = dateStr.split('-').map(Number)
    } else if (altDateRegex.test(dateStr)) {
      [day, month, year] = dateStr.split('/').map(Number)
    }
    return { year, month, day }
  }

  /**
   * Checks if year is with 2 digits and returns it with 4.
   *
   * @param {number} year - The year number to test
   * @returns {year} Returns number with 4 digits.
   */
  #centuryChecker (year) {
    if (year < 1000) {
      year = +2000
    }
    return year
  }
}
