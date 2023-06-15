function driver() {
    const newArray = new MyArray();
    newArray.push('hey');
    newArray.push('you');

    newArray.push('!');
    newArray.delete(1);

    console.log(newArray);
}

function basics() {
    let strings = ['a', 'b', 'c', 'd'];
    
    strings.push('e'); // O(1)

    strings.pop(); // O(1)

    strings.unshift('x'); // O(n)
    
    strings.splice(2, 0, 'alien'); // O(n)

    console.log(strings);
}

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

module.exports = {driver};
