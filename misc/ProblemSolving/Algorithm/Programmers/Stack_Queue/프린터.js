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

function solution(priorities, location) {
    var order = 1;
    
    const q = new Queue();
    const p = [...priorities].sort();
    
    priorities.forEach((priority, idx) => {
        q.enqueue([idx, priority]);
    });
    
    while(true) {
        const max = p[p.length - 1];
        const value = q.dequeue();
        if (max === value[1]) {
            if (location === value[0]) {
                break;    
            }
            p.pop();    
            order++;
        } else {
            q.enqueue(value);
        }
    }
    
    return order;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));