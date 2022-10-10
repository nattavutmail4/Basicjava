/**
 *  ค้นหาข้อมูลใน array ด้วย filter
 *  indexof(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอถ้าค้นไม่เจอจะได้ -1
 *  find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
 *  findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ค้าค้นไม่เจอจะได้ -1
 */
const colors = ['แดง','เขียว','น้ำเงิน','ม่วง','ขาว','ฟ้า']
// console.log(colors) // ['แดง','เขียว','น้ำเงิน','ม่วง','ขาว','ฟ้า']

// การใช้ indexof
// console.log(colors.indexOf("แดง")) // เจอต่ำแหน่ง array ที่  0 เพราะแดง อยู่ในต่ำแหน่ง array ที่ 0
// console.log(colors.indexOf("น้ำเงิน"))// เจอต่ำแหน่ง array ที่ 2 เพราะน้ำเงิน อยู่ในต่ำแหน่ง array ที่ 2
// console.log(colors.indexOf('ส้ม')) // -1 เพราะไม่เจอสมาชิกใน array ที่ค้นหา

//การใช้ find รูปแบบการเขียน es6
// console.log(colors.find((element)=>element=='เขียว')) //ผลลัพธ์เขียว
// console.log(colors.find((element)=>element=='ฟ')) // undefined เพราะไม่เจอตัวแปร 


const custommer = [
     {name:"apples",age:24},
     {name:"bananas",age:21},
     {name:"cherries",age:19}
]
//รูปแบบการเขียน Using arrow function and destructuring
// console.log(custommer.find((value)=> value.name == 'apples')) // apples


// การใช้ findIndex
const array1 = [5, 12, 8, 130, 44]
const findIndexElementArray = array1.findIndex((value)=>{
    return value %2 == 0
})
console.log(findIndexElementArray) // 1 เพราะมีเศษ