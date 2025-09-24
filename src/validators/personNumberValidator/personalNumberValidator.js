import { createResult } from '../../middleWare/middleWare.js'
/**
 *
 */
export class PersonalNumberValidator {
  /**
   *
   * @param str
   */
  removeCentury (str) {
    return str.substring(2)
  }

  /**
   *
   * @param str
   */
  validatePersonalNumber (str) {
    if (str.length === 12) {
      str = this.removeCentury(str)
    }

    if (str.length !== 10) {
      return createResult(false, 'Invalid length')
    }

    console.log(str)

    const year = str.substring(0, 2)
    const month = str.substring(2, 4)
    const day = str.substring(4, 6)
    if (month > 12) {
      return createResult(false, 'Invalid month')
    }
    const date = new Date(year, month - 1, day)
    const validYear = this.checkYear(year, date)
    const validMonth = this.checkMonth(month, date)
    const validDay = this.checkDay(day, date)

    const last = str.substr(-4)
    console.log('last 4', last)
    console.log(validYear, validMonth, validDay)

    if (validYear && validMonth && validDay) {
      // I get year, month and day from this. Not sure how to validate the remaining 4.
      // https:// sv.wikipedia.org/wiki/Luhn-algoritmen

      return createResult(true, 'Correct date entered')
    }

    return createResult(false, 'Incorrect date entered')
  }

  /**
   *
   * @param date
   * @param year
   */
  checkYear (year, date) {
    if (date.getYear() === parseInt(year)) {
      return true
    }
    return false
  }

  /**
   *
   * @param month
   * @param date
   * @param year
   */
  checkMonth (month, date) {
    if (date.getMonth() + 1 === parseInt(month)) {
      return true
    }
    return false
  }

  /**
   *
   * @param day
   * @param date
   * @param year
   */
  checkDay (day, date) {
    if (date.getDate() === parseInt(day)) {
      return true
    }
    return false
  }
}

// 12 eller 10 siffror
// 11 22 33 44 55 66
