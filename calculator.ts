type Operation = 'multiply' | 'add' | 'divide';
//type Result = string | number | undefined;


const calculator = (a: number, b: number, op: Operation): number => {
    // if (op === 'multiply') {
    //     return a * b;
    // } else if (op === 'add') {
    //     return a + b;
    // } else if (op === 'divide') {
    //     if( b === 0){
    //         return 'can\'t divide by 0!'
    //     }
    //     return a / b;
    // }

    switch (op) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error('Cant\'t divide by 0!');
            return a / b;
        case 'add':
            return a + b;
        default:
            throw new Error('Operation is not multiply, add or divide!')
    }
}

// const ans = calculator(2, 4, 'add')
// console.log('Ans: ', ans)

try {
    console.log(calculator(1,5,'divide'))
} catch (error: unknown) {
    let errorMsg = 'Something went wrong: '

    if(error instanceof Error){
        errorMsg+= error.message;
    }

    console.log(errorMsg);
}