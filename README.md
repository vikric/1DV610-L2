# Validation Module

School project for Linnúniversity

## Description
A module for validating formats of multiple inputs.

- Dates
- Emailaddresses
- Passwords
- Swedish phonenumbers
- Swedish personalnumbers  
- There is also a form validator & DomForm validator so you can validate HTML element inputs.
---
  ```js
  import { Validator } from "../../validator.js";
  const validator = new Validator();

  const correctFormatNumber = validator.validatePhoneNumber("070 123 45 78");
  console.log(correctFormatNumber);

  const incorrectFormatNumber = validator.validatePhoneNumber("70 123 45 78");
  console.log(incorrectFormatNumber);

  ```
![alt text](https://raw.githubusercontent.com/vikric/1DV610-L2/V1.1/src/images/console.logs.png)


## Installation Guide

 ```
 npm install validator-sv
 ```




## How it works

There are 7 subclasses with 1 wrapper class. The wrapper class is the only one you need to use. The public methods you can use are:

### General validator
- **validateInput** (type, input)   
Takes a type, for example text, email or checkbox and then a input. Depending what type a different validation method is called.

### Specific validators
- **validateEmail (email)**  
Checks to see if emailadress has correct format
- **validatePhoneNumber (number)**  
Checks to see if phonenumber has correct format
- **validatePassword (password, minlength = 8)**  
Validates to see if password has atleast 2 uppercase, letters, 2 lowercase letters, 2 digits and the minLength you set
- **validatePersonalNumber (personalNumber)**  
Validates to see if entered string is a correct swedish personal number.
- **validateDate (dateStr)**  
  Validates to see if entered string is a correct date.

  ### DOM validators
- **validateCheckbox ()**  
Checks to see checkbox has been checked.
- **validateRadio ()**  
Checks to see if radiobutton has been ticked.
  
## How to use

Here is pictures to show you how to call the module and the result. You can find this in the testApp which you can find in src/test/testApp

``` js
import { Validator } from '../../validators/validator.js'
document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field')
  fields.forEach(field => {
    const validator = new Validator()

    const button = field.querySelector('button')
    const input = field.querySelector('input, textarea, select')
    const result = field.querySelector('.result')

    button.addEventListener('click', async () => {
      if (!input) return
      try {
        const validation = validator.validateInput(input.type, input.value)

        const email = validator.validateEmail('test@test.se') 
        console.log(email)

        const phoneNumber = validator.validatePhoneNumber('070 123 45 78')
        console.log(phoneNumber)

        const password = validator.validatePassword('PassWord123', 8)
        console.log(password)

        const personalNumber = validator.validatePersonalNumber('1212121212')
        console.log(personalNumber)

        const date = validator.validateDate('2023-12-28')
        console.log(date)

        const checkbox = validator.validateCheckbox(input.value)
        console.log(checkbox)

        const radio = validator.validateRadio(input.value)
        console.log(radio)

        result.textContent = validation.message
      } catch (err) {
        console.error('Validation failed:', err.message)
      }
    })
  })
})
```

## Testing

Most of the test classes have been tested using unit tests with Jest. You run them by typing 
```
npm run test
``` 
You can read more about testing here  
https://github.com/vikric/1DV610-L2/blob/main/testrapport.md

