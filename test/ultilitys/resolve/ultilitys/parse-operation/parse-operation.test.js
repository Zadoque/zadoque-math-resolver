const parseOperation = require('./parse-operation')
let info1 = {
    index_start: 0,
    index_op: 6,
    index_end: 10,
    sign: '+'
}
test(`Extract opera -509.8+6.98-3 must return ${info1}`, () => {
    expect(parseOperation('-509.8+6.98-3')).toStrictEqual(info1);
});