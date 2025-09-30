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

    /*     let year = ''
    let month = ''
    let day = ''
    const stnDateRegex = /\d{4}-\d{2}-\d{2}/
    const altDateRegex = /\d{1,2}\/\d{1,2}\/\d{2,4}/

    if (stnDateRegex.test(dateStr)) {
      [year, month, day] = dateStr.split('-').map(Number)
    } else if (altDateRegex.test(dateStr)) {
      [day, month, year] = dateStr.split('/').map(Number)
    } */
    const tester = this.regexTester(dateStr)
    console.log(tester)
    if (tester.year < 100) {
      tester.year = +2000
    }
    console.log(tester.year)

    const date = new Date(tester.year, month - 1, day)

    const valid =
    date.getFullYear() === (year) &&
    date.getMonth() + 1 === (month) &&
    date.getDate() === (day)

    return createResult(valid, valid ? 'Date is valid' : 'Date is invalid')
  }

  /**
   *
   * @param dateStr
   */
  regexTester (dateStr) {
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
}
