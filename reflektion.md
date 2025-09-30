# Reflections 

### Chapter 2 

| Name               | Explanation               | Reflection & rules from Clean Code   | 
|-----------------------|--------------------------|---------------------------------------|
| PasswordValidator     | Class which validates a string |  **Class Names:** should not be a noun. Either I should drop Validator or change it to PasswordPolicy.  |
| validatePhoneNumber   | Method which checks if it's a swedish phonenumber | **Use Searchable names:** My wrapper class has the same method name as the subclass method. This will make it confusing when searching for the method. I could just as easily flip the name in the subclass. So it's phoneNumberValidator **Avoid Disinformation:** The method only works for swedish cellular numbers which it doesn't mention anywhere.|
| validDate             | Method which returns true or false depending if it's a valid date   | **Method name:** Should've been isValidDate to indicate that a bool is returned. Removes some confusion    |
| luhnAlgorithm         | Method which calculates the last digit in a personalnumber   | **Avoid Disinformation:** The name only suggest that the luhn algorithm is used but doesn't give any valuable information. |
| value                 | Many methods had arguements named value      | **Add Meaningful Context:** The name value only says it's a value. Not what the value represents which makes it unclear. I have tried to change it to be more specific. For example I changed it to *phoneNumber* in my *validatePhoneNumber* method.  |


### Meaningful Names reflections

After reading this chapter and looking at my code I found some problems. My variables & arguments often don't give any information. I usually name them **value** and then I have to go back and use a console.log to see what is being sent. With better naming system I would save myself time by having more descriptive names. It will be even worse for other people trying to read my code. 

I have also noticed that I use **Cute** variable names which is only meant to be for testing. But sometimes I forget about them and find them laying around in my code much later. Since I don't have a good naming system I don't know if it's a temporary variable name or not. So have to read the entire block to find out which I also spend way to much time doing.

--- 

### Chapter 3 


  | Methodname               | Link or code                                                        | Amount of rows   | Reflection
  |-----------------------|------------------------------------------------------------------------|---------------|----------------|
  | validatePhoneNumber   | [View Code](src/validators/phoneNumberValidator/phoneNumberValidator.js#13) |    10         | **Do One Thing:** This method does more than one thing so should've broken it apart in multiple methods. It replaces characters in a string and also check what it starts with to set **valid** true or false. A better way would be to have 1 method that replaces the text to get only digits. Another which returns the *valid* variable. **Use Descriptive Names:** The name is not specific enough. validatePhoneNumber is to generic. We don't know what it validates or how. It should also specify that it only is for swedish phone numbers. However I do not know a better name for it.|
  | luhnAlgorithm         | [View Code](src/validators/personNumberValidator/personalNumberValidator.js#L118)    |    9  | **Use Descriptive Names:** The methodname is quite bad since it only says that the algorithm is being used but not what it's being used for. **Small:** This method is not small and then it has 1 loop and 2 nested if statements. This makes a quite easy method hard to read.|
  | validatePassword      |  [View Code](src/validators/passwordValidator/passwordValidator.js#L14)          |    22  | **Dyadic Functions:** This method have 2 arguments but it started with 5. For this method I do think it is necessary. I would even suggest that it should have the 5 arguements. To be able to set how many uppercase,lowercase and digits are needed for the password. One option would be to use an object as arguement instead of 5 different arguements.|
  | validateInput         |   [View Code](src/validators/validator.js#L33)         |    16  | **Switch Statements:** method has a long switch statement that used to be multiple if statements. This one I'm quite torn about because it easy to read but quite long.|
  | validDate             |    [View Code](src/validators/personNumberValidator/personalNumberValidator.js#L58)        |    8  | **Verbs and Keywords:** The name of this method should be more descriptive, for example: checkPersonalNumberDate. **Do One Thing** The method both splits up the argument that was sent, create a Date object and validates it. It also calls 3 different methods that work quite similar. I think these 3 methods should have been 1 that return an object instead.|

### Functions reflections

This chapter is about how functions should be created to make it easier to follow and understand the code. It's mostly about creating small functions that only do 1 thing with a descriptive name. It also mentions that you should use as few arguements as possible. Never more than 3 and most of the time it should be either 0 or 1. This is to make the function easier to understand and use. If there is a line of code that is being repeated, create a function that you call instead to lessen the code that you have to write.

After reading this chapter I have noticed that my methods don't follow clean code. My methods are long, they do more than one thing and I use bad names for classes, methods and variables. I agree that most of the time you should simplify your methods but the following methods I think should've been 1 single method instead of 3.  


``` js 
  function validateYear (year, date) {
    if (date.getDate() === parseInt(year)) {
      return true
    }
    return false
  }
```

``` js 
  function validateMonth (month, date) {
    if (date.getMonth() + 1 === parseInt(month)) {
      return true
    }
    return false
  }
```

``` js 
  function validateDay (day, date) {
    if (date.getDate() === parseInt(day)) {
      return true
    }
    return false
  }
```

  
---
## Code quality reflection
I have noticed that I jump in and start coding directly without a good plan. This feels good to start with but a few days later I have to spend hours or days to clean up my code which is just a time waster. For example on this module I started creating a validator for HTML element and didn't think about it until it was time to start creating some tests. This took about 8 hours for me to fix, because most of my methods broke **Do One Thing**. So in the future I will try to create smaller functions to make it more readable and reusable. If all my methods was doing one thing and one thing only, my methods / functions would be much simpler and hopefully not take as long to clean up. 

During the creating of this module and my project in 1DV613 I've had some long methods. Afterwards it's difficult to understand all the steps inside the method. Will try to make smaller methods that are just a few rows which they suggest in the book.

Something that I thought was smart was flag arguements which is something I often use in other projects. Reading that it should never be used was a gamechanger for me. In this project I only used it for **createResult**. Like all my methods it got a bad name but I could create 2 methods. 1 for a valid result and 1 for an invalid result. This way I don't have to send false or true as arguement.

**Use Intention-Revealing Names** is something I'm not good at so will have to get better at it. I have problems reading my own method names / variables a few days later. I usually name them whatever pops into my head at the time and then leave it which created an issue during the creation of this module. All my variables were named value to begin with so had to change it because I did not always know what kind of value was being sent.

I have also learned that JSDOC perhaps is not always needed according to **Add Meaningful Context**. Some of my JSDOC comments say nothing new from what is already obvious so it just bloats the file.

