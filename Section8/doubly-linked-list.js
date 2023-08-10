function driver() {
    test();
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // O(1)
    append(value) {
        let newNode = new Node(value);
        newNode.prev = this.tail;
        
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
    }

    prepend(value) {
        let newNode = new Node(value);

        this.head.prev = newNode;

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    printList() {
        let values = [];

        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values);
    }
}


function test() {
    let myLinkedList = new DoublyLinkedList(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    // 10 -> 5 -> 16

    console.log(myLinkedList.prepend(1));
    // 1 <-> 10 -> 5 -> 16

    //myLinkedList.printList();
}

module.exports = {driver}
