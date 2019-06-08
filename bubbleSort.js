//Bubble Sort: a sorting algorithm that repeatedly goes through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order
//O(n)


var arr = [3, 8, 11, 12, 4, 5, 2, 1, 18, 15, 7]

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j)
            }
        }
    }
    return arr;
}

console.log(sort(arr.slice()))

//bubble sort with a do while
//a do while: loops through a block of code once, and then repeats while a specified condition is true

function sort(arr) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

console.log(sort(arr.slice()))