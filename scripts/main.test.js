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

test("'concat([1,2,3],[4,5,6]' returns '[1,2,3,4,5,6]'", () => {
    expect(main.concat([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
});

test("includes([1,2,3], 3) returns true", () => {
    expect(main.includes([1,2,3], 3)).toBeTruthy();
});

test("includes([1,2,3], 4) returns false", () => {
    expect(main.includes([1,2,3], 4)).toBeFalsy();
});

test('indexOf([1,2,3], 2) returns 1', () => {
    expect(main.indexOf([1,2,3], 2)).toBe(1);
});

test('indexOf([1,2,3], 4) returns -1', () => {
    expect(main.indexOf([1,2,3], 4)).toBe(-1);
});

test("join([1,2,3], '') returns '123'", () => {
    expect(main.join([1,2,3], "")).toEqual("123");
});

test("join([1,2,3], ', ') returns '1, 2, 3'", () => {
    expect(main.join([1,2,3], ", ")).toEqual("1, 2, 3");
});

test("slice([1,2,3,4], 2) returns [3,4]", () => {
    expect(main.slice([1,2,3,4], 2)).toEqual([3,4]);
});

test("slice([1,2,3,4], 2, 3) returns [3]", () => {
    expect(main.slice([1,2,3,4], 2, 3)).toEqual([3]);
});

test("flat([1,2,[3,4]]) returns [1,2,3,4]", () => {
    expect(main.flat([1,2,[3,4]])).toEqual([1,2,3,4]);
});

test("flat([1,2,[3,4,[5,6]]]) returns [1,2,3,4,[5,6]]", () => {
    expect(main.flat([1,2,[3,4,[5,6]]])).toEqual([1,2,3,4,[5,6]]);
});

test("flat([1,2,[3,4,[5,6]]], 2) returns [1,2,3,4,5,6]", () => {
    expect(main.flat([1,2,[3,4,[5,6]]], 2)).toEqual([1,2,3,4,5,6]);
});

test("'flatMap([1,2,3,4], x => [x * 2]' returns [2,4,6,8]", () => {
    expect(main.flatMap([1,2,3,4], x => [x * 2])).toEqual([2,4,6,8]);
});

test("'flatMap([1,2,3,4], (x, i) => [x + i])' returns [1,3,5,7]", () => {
    expect(main.flatMap([1,2,3,4], (x, i) => [x + i])).toEqual([1,3,5,7]);
});

test("'flatMap([1,2,3,4], x => [[x * 2]]' returns [[2], [4], [6], [8]]", () => {
    expect(main.flatMap([1,2,3,4], x => [[x * 2]])).toEqual([[2], [4], [6], [8]]);
});

test("'of(4)' returns [4]", () => {
    expect(main.of(4)).toEqual([4]);
});

test("'of(4, 5, 6)' returns [4, 5, 6]", () => {
    expect(main.of(4, 5, 6)).toEqual([4,5,6]);
});