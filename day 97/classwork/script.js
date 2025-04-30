const names = ["Liam", "Emma", "Noah", "Olivia", "Ava", "William", "Sophia", "James", "Isabella", "Benjamin"];

// names.forEach((curValue, index) => {
//     if(index % 2 === 0) {
//         console.log(`${curValue} is on even index`);
//     } else {
//         console.log(`${curValue} is on odd index`);
//     }
// })

// const CopyForEach() => {

// }

function copyForEach(array, value, arg) {

    const copiedArray = [];

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        value.call(arg, currentValue, i, array);
        copiedArray.push(currentValue);
    }

    return copiedArray;
}

names.copyForEach((curValue, index) => {
    if(index % 2 === 0) {
        console.log(`${curValue} is on even index`);
    } else {
        console.log(`${curValue} is on odd index`);
    }
})