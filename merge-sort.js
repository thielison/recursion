// Build a function mergeSort that takes in an array and returns a sorted array,
// using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1]
// should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110]
// should return [79, 100, 105, 110].

const merge = (leftArray, rightArray) => {
    const sortedArray = [];

    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            sortedArray.push(leftArray[i]);
            i++;
        } else {
            sortedArray.push(rightArray[j]);
            j++;
        }
    }

    for (; i < leftArray.length; i++) {
        sortedArray.push(leftArray[i]);
    }

    for (; j < rightArray.length; j++) {
        sortedArray.push(rightArray[j]);
    }

    return sortedArray;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid, arr.length));

    return merge(left, right);
};

const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const array2 = [105, 79, 100, 110];
console.log(mergeSort(array1)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(array2)); // [79, 100, 105, 110]
