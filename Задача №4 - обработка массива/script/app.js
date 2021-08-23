function sumInputNumbers() {
    const inputArray = [];
    let input;
    while (input = prompt("Enter a value: ")) {
        if (isNaN(input)) {
            break;
        }
        else {
            inputArray.push(parseInt(input));
        }

    }

    alert("Done");


    let arraySum = inputArray.reduce((a, b) => a + b, 0);
    console.log(`${arraySum} - Sum of entered values`);
}

sumInputNumbers();