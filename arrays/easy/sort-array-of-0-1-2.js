/**
 * Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
 * 
 * Eg: input, N = 4
 *     arr[] = {0, 2, 1, 2, 0};
 * 
 *    output
 *    arr[] = {0, 0, 1, 2, 2}
 * 
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
 * 
 * Expected Time Complexity: O(N)
 * Expected Auxiliary Space: O(1)
 */

class Solution {
   swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
   }

   sort012(arr, N) {
      let left = 0;
      let mid = 0;
      let right = N - 1;

      while (mid <= right) {
         if (arr[mid] === 0) {
            this.swap(arr, mid, left);
            left++;
            mid++;
         } else if (arr[mid] === 1) {
            mid++;
         } else if (arr[mid] === 2) {
            this.swap(arr, mid, right);
            right--;
         }
      }
   }
}