const getSigns =  require('./getSigns.js')
let test1 = ['+', '-'];
let test2 = ['+', '+'];
7-2+6*3
test(` Get signs(+2*-6, 2) must return ${test1}`, () => {
    expect(getSigns('+2*-6', 2)).toStrictEqual(test1);
});

test(` Get signs(5-5+13+2*-6, 2) must return ${test1}`, () => {
    expect(getSigns('+5-5+13+2*-6', 9)).toStrictEqual(test1);
});

test(` Get signs(7-2+6*3, 5) must return ${test1}`, () => {
    expect(getSigns('7-2+6*3', 5)).toStrictEqual(test2);
});
test(` Get signs('7-2+6*-3-55-3', 5) must return ${test1}`, () => {
    expect(getSigns('7-2+6*-3-55-3', 5)).toStrictEqual(test1);
});
