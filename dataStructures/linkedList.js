class Node {
    constructor(value, prev, next) {
        this.value = value,
        this.prev = prev || null,
        this.next = next || null
    }
}

class LinkedList {
    constructor () {
        this.head = this.tail = null
    };
    append(value) {
        if(!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }
    prepend(value) {
        if(!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            let oldHead =this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }
    }
    deleteHead() {
        if(!this.head) {
            return null
        } else {
            let removeHead = this.head
            if(this.head === this.tail){
                return null
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return removeHead.value
        }
    }
    deleteTail() {
        if(!this.tail) {
            return null
        } else {
            let removeTail = this.tail;
            if(this.tail === this.head) {
                return null;
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removeTail.value
        }
    }
    seacrh(value) {
        if(!this.head) {
            return null;
        } else {
            while(this.head.next) {
                if(this.head.value === value) {
                    return true
                } else {
                    this.head = this.head.next
                }
            }
            return null
        }
    }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.prepend(-1)

console.log(list.deleteTail())
console.log(list)

