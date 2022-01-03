class Node {
    constructor(value) {
        this.value = value || null;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = this.last.next;
        }

        this.size++;
    }

    dequeue() {
        if (!this.first) return null;
        
        const temp = this.first;
        this.first = this.first.next;
        if (!this.first) this.last = null;

        this.size--;
        return temp.value;
    }
}