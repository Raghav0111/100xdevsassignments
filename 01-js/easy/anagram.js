/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;

  if(n1 != n2){
    return false;
  }

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

let charArray = str1.split('');
let charArray2 = str2.split('');

charArray.sort();
charArray2.sort();

for(let i=0;i<n1;i++){
  if(charArray[i]!== charArray2[i]){
    return false;
  }
}
  return true;

}


module.exports = isAnagram;
