const functions = {
    forEach,
    map, 
    some,
    find,
    findIndex, 
    every,
    filter,
    concat,
    includes,
    indexOf,
    join,
    slice,
    flat,
    flatMap,
    of
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
    const index = findIndex(array, callback);
    return index === -1 ? undefined : array[index];
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

function indexOf(array, value) {
    return findIndex(array, a => a === value);
}

function join(array, joiningString) {
    string = "";
    for (let i = 0; i < array.length; i++) {
        if (i !== 0) {
            string += joiningString;
        }
        string += array[i];
    }
    return string;
}

function slice(array, beginningIndex, endingIndex) {
    const newArray = [];
    end = endingIndex || array.length;

    for (let i = beginningIndex; i < end; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

function flat(array, depth = 1) {
    if (depth == 1) {
        const newArray = [];
        for (let element of array) {
            if (Array.isArray(element)) {
                for (let subelement of element) {
                    newArray.push(subelement);
                }
            } else {
                newArray.push(element);
            }
        }
        return newArray;
    } else {
        return flat(flat(array, depth - 1));
    }
}

function flatMap(array, callback) {
    const newArray = array.slice();
    map(newArray, callback);
    return flat(newArray);
}

function of(...elements) {
    return elements;
}

// console.log(map([1,2,3,4], a => a * 3));

module.exports = functions;