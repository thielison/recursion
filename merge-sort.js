// Build a function mergeSort that takes in an array and returns a sorted array,
// using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1]
// should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110]
// should return [79, 100, 105, 110].

const merge = (A, B) => {
    const mergedArray = [];

    let i = 0;
    let j = 0;
    let k = 0;

    while (i <= A.length - 1 && j <= B.length - 1) {
        if (A[i] < B[j]) {
            mergedArray[k++] = A[i++];
        } else {
            mergedArray[k++] = B[j++];
        }
    }

    for (; i <= A.length - 1; i++) {
        mergedArray[k++] = A[i];
    }

    for (; j <= B.length - 1; j++) {
        mergedArray[k++] = B[j];
    }

    return mergedArray;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const low = arr.slice(0, mid);
    const high = arr.slice(mid, arr.length);

    const l = mergeSort(low);
    const h = mergeSort(high);

    return merge(l, h);
};

const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const array2 = [105, 79, 100, 110];
console.log(mergeSort(array1)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(array2)); // [79, 100, 105, 110]
