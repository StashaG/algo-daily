/*Write a function that reverses an inputted string without using the 
built-in Array#reverse method?*/

//Solution

function reverseString(str) {
    // reverse str
    let newString = " ";

    for (let i = str.length-1; i >= 0; i--) { //start from the end of the string and move the pointer down from the beginning
        newString += str[i];
    }
    return newString;
  }

  console.log(reverseString("love"));