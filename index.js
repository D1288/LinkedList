class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(value) {
        this.head = new Node(value, this.head)
        this.size++
    }

    append(value) {
        let node = new Node(value);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++

    }

    size() {
        console.log(this.size)
        return this.size
    }

    head() {
        if (!this.head) {
            return "List is Empty"
        } else {
            console.log(this.head)
            return this.head
        }
    }

    tail() {
        if (!this.head) {
            return "List is Empty"
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            console.log(current);
            return current
        }
    }

    at(index){
        if(index > 0 && index > this.size){
            return "Index is out of Bounds"
        } else{
            
        }
    }


}