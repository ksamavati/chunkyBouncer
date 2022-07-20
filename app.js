function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArr.push(arr[i]);
    }

    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));


function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let index = 0;
    for (let i = 0; index < arr.length; i++) {
        newArr.push([]);
        for (let j = 0; j < size && index < arr.length; j++) {
            newArr[i].push(arr[index]);
            index++;
        }
    }

    return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));