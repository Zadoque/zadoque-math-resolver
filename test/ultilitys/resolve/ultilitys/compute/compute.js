const compute = (numbers, operation) => {
    let result = 0;
    switch(operation){
        case '+':
            result = numbers[0] + numbers[1];
            break;
        case '-':
            result = numbers[0] - numbers[1];
            break;
        case '*':
            result = numbers[0] * numbers[1];
            break;
        case '/':
            result = numbers[0] / numbers[1];
            break;
        default:
            console.log('deu merda e nem sei como');
    }
    if(result >= 0){
        return `+${result}`;
    }
    return result;
}

module.exports = compute;