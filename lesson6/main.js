
//
// //es6
// let a=10;
//
// let b=5;
//
//
// //es5
// var c=20
//
//
// console.log(c)
// c='hello'
//
// console.log(c)
const first_name='jack '
const last_name='nik';

// console.log(first_name +""+ last_name)  //es5

//
// console.log(`${first_name} ${last_name}`;
//
// const getFullName=(user)=>{
//     // return "first_name: " +user.first_name+"\\n"+"last_name:"+user.last_name;
//     return `First Name:${user.first_name}"\n"Last Name:${user.last_name}`
// }
// const user={
//     first_name:'jack',
//     last_name:'nik'
// // }
// // console.log(getFullName(user))
//
// const mass=[1,2,3,4,5]
// const mass2=[]
//
// for(let i=0; i<mass.length;i++){
// mass2.push(mass[i]) }
// console.log(mass2)


// const obj={
//     username:'jack',
//     age:19,
//     last_name:"nik",
//     full_name:"jack nik"
// }
// const obj2={
//     ...obj,
//     key:"value",
//     key2:"value2"
// }
//
// console.log(obj2)
//

 const props={
     onsubmit:()=>{
         console.log("Submit")
     },
     data:[
         {
             key:"value"
         },
{
             key:"value"
         },
{
             key:"value"
         }

         ]
 }
const {data}=props;


console.log(data)
onsubmit();





