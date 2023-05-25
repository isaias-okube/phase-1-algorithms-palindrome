function isPalindrome(word) {
    word = word.toLowerCase();
    let start = 0;
    let end = word.length - 1;
  
    while (start <= end) {
      if (word[start] !== word[end]) {
        return false;
      }
      start++;
      end--;
    }
  
    return true;
  }
//Convert the input string to lowercase.
//Initialize two pointers, start and end, pointing to the start and end of the string, respectively.
//While start is less than or equal to end:
//If the characters at positions start and end are not equal, return false.
//Move start one step forward and end one step backward.
//If the loop completes without returning false, return true (the string is a palindrome).

if (require.main === module) {
  console.log(isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
