import { createResult } from '../../middleWare/middleWare.js'
/**
 *
 */
export class PersonalNumberValidator {
  /**
   * Checks the length of the provided personal number and trims it if necessary.
   *
   * @param {string} personalNumber - The personal number to be validated and possibly trimmed.
   * @returns {(string|boolean)} Returns the trimmed personal number if valid, otherwise false.
   */
  #removeCentury (personalNumber) {
    if (personalNumber.length === 12) {
      personalNumber = personalNumber.substring(2)
    }

    if (personalNumber.length !== 10) {
      return false
    }

    return personalNumber
  }

  /**
   * Validates a Swedish personal number by checking its length, date validity, and control digit.
   *
   * @param {string} personalNumber - The personal number to validate.
   * @returns {object} The result object indicating if the personal number is valid and a message.
   */
  validatePersonalNumber (personalNumber) {
    if (!personalNumber) {
      return createResult(false, 'No personal number provided length')
    }

    personalNumber = this.#removeCentury(personalNumber)

    if (!personalNumber) {
      return createResult(false, 'Invalid length of personal number')
    }

    const validBirthDate = this.#validDate(personalNumber)
    const lastDigit = parseInt(personalNumber.at(-1))
    const luhnDigit = this.luhnAlgorithm(personalNumber)

    if (validBirthDate && lastDigit === luhnDigit) {
      return createResult(true, 'Valid personalnumber provided')
    }

    return createResult(false, 'Invalid personalnumber provided')
  }

  /**
   * Checks if the date part of the personal number is a valid date.
   *
   * @param {string} personalNumber - The personal number string to extract and validate the date from.
   * @returns {boolean} Returns true if the date is valid, otherwise false.
   */
  #validDate (personalNumber) {
    const year = personalNumber.substring(0, 2)
    const month = personalNumber.substring(2, 4)
    const day = personalNumber.substring(4, 6)

    const date = new Date(year, month - 1, day)
    const validYear = this.#validateYear(year, date)
    const validMonth = this.#validateMonth(month, date)
    const validDay = this.#validateDay(day, date)
    return validYear && validMonth && validDay
  }

  /**
   * Validates if the provided year matches the year part of the given date object.
   *
   * @param {string} year - The year extracted from the personal number.
   * @param {Date} date - The Date object created from the personal number.
   * @returns {boolean} Returns true if the year matches, otherwise false.
   */
  #validateYear (year, date) {
    const shortYear = date.getFullYear() % 100

    return (shortYear === parseInt(year))
  }

  /**
   * Validates if the provided month matches the month part of the given date object.
   *
   * @param {string} month - The month extracted from the personal number.
   * @param {Date} date - The Date object created from the personal number.
   * @returns {boolean} Returns true if the month matches, otherwise false.
   */
  #validateMonth (month, date) {
    if (date.getMonth() + 1 === parseInt(month)) {
      return true
    }
    return false
  }

  /**
   * Validates if the provided year matches the day part of the given date object.
   *
   * @param {string} day - The day extracted from the personal number.
   * @param {Date} date - The Date object created from the personal number.
   * @returns {boolean} Returns true if the day matches, otherwise false.
   */
  #validateDay (day, date) {
    if (date.getDate() === parseInt(day)) {
      return true
    }
    return false
  }

  /**
   * Calculates the last digit of personal number using luhn algorithm.
   *
   * @param {string} personalNumber - The personal number string to validate using the Luhn algorithm.
   * @returns {number} The calculated Luhn digit.
   */
  // https://en.wikipedia.org/wiki/Luhn_algorithm
  luhnAlgorithm (personalNumber) {
    let totalNumber = 0
    for (let i = 0; i < personalNumber.length - 1; i++) {
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
