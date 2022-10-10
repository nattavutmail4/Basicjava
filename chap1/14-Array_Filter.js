/**
 *  Array Filter
 *  มีหน้าที่ไว้คัดกรองถ้าสมาชิกใน Array ตัวไหนที่เงื่อนไขได้ตามที่ทำหนดไว้ใน Function
 *  จะถูกนำมาใส่รวมกันใน Array ใหม่ที่เป็นผลลัพธ์ ตัวอย่างของการทำงาน Method Filter
 */

const members = [
    {name:"Eve",age:24},
    {name:"G",age:22},
    {name:"A",age:23},
    {name:"B",age:14},
    {name:"C",age:12},
    {name:"EA",age:25},
]

// const result = members.filter((member)=>{
//     return member.age < 14
// })
// console.log(result) // {name:c age 12}


// const rs_age = [10,12,13,14,15,16]
// console.log(rs_age.filter((value)=>value > 12))


// let result_data = []
// for (let i = 0; i < members.length; i++) {
//     if (members[i].age < 15) {
//         result_data.push(members[i])
//     }
//   }
// console.log(result_data)

// const result = members.find((members)=>{
//     return members.age < 17
// })
// console.log(result)

const employee = [
    {name:"G",department:"โปรแกรมเมอร์",age:25},
    {name:"A",department:"การตลาด",age:26},
    {name:"B",department:"ตัดต่อ",age:22},
    {name:"C",department:"ฝึกงาน",age:21},
]
const result = employee.filter((value)=>{
    return value.department =='โปรแกรมเมอร์'
})
console.log(result)