const functions = {
    forEach,
    map, 
    some,
    find,
    findIndex, 
    every,
    filter,
    concat,
    includes
}

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

function map(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i], i, array);
    }
    return array;
}

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

function filter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function concat(array1, array2) {
    array = array1.slice();
    for (let entry of array2) {
        array.push(entry);
    }
    return array;
}

function includes(array, value) {
    return findIndex(array, a => a === value) >= 0;
}


// console.log(map([1,2,3,4], a => a * 3));

module.exports = functions;