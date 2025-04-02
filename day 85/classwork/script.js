// 1) შექმენით ობიექტი, სადაც გექენებათ 5 კუთვნილება. თქვენი დავალებაა გადაუაროთ ამ ობიექტს for in ციკლის მეშვეობით და დაბეჭდოთ ამ ობიექტში თითოეული კუთვნილების მნიშვნელობა

const obj = {
    name: "Lika",
    surname: "Chkhikvadze",
    favColor: "Black",
    Group: 49,
    status: "at Lesson"
}

for(const key in obj){
    console.log(obj[key])
}