function driver() {
    test();
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // O(1)
    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    // O(1)
    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }
}

function test() {

    const myLinkedList = new LinkedList(10);
    let append1 = myLinkedList.append(5);
    let append2 = myLinkedList.append(16);

    let prepend1 = myLinkedList.prepend(1);

    console.log(prepend1);
}

module.exports = {driver};
