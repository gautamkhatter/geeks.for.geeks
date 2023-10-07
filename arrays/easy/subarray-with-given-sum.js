/**
 * Given an unsorted array A of size N that contains only positive integers, 
 * find a continuous sub-array that adds to a given number S and return the 
 * left and right index(1-based indexing) of that subarray.
 * 
 * In case of multiple subarrays, return the subarray indexes which come first 
 * on moving from left to right.
 * 
 * Note:- You have to return an ArrayList consisting of two elements left and right. 
 * In case no such subarray exists return an array consisting of element -1.
 * 
 * Input:
 * N = 5, S = 12
 * A[] = {1,2,3,7,5}
 * 
 * Output: 2 4
 * 
 * Explanation: The sum of elements 
 * from 2nd position to 4th position 
 * is 12.

 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
 * 
 * Expected Time Complexity: O(N)
 * Expected Auxiliary Space: O(1)
 */

class Solution {
   subarraySum(arr, n, s) {
      const ans = [];
      let sum = arr[0];
      let isFound = false;
      let left = 0;
      let right = 0;

      if (s === 0) {
         ans.push(-1);
         return ans;
      }

      while (right < n) {
         if (sum === s) {
            isFound = true;
            break;
         } else if (sum < s) {
            right++;
            if (right < n) {
               sum += arr[right];
            }
         } else {
            sum -= arr[left];
            left++;
         }
      }

      if (!isFound) {
         ans.push(-1);
         return ans;
      }

      ans.push(left + 1);
      ans.push(right + 1);
      return ans;
   }
}
