function driver() {
    testMergeSortedArrays();
}

function basics() {
    let strings = ['a', 'b', 'c', 'd'];
    
    strings.push('e'); // O(1)

    strings.pop(); // O(1)

    strings.unshift('x'); // O(n)
    
    strings.splice(2, 0, 'alien'); // O(n)

    console.log(strings);
}

function testCustomArray() {
    const newArray = new MyArray();
    newArray.push('hey');
    newArray.push('you');

    newArray.push('!');
    newArray.delete(1);

    console.log(newArray);
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

function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Not a valid string';
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

function testReversingString() {
    let result = reverse('Hi My name is Ryan');
    console.log(result);

    result = reverse2('Hi My name is Ryan');
    console.log(result);

    result = reverse3('Hi My name is Ryan');
    console.log(result);
}

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let array1Index = 0;
    let array2Index = 0;
    let arr1Item = arr1[array1Index];
    let arr2Item = arr2[array2Index];

    array1Index++;
    array2Index++;
    
    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = arr1[array1Index];
            array1Index++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[array2Index];
            array2Index++;
        }
    }

    return mergedArray;
}

function testMergeSortedArrays() {
    let result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
    console.log(result);
}

module.exports = {driver};
