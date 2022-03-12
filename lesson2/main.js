// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr[8])
//  const mass=["a",'b','c','d'];
// console.log(mass[2])
// let obj={
//     username:'John',
//     followers:[
//         {
//             username:'John'
//         },
//         {
//             username:'Aidana',
//             followers:[
//                 {
//                     username:'Jack'
//                 },
//                 {
//                     username:'Joe'
//                 },
//                 {
//                     useranme:'John'
//                 }
//             ]
//         },
//         {
//
//         },
//
//     ]
// };
// console.log(obj.followers[1].followers[2].useranme)

const array=[
    {
        username:"Jack",
        full_name:"Jack Kyrgyz"
    },
    {
        username:"joe",
        full_name: "Joe Kyrgyz"
    },
    {
        username:"Vito",
        full_name:"Vito kyrgyz"
    },
    {
        username:"Vito",
        full_name:"Vito kyrgyz"
    },
    {
        username:"Vito",
        full_name:"Vito kyrgyz"
    }
];
// console.log(array[0].username, array[0].full_name)

    // const obj={
    // key1:"bi",
    // key1:"b2",
    // key1:"b3",
    // key1:"b4",
    // key1:"b5",
    // key1:"b6",
    // key1:"b8",
    // key1:"b9",
    // key1:"b10",
    // key1:"b11"
    //
    // }
    //
    // for(let key in obj){
    //     console.log(key+ ":"+obj[key])
    // }
// let i=1
// while(i<5){
//     console.log("Hello");
//     i++
// }
const users=[
    {
        useraname:"John",
        salary:500
    },
    {
        username:"Vito",
        salary: 1000
    }
];
const filteredUsers=[];
for(let user of users){
    if(user.salary>500){
        filteredUsers.push(user)
    }
}
console.log(filteredUsers)