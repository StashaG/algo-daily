/*Write a function that reverses an inputted string without using the 
built-in Array#reverse method?*/

//Solution

/*function reverseString(str) {
    // reverse str
    let newString = " ";

    for (let i = str.length-1; i >= 0; i--) { //start from the end of the string and move the pointer down from the beginning
        newString += str[i];
    }
    return newString;
  }

  console.log(reverseString("love"));*/

  //Solution using the Two Pointer Technique
  
  function reverseString(str) {
    let strArr = str.split(""); //splits string "love" into an array of substrings
    let start = 0;
    let end = str.length - 1;
  
    while (start <= end) {
      const temp = strArr[start];
      strArr[start] = strArr[end];
      strArr[end] = temp;
      start++;
      end--;
    }
  
    return strArr.join("");
  }
  console.log(reverseString("love"));