
let Array1 = ["Mongo", "kiwi", "berries", "oranges", "tomato", "grapes"];
let students = [
    {
        name: "Kartik",
        age: 25
    },
    {
        name: "Piyush",
        age: 25
    },
    {
        name: "Raju",
        age: 28
    },
    {
        name: "Vikas",
        age: 22
    },
    {
        name: "Isha",
        age: 24
    },
    {
        name: "Isha",
        age: 87
    }
];

const Array2 = [1, 2, 3, 4, 5, 6];


// console.log("🚀 ~ Array1:", Array1.at(1))
// console.log("🚀 ~ Array1:", Array1[1])
// console.log("🚀 ~ Array1:", Array.of(1,2,3,4));
// console.log("🚀 ~ Array1:", Array.from([1,3,4,4]));
// console.log("🚀 ~ Array1:", Array1.join(" "));
// console.log("🚀 ~ Array1:", Array.isArray([]));
// console.log("🚀 ~ Array1:", Array1.length);
// console.log("🚀 ~ Array1:", Array1.includes("Mongo"));
// console.log(Array1.indexOf("Mongo"))
// console.log(students.findIndex((item)=>item.name=="isha"))
// console.log(students.findLastIndex((item)=>item.name=="isha"));
// console.log(students.concat([{name:"usha"}]))
// console.log(students.some((item)=>item.age<25));
// console.log(students.every((item)=>item.age<25));
// console.log(students.find((item)=>item.age==25));
// console.log(students.push({
//     name: "riya",
//     age: 33
// }));
// console.log(students.pop())
// console.log(students.unshift({
//     name: "riya",
//     age: 33
// }));
// console.log(students.shift())
// console.log(students.splice(1,2, {
//     name:"Esha", 
//     age:39
// }, {
//     name:"vijay", 
//     age:50
// }))
// console.log(students.slice(-3,-1))

// console.log(Array2.reverse())

// let unsortedArray = [23, 5, 42, 16, 8, 4, 15, 34];
// console.log(unsortedArray.sort((a,b)=>b-a))
// console.log(unsortedArray.toString())

// let nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12, 13]
// ];

// console.log(nestedArray.flat());
 
// let nestedArray2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [
//         [10, [11]],
//         [12, 13]
//     ]
// ];

// console.log(nestedArray2.flat(Infinity));
// console.log(nestedArray2.flatMap((x)=>x));
// let employees = [
//     {
//         name: "Kartik",
//         age: 25
//     },
//     {
//         name: "Piyush",
//         age: 25
//     },
//     {
//         name: "Raju",
//         age:34
//     },
//     {
//         name: "Vikas",
//         age: 22
//     },
//     {
//         name: "Isha",
//         age: 24
//     },
//     {
//         name: "Isha",
//         age: 87
//     }
// ];
// console.log(employees.map((item)=>item.name))
// console.log(employees.filter((item)=>item.age>30))
 

// const Array3 = [1, 2, 3];
// console.log(Array3.reduce((acc,item,index,arr)=>{
//     return acc+item
// },1))