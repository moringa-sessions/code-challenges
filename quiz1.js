Question 1:
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reusedG multiple times in the segmentation.
Example 1:
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

Answer
function wordBreak(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);function wordBreak(s, wordDict) {
        const n = s.length;
        const dp = new Array(n + 1).fill(false);
        dp[0] = true;
      
        for (let i = 1; i <= n; i++) {
          for (let j = 0; j < i; j++) {
            const word = s.slice(j, i);
            if (dp[j] && wordDict.includes(word)) {
              dp[i] = true;
              break;
            }
          }
        }
      
        return dp[n];
      }
      
    dp[0] = true;
  
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        const word = s.slice(j, i);
        if (dp[j] && wordDict.includes(word)) {
          dp[i] = true;
          break;
        }
      }
    }
  
    return dp[n];
  }
  
const s1 = "leetcode";
const wordDict1 = ["leet", "code"];
console.log(wordBreak(s1, wordDict1)); // Output: true

const s2 = "applepenapple";
const wordDict2 = ["apple", "pen"];
console.log(wordBreak(s2, wordDict2)); // Output: true

const s3 = "applepenapple";
const wordDict3 = ["apple", "fan"];
console.log(wordBreak(s3, wordDict3)); // Output: true

const s4 = "catsandog";
const wordDict4 = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s4, wordDict4)); // Output: false
