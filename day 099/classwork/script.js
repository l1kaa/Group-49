// 1) გამოიყენეთ reduce რომ დათვალოთ list'ში მყოფი რიცხვების ჯამი

listn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listnReduced = listn.reduce((res, cur) => {
    return res + cur
}, 0)

console.log(listnReduced)

// 2) გამოიყენეთ reduce რომ დათვალოთ list'ში მყოფი რიცხვების ნამრავლი

const listnReduced2 = listn.reduce((res, cur) => {
    return res * cur
}, 0)

console.log(listnReduced2)