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
  checkLength (str) {
    let valid = false
    const century = /^(19|20)/
    if (str.length === 12) {
      str = this.removeCentury(str)
    }

    console.log(str)

    const year = str.substring(0, 2)

    console.log('year:', year)

    const month = str.substring(2, 4)
    if (month > 12) {
      valid = false
      return createResult(false, 'Invalid month')
    }
    console.log('month', month)
    const day = str.substring(4, 6)
    console.log('day', day)
    const last = str.substr(-4)
    console.log('last 4', last)

    /*     January (31 days)
            February (28 days in a common year and 29 days in leap years)
            March (31 days)
            April (30 days)
            May (31 days)
            June (30 days)
            July (31 days)
            August (31 days)
            September (30 days)
            October (31 days)
            November (30 days)
            December (31 days) */

    valid = true
    /* console.log(last) */

    switch (str.length) {
      case 10:

        return createResult(valid, valid ? 'Valid number entered' : 'Invalid number entered')
      case 12:

        return createResult(valid, valid ? 'Valid number entered' : 'Invalid number entered')
    }

    return createResult(valid, valid ? 'Valid number entered' : 'Invalid number entered')
  }
}

// 12 eller 10 siffror
// 11 22 33 44 55 66
