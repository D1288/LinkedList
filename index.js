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

    at(index) {
        if (index > 0 && index > this.size) {
            return "Index is out of Bounds"
        } else {
            let current = this.head;
            let count = 0;
            while (current) {
                if (count === index) {
                    console.log(current)
                } else {
                    count++;
                    current = current.next
                }
            }
        }
    }

    pop(){
        if(!this.head){
            return "List is Empty"
        } else{
            let current = this.head;
            let previous
            while(current.next){
                previous = current
                current = current.next
            }
            if(previous){
                previous.next = null;
            } else{
                this.head = null;
            }
        }
        this.size --
    }

    contains(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return true
            }
            current = current.next;
        }
        return false
    }

    find(value){
        let current = this.head
        let index = 0;
        while (current){
            if(current.value === value){
                return index
            } else{
                current = current.next;
                index++
            }
        }
        return null;
    }

    toString(){
        let current = this.head;
        while(current){
            console.log(current)
            current = current.next
        }
    }

    insertAt(value, index){
        const node = new Node(value)
        let previous;

        let current = this.head;
        let count = 0;

        while (count < index){
            previous = current;
            count ++;
            current = current.next
        }

        node.next = current;
        previous.next = node;
        this.size++
    }

    removeAt(index){
        let current = this.head;
        let previous;
        let count = 0;

        while(count < index){
            previous = current;
            count ++;
            current = current.next
        }

        previous.next = current.next;
        this.size --;
    }


}