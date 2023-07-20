function driver() {
    testHashTable();
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
}

function testHashTable() {
    const myHashTable = new HashTable(50);
    myHashTable.set('grapes', 10000);
    myHashTable.set('apples', 54);
    let result = myHashTable.get('apples');
    console.log(result);
}

module.exports = {driver};
