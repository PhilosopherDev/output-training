function solution(numbers, target) {
    var answer = {number: 0};
    
    f(numbers, 0, 0, answer, target, "+");
    f(numbers, 0, 0, answer, target, "-");
    
    return answer.number;
}

function f(numbers, idx, result, answer, target, calc) {
    if (numbers.length === idx) {
        if (result === target) {
            console.log(result, answer);
            answer.number++;
        }
        return;
    }
    
    if (calc === "+") {
        result += numbers[idx];
    } else if (calc === "-") {
        result -= numbers[idx];
    }
    

    f(numbers, idx+1, result, answer, target, "+");
    f(numbers, idx+1, result, answer, target, "-");
    return;
}
