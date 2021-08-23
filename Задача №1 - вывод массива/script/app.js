let n = [1, 4, 5, 6, 8];


/*

// for
for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
}

//for of
for (let arrItem of n) {
    console.log(arrItem);
}

// forEach
n.forEach((item, index, array) => {
    console.log(`${item} находится на ${index} позиции`);
})

//while
let i = 0;
while (i < n.length) {
    console.log(n[i]);
    i++;
}

//do while
let i = 0;
do {
    console.log(n[i]);
    i++;
} while (i < n.length);

//for in
for (let arrItem in n) {
    console.log(`${arrItem} is in array ${n}`);
}

 */



//map
const newArr = n.map(function(element, index, array){
    return element;
});

console.log(newArr);







