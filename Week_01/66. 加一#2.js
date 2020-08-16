/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1
  let i = digits.length - 1

  while(carry > 0 && i  > -1) {
      if(digits[i] + carry < 10) {
          digits[i] = digits[i] + carry
          carry = 0
      } else {
          digits[i] = digits[i] + carry - 10
          i--
      }
  }
  if(carry) digits.unshift(carry)
  return digits
};