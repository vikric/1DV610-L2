import { createResult } from '../../middleWare/middleWare.js'
/**
 *
 */
export class PersonalNumberValidator {
  /**
   *
   * @param str
   */
  #removeCentury (str) {
    return str.substring(2)
  }

  /**
   *
   * @param personalNumber
   */
  #lengthCheck (personalNumber) {
    if (personalNumber.length === 12) {
      personalNumber = this.#removeCentury(personalNumber)
    }

    if (personalNumber.length !== 10) {
      return false
    }

    return personalNumber
  }

  /**
   *
   * @param personalNumber
   */
  validatePersonalNumber (personalNumber) {
    personalNumber = this.#lengthCheck(personalNumber)

    if (!personalNumber) {
      return createResult(false, 'Invalid length')
    }

    const validBirthDate = this.#validDate(personalNumber)
    const lastDigit = this.luhnAlgorithm(personalNumber)
    if (validBirthDate && lastDigit) {
      return createResult(true, 'Valid personalnumber provided')
    }

    return createResult(false, 'Invalid personalnumber provided')
  }

  /**
   *
   * @param personalNumber
   */
  #validDate (personalNumber) {
    const year = personalNumber.substring(0, 2)
    const month = personalNumber.substring(2, 4)
    const day = personalNumber.substring(4, 6)
    if (month > 12) {
      return false
    }

    const date = new Date(year, month - 1, day)
    const validYear = this.#checkYear(year, date)
    const validMonth = this.#checkMonth(month, date)
    const validDay = this.#checkDay(day, date)
    return validYear && validMonth && validDay
  }

  /**
   *
   * @param date
   * @param year
   */
  #checkYear (year, date) {
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
  #checkMonth (month, date) {
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
  #checkDay (day, date) {
    if (date.getDate() === parseInt(day)) {
      return true
    }
    return false
  }

  /**
   *
   * @param personalNumber
   */
  // https://en.wikipedia.org/wiki/Luhn_algorithm
  luhnAlgorithm (personalNumber) {
    let totalNumber = 0
    for (let i = 0; i < personalNumber.length - 1; i++) {
      /* console.log(personalNumber[i]) */
      let digit = parseInt(personalNumber[i])

      if (i % 2 === 0) {
        digit *= 2
        if (digit > 9) {
          digit = Math.floor(digit / 10) + (digit % 10)
        }
      }
      totalNumber += digit
    }
    return (10 - (totalNumber % 10)) % 10
  }
}
