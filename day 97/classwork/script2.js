function mapClone(arr, callback) {
    const res = [];
    for (let x = 0; x < arr.length; x++) {
        res.push(callback(arr[x], x, arr));
    }
    return res;
}


