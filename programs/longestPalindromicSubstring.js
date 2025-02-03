function longestPalindromicSubstring(s) {
    if (s.length < 1) return "";
  
    let start = 0, maxLength = 0;
  
    function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      return [left + 1, right - 1]; // Return the valid palindrome indices
    }
  
    for (let i = 0; i < s.length; i++) {
      let [left1, right1] = expandAroundCenter(i, i);       // Odd-length palindrome
      let [left2, right2] = expandAroundCenter(i, i + 1);   // Even-length palindrome
  
      if (right1 - left1 > maxLength) {
        start = left1;
        maxLength = right1 - left1;
      }
  
      if (right2 - left2 > maxLength) {
        start = left2;
        maxLength = right2 - left2;
      }
    }
  
    return s.substring(start, start + maxLength + 1);
}
  
// Example
console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd"));  // Output: "bb"