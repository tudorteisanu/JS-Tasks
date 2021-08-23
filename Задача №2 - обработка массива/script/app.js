let students = [
    {
        name: "Gicu",
        marks: [6, 7, 5, 7, 7],
    },
    {
        name: "Valera",
        marks: [8, 7, 9, 6, 5],
    },
    {
        name: "Maks",
        marks: [10, 9, 9, 9, 6],
    },
    {
        name: "Alex",
        marks: [5, 4, 4, 4, 4],
    },
    {
        name: "John",
        marks: [4, 4, 4, 3, 2],
    },
    {
        name: "Mark",
        marks: [8, 9, 4, 10, 9],
    },
    {
        name: "Abdul",
        marks: [1, 1, 1, 1, 2],
    },
    {
        name: "Lorenco",
        marks: [10, 10, 10, 10],
    },





]

//calcs student average mark
const studentAverage = function countsStudentAverageMark(arr) {
    let sum = 0;
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        let studentName = arr[i].name;
        let row = arr[i].marks;

        for (let item of row) {
            sum = row.reduce(function (a, b) {
                return a + b;
            })
            res = sum / row.length;
        }

        console.log(`for ${studentName} average mark is ${res}`)

    }
}

//output students with mark < 5
const lessThenFive = function outputLessThenFive(arr) {
    let sum = 0;
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        let studentName = arr[i].name;
        let row = arr[i].marks;

        for (let item of row) {
            sum = row.reduce(function (a, b) {
                return a + b;
            })
            res = sum / row.length;
        }

        if (res < 5) {
            console.log(`Bad guys is ${studentName} with mark ${res}`);
        }
    }
}

//find the max and min avg mark
const minAndMax = function findMinAndMax(arr) {
    let sum = 0;
    let res = 0;
    let resultsArray = [];
    let studentsNames = [];


    for (let i = 0; i < arr.length; i++) {
        let studentName = arr[i].name;
        let row = arr[i].marks;

        for (let item of row) {
            sum = row.reduce(function (a, b) {
                return a + b;
            })
            res = sum / row.length;
        }

        studentsNames.push(studentName);
        resultsArray.push(res);


    }


    for (n = 0; n < resultsArray.length; n++) {
        let min_of_array = Math.min.apply(Math, resultsArray);
        let max_of_array = Math.max.apply(Math, resultsArray);
        if (resultsArray[n] === min_of_array) {
            console.log(`${studentsNames[n]} has lowest mark ${resultsArray[n]}`);
        } else if (resultsArray[n] === max_of_array) {
            console.log(`${studentsNames[n]} has highest mark ${resultsArray[n]}`);
        }

    }

}

//sorts students
const studentSort = function sortsStudentsReduced(arr) {
    let sum = 0;
    let res = 0;
    let resultsArray = [];
    let studentsNames = [];


    for (let i = 0; i < arr.length; i++) {
        let studentName = arr[i].name;
        let row = arr[i].marks;

        for (let item of row) {
            sum = row.reduce(function (a, b) {
                return a + b;
            })
            res = sum / row.length;
        }

        studentsNames.push(studentName);
        resultsArray.push(res);


    }


    let namesAndMarks = Object.assign(...resultsArray.map((k, i) => ({[k]: studentsNames[i]})))
    const sortable = Object.entries(namesAndMarks)
        .sort(([,a],[,b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    console.log(sortable);
}

//above average
const aboveAverage = function findsStudentsAboveAverage(arr) {
    let sum = 0;
    let res = 0;
    let resultsArray = [];
    let studentsNames = [];


    for (let i = 0; i < arr.length; i++) {
        let studentName = arr[i].name;
        let row = arr[i].marks;

        for (let item of row) {
            sum = row.reduce(function (a, b) {
                return a + b;
            })
            res = sum / row.length;
        }

        studentsNames.push(studentName);
        resultsArray.push(res);


    }



    let notesSum = resultsArray.reduce((a, b) => a + b, 0);
    let noteMedium = notesSum / resultsArray.length;

    for (let r = 0; r < studentsNames.length; r++) {
        if (resultsArray[r] > noteMedium) {
            console.log(`student ${studentsNames[r]} is above medium ${noteMedium} with note ${resultsArray[r]}`);
        }
    }



}


// studentAverage(students);
// lessThenFive(students);
// minAndMax(students);
//studentSort(students);
// aboveAverage(students);