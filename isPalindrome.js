function isPalindrome(string) {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
}
