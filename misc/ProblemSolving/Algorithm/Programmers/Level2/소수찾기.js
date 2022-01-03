/**
 * 소수 찾기
 * 완전 탐색
 * https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript
 */

 function solution(numbers) {
    var answer = 0, combination = [], numSet = new Set([]);
    const nums = numbers.split("");

    for (let i = 1; i <= numbers.length; i++) {
        combination = combination.concat(getCombinations(nums, i));
    }

    combination.forEach((comb) => {
        getPermutations(comb).forEach((permutation) => {
            numSet.add(parseInt(permutation.join("")))
        });
    });

    numSet.forEach((num) => {
        if (primeNumberChecker(parseInt(num))) answer++;
    })

    return answer;
}

function getPermutations(array) {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = [...arr];
          let next = curr.splice(i, 1);
          permute([...curr], m.concat(next))
       }
     }
   }
  
   permute(array)
  
   return result;
}

function getCombinations(array, selectNumber) {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

function primeNumberChecker(num) {
    if (num < 2) return false;
    const sqrt = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(solution("17"));
console.log(solution("011"));