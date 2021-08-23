function sumInputNumbers() {
    let inputArray = [];
    let input;
    while (input = prompt("Введите число: ")) {
        if (isNaN(input)) {
            break;
        }
        else {
            inputArray.push(parseInt(input));
        }

    }

    alert("Тут все");


    let arraySum = inputArray.reduce((a, b) => a + b, 0);
    console.log(`${arraySum} сумма введенных чисел`);
}

sumInputNumbers();