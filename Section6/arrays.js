function driver() {
    let strings = ['a', 'b', 'c', 'd'];
    
    strings.push('e'); // O(1)

    strings.pop(); // O(1)

    strings.unshift('x'); // O(n)
    
    strings.splice(2, 0, 'alien'); // O(n)

    console.log(strings);
}

module.exports = {driver};
