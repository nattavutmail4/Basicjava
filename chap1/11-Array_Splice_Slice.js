/**
 * .slice()
 *  เป็น method หนึ่งของ array กันก่อน คำว่า slice ถ้าแปลแบบตรงตัวหน่อย ก็จะแปลว่า “การหั่น”
 * ซึ่งหน้าที่ของมันก็ตรงตามคำแปลนั่นแหละ โดย slice จะทำการ return array ใหม่
 * ที่ค่าภายในคือส่วนที่หั่นออกจาก array เดิม ซึ่ง parameters ที่ slice รับเข้าไปคือ ค่า index
 * เริ่มต้น และ ค่า index สุดท้าย ที่เราต้องการจะหั่น
 * 
 * .splice() นั้นจะมีชื่อคล้ายๆ กับ slice แต่ว่า splice จะทำการเปลี่ยนแปลง array ตัวเก่า 
 * ไม่ได้สร้าง array ใหม่เหมือนกับ slice โดยมันสามารถที่จะนำมาใช้ใน การเพิ่มค่าเข้า หรือดึงค่าออก จาก array
 * 
 */

//ตัวอย่างการเขียน slice

// object
// const temAvengers = [
//      'Captain America', //0
//      'Iron Man', // 1
//      'Thor', //2
//      'Hulk', //3
//      'Doctor Strange' //4
// ]

// const sliceWithNoend = temAvengers.slice(2) //หั่น array 2ตัว 0 กับ 1
// console.log(sliceWithNoend) // ['Thor','Hulk','Doctor Strang']

// const sliceWithEnd = temAvengers.slice(1,5)
// console.log(sliceWithEnd) // ['Iron Man','Thor','Hulk','Doctor Strang]

// // string
// const str ='TemAvengers'
// const sliceString = str.slice(1,4)
// console.log(sliceString) // emA 

//ตัวอย่างการเขียน splice

const temAvengers = [
         'Captain America', //0
         'Iron Man', // 1
         'Thor', //2
         'Hulk', //3
         'Doctor Strange' //4
]

temAvengers.splice(1,3)
console.log(temAvengers)

temAvengers.splice(3,1,'Ant-man')
console.log(temAvengers)

/**
 *  สรุป slice นั้นเป็นการหั่นส่วนของ array ตาม index ที่เราต้องการ
 * และ return ออกมาเป็น array ใหม่ แต่ว่า splice จะเป็นการเปลี่ยนแปลง
 * ค่าใน array เดิม ซึ่งเราสามารถที่จะ เพิ่ม ลด หรือ แทนที่ ค่าใน array ได้
 */