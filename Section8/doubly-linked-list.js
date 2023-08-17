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

    // O(1)
    prepend(value) {
        let newNode = new Node(value);

        this.head.prev = newNode;

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    // O(n)
    insert(index, value) {
    
        if (index == 0) {
            this.prepend(value);
            return;
        }

        if (index >= this.length - 1) {
            this.append(value);
            return;
        }

        let newNode = new Node(value);

        let leader = this.getNodeAtIndex(index - 1);
        let follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;

        return this;
    }

    // O(n)
    remove(index) {

        let leader = this.getNodeAtIndex(index - 1);
        let follower = leader.next.next;

        leader.next = follower;

        follower.prev = leader;
        
        this.length--;
        return this;
    }

    // O(n)
    getNodeAtIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (index !== counter) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    // O(n)
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

    myLinkedList.prepend(1);
    // 1 <-> 10 -> 5 -> 16

    myLinkedList.insert(2, 99);
    // 1 <-> 10 <--> 99 <-> 5 <-> 16

    let result = myLinkedList.remove(2);
    console.log(result);

    myLinkedList.printList();
}

module.exports = {driver}
