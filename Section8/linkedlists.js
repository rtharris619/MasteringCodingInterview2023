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

    // O(n)
    insert(index, value) {        

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index >= this.length - 1) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);

        const leaderNode = this.getNodeAtIndex(index - 1);
        const trailingNode = leaderNode.next;

        leaderNode.next = newNode;
        newNode.next = trailingNode;

        this.length++;
    }

    // O(n)
    remove(index) {

        const leaderNode = this.getNodeAtIndex(index - 1);
        const deleteNode = leaderNode.next;

        leaderNode.next = deleteNode.next;

        this.length--;
    }

    // O(n)
    getNodeAtIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    // O(n)
    printList() {
        const values = [];
        let currentNode = this.head;

        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(values);        
    }
}

function test() {

    const myLinkedList = new LinkedList(10);
    let append1 = myLinkedList.append(5);
    let append2 = myLinkedList.append(16);

    let prepend1 = myLinkedList.prepend(1);

    myLinkedList.insert(2, 99);
    myLinkedList.insert(20, 88);

    myLinkedList.printList();

    myLinkedList.remove(2);

    myLinkedList.printList();
}

module.exports = {driver};
