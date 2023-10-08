/**
 * Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N.
 * Find the missing element.
 * 
 * Eg: Input:
 *     N = 5
 *    A[] = {1,2,3,5}
 * 
 *    Output: 4
 * 
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
 */

class Solution {
   missingNumber(array, n) {
      let sum = 0;
      sum = ((n + 1) * n) / 2;

      for (let i = 0; i < n - 1; i++) {
         sum -= array[i];
      }
      return sum;
   }
}
