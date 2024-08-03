// The Fibonacci Sequence, is a numerical sequence where each number
// is the sum of the two numbers before it. Eg. 0, 1, 1, 2, 3, 5, 8, 13
// are the first eight digits in the sequence.

//  1. Using iteration, write a function fibs which takes a number and returns
//  an array containing that many numbers from the Fibonacci sequence.
//  Using an example input of 8, this function should return the array
//  [0, 1, 1, 2, 3, 5, 8, 13].
const fibs = (num) => {
    const a = [0, 1]; // Default

    for (let i = 2; i < num; i++) {
        a.push(a[a.length - 1] + a[a.length - 2]);
    }

    return a;
};

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// 2. Now write another function fibsRec which solves the same problem recursively.
const fibsRec = (num, a = [0, 1]) => {
    if (a.length === num) {
        return a;
    }

    a.push(a[a.length - 1] + a[a.length - 2]);

    return fibsRec(num, a);
};

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
