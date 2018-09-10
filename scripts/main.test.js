const main = require('./main');

test("'forEach([1,2,3,4], a => newArray.push(2 * a)' results in [2, 4, 6, 7]", () => {
    const newArray = [];
    main.forEach([1,2,3,4], a => newArray.push(2 * a));
    expect(newArray).toEqual([2,4,6,8]);
});

test("'map([1,2,3,4], a => a * 3' results in [3,6,9,12]", () => {
    expect(main.map([1,2,3,4], a => a * 3)).toEqual([3,6,9,12]);
});

test("'some([1,2,3,4,5], a => a > 5' returns false", () => {
    expect(main.some([1,2,3,4,5], a => a > 5)).toBeFalsy();
});

test("'some([1,2,3,4,5], a => a > 4' returns true", () => {
    expect(main.some([1,2,3,4,5], a => a > 4)).toBeTruthy();
});

test("'find([1,2,3,4,5], a => a > 5' returns 'undefined'", () => {
    expect(main.find([1,2,3,4,5], a => a > 5)).toBeUndefined();
});

test("'find([1,2,3,4,5], a => a > 4' returns '5'", () => {
    expect(main.find([1,2,3,4,5], a => a > 4)).toBe(5);
});

test("'findInex([1,2,3,4,5], a => a > 5' returns '-1'", () => {
    expect(main.findIndex([1,2,3,4,5], a => a > 5)).toBe(-1);
});

test("'findIndex([1,2,3,4,5], a => a > 4' returns '4'", () => {
    expect(main.findIndex([1,2,3,4,5], a => a > 4)).toBe(4);
});

test("'every([1,2,3,4,5], a => a > 3' returns 'false'", () => {
    expect(main.every([1,2,3,4,5], a => a > 3)).toBeFalsy();
});

test("'every([1,2,3,4,5], a => a > 0' returns 'true'", () => {
    expect(main.every([1,2,3,4,5], a => a > 0)).toBeTruthy();
});

test("'filter([1,2,3,4,5], a => a > 3' returns '[4,5]'", () => {
    expect(main.filter([1,2,3,4,5], a => a > 3)).toEqual([4,5]);
});