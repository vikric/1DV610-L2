Eftersom laborationen påbörjas innan många av föreläsningarna har skett så begränsar vi mängden krav på kodkvalitet i första inlämningen till de som nämns i kapitel 2 och 3. Det är viktigare att reflektera och återkoppla till boken än att er kod är perfekt. Jag kräver alltså inte att ni justerar er kod men däremot att er reflektion visar på förståelse för kursmaterialet. Det är här tillåtet att antingen ändra er kod eller leva vidare med den, men bristen skall då finnas angiven i era reflektioner.



| Name               | Explanation               | Reflection & rules from Clean Code   | 
|-----------------------|--------------------------|---------------------------------------|
| PasswordValidator     | Class which validates a string |  **Class Names:** should not be a noun. Either I should drop Validator or change it to PasswordPolicy.  |
| validatePhoneNumber   | Method which checks if it's a swedish phonenumber | **Use Searchable names:** My wrapper class has the same method name as the subclass method. This will make it confusing when searching for the method. I could just as easily flip the name in the subclass. So it's phoneNumberValidator **Avoid Disinformation:** The method only works for swedish cellular numbers which it doesn't mention anywhere.|
| validDate             | Method which returns true or false depending if it's a valid date   | **Method name:** Should've been isValidDate to indicate that a bool is returned. Removes some confusion    |
| luhnAlgorithm         | Method which calculates the last digit in a personalnumber   | **Avoid Disinformation:** The name only suggest that the luhn algorithm is used but doesn't give any valuable information. |
| Value                 | Many methods had arguements named value      | **Add Meaningful Context:** The name value only says it's a value. Not what the value represents which makes it unclear.  |





validatePhoneNumber har inget bra namn för den validerar bara svenska nummer. Antingen olika publika metoder för länder eller privata submetoder som förklarar vilket land det gäller.

isNotEmpty har ett dåligt namn för "is" brukar kopplas samman med att return värdet ska vara en boolean. 
Alla andra mina publika metoder heter validate för att göra det enklare men tyckte validateNotEmpty blev ännu värre.








Har använt mig utav LNU eslint som kräver JSDOC. Gillar formatet men mycket av texten är helt onödig då jag tycker metodnamnen beskriver vad som sker. Kommer se över om det finns några liknande eller om det går att ändra configen för att få som jag vill ha det.

validatePhoneNumber Gör för mycket borde delas upp i mindre

PersonalNumberValidator validateDay, month och year har jag delat upp för mycket. Gör koden mer rörig än om det varit 1 metod som gjort allt.