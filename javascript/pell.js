// 6 kyu -  Pell Numbers
function pell(n) {
    let numOne = 0n;
    let numTwo = 1n;
    let pellNum;

    if (n === 0) {
        return numOne;
    } else if (n === 1) {
        return numTwo;
    }

    for (let i = 2; i <= n; i++) {
        pellNum = 2n * numTwo + numOne;
        numOne = numTwo;
        numTwo = pellNum;
    }

    return pellNum;
}