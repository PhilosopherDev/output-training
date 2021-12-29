class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var q = new Queue();
    var truckNum = truck_weights.length;    
    var t = 0;
    var currentWeight = 0;
    truck_weights.reverse();

    for (let i = 0; i < bridge_length; i++) {
        q.enqueue(0);
    }

    while(t < truckNum) {        
        const out = q.dequeue();
        answer++;
        currentWeight -= out;
        if (out > 0) t++;

        if ((currentWeight + truck_weights[truck_weights.length - 1]) <= weight) {
            const pushing = truck_weights.pop();
            currentWeight += pushing;
            q.enqueue(pushing);
        } else {
            q.enqueue(0);
        }
    }

    return answer;
}

console.log(solution(2, 10, [7,4,5,6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, new Array(10).fill(10)));