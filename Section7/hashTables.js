function driver() {
    testFirstReccuringCharacter();
}

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    set(key, value) {
        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);

        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];

        if (!currentBucket) return undefined;

        for (let item of currentBucket) {
            if (key === item[0]) {
                return item[1];
            }
        }

        return undefined;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keys.push(this.data[i][0][0]);
            }
        }
        return keys;
    }

    values() {
        const values = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                values.push(this.data[i][0][1]);
            }
        }
        return values;
    }
}

function testHashTable() {
    const myHashTable = new HashTable(50);
    myHashTable.set('grapes', 10000);
    myHashTable.set('apples', 54);
    myHashTable.set('oranges', 2);
    let result = myHashTable.get('apples');
    
    let keys = myHashTable.keys();
    console.log(keys);

    let values = myHashTable.values();
    console.log(values);
}

function firstRecurringCharacter(input) {
    let map = {};

    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) {
            return input[i];
        }
        map[input[i]] = true;    
    }

    return undefined;
}

function testFirstReccuringCharacter() {
    let result = firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
    console.log(result);
}

module.exports = {driver};
