function longestPalindromicSubstring(s) {
  if (s.length <= 1) return s;

  let start = 0;
  let maxLength = 0; // Initialize maxLength to 0 instead of 1

  function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          let currLen = right - left + 1;
          if (currLen > maxLength) {
              maxLength = currLen;
              start = left;
          }
          left--;
          right++;
      }
  }

  for (let i = 0; i < s.length; i++) {
      expandAroundCenter(i, i);       // Odd-length palindrome
      expandAroundCenter(i, i + 1);   // Even-length palindrome
  }

  return s.substring(start, start + maxLength);
}

// Example Tests
console.log(longestPalindromicSubstring("babadabcdcba")); // Output: "bcdcb"
console.log(longestPalindromicSubstring("cbbd"));         // Output: "bb"
console.log(longestPalindromicSubstring("racecar"));      // Output: "racecar"
console.log(longestPalindromicSubstring("a"));            // Output: "a"
console.log(longestPalindromicSubstring("ac"));           // Output: "a" or "c"
