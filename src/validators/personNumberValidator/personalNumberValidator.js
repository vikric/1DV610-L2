/**
 *
 */
export class PersonalNumberValidator {
  /**
   *
   * @param htmlElement
   */
  constructor (htmlElement) {
    this.htmlElement = htmlElement
  }

  /**
   *
   */
  checkLength () {
    const str = this.htmlElement.value
    console.log(str)

    const century = /^(19|20)/
    const year = str.substring(2, 4)
    const month = str.substring(4, 6)
    const day = str.substring(6, 8)
    const last = str.substr(-4)

    console.log(last)

    const valid = century.test(str)
    console.log(valid)
    console.log(str.length)
    if (valid) {
      switch (str.length) {
        case 10:
        case 12:
          return 'Correct amount of numbers'
      }
    }
    return 'FEL FEL FEL'
  }
}

// 12 eller 10 siffror
// 11 22 33 44 55 66
