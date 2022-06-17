function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startOfIndex = 0; startOfIndex < word.length / 2; startOfIndex++) {
    //  trying   compare the currently letter we're iterating over to the corresponding letter at the end of the string
    const endoFIndex = word.length - 1 - startOfIndex;
    if (word[startOfIndex] !== word[endoFIndex]) {
      // if the letters don't match,  it should return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
