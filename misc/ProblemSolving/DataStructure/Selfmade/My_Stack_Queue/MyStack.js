class Node {
    constructor(value) {
        this.value = value || null;
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        
        this.size++;
    }

    pop() {
        if (!this.first) return null;        
        if (this.first === this.last) this.last = null;
        const value = this.first.value;
        this.first = this.first.next;
        this.size--;
        return value;
    }

    peek() {
        if (!this.first) return null;
        return this.first.value;
    }
}