
// O(n*m)
function containsCommonItem1(array1, array2) {
    
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) return true;
        }
    }
    
    return false;
}

// O(n + m)
function containsCommonItem2(array1, array2) {
    let map = {};
    for (let item of array1) {
        if (!map[item]) {
            map[item] = true;
        }
    }

    for (let item of array2) {
        if (map[item]) return true;
    }

    return false;    
}

function containsCommonItem3(array1, array2) {
    return array1.some(item => array2.includes(item));
}

function driver() {
    let array1 = ['a', 'b', 'c', 'x', 'x'];
    let array2 = ['z', 'y', 'c'];

    console.log(containsCommonItem3(array1, array2));
}

module.exports = {driver};
