
/**
 *  Join เป็นการแปลง array เป็นสตริง
 *  concat เป็นการต่อสมาชิกใน array
 * 
 *  push  เป็น function หนึ่งที่เราใช้กันบ่อยมากๆ เพราะว่าเป็น function ที่เพิ่มค่าเข้าไปที่ค่าสุดท้ายของ array โดย push นั้นจะทำการ mutate array ตัวเก่า
 * 
 *  pop   เป็นการนำค่าใน index สุดท้ายออกมา และ return ค่านั้นออกมา ซึ่ง pop จะทำการ 
 * mutate array เช่นเดียวกันกับของ push ทำให้เวลาเราเรียก array เดิม ก็จะแสดงเป็น array ค่าใหม่ แต่ถ้าเรียก pop กับ array ว่าง 
 * ก็จะได้ค่าเป็น undefined แทน
 * 
 *  shift ส่วนถ้าอยากดึงค่าใน index แรกของ array ออก ก็มี function ที่ชื่อว่า shift มาให้เราใช้ ซึ่งก็แน่นอนนะแหละว่า
 *  mutate array เช่นเคย แต่ถ้าเกิดว่า array ที่เราจะ shift นั้นเป็น array ว่าง ค่าที่ return ออกมาก็จะเป็น undefined ครับ 
 * 
 * .unshift()
 *    ถ้าหากว่าเราต้องการที่จะเพิ่มค่าเข้าไปยัง index ของ array ละก็ เราสามารถทำได้ด้วย unshift
 *  ซึ่งก็จะเหมือนกับ push ที่จะ mutate array นั่นเอง โดยทั้ง push และ shift นั้นสามารถที่จะเพิ่มค่าได้มากกว่าหนึ่งค่าในการเรียกใช้งาน
 *  
 */

//ตัวอย่างการใช้งาน  push
// const array = [1,2,3,4,5]
// console.log(array) //  [1,2,3,4,5]
// console.log(array.length) // 5

// array.push(6)
// console.log(array) // [1,2,3,4,5,6]
// console.log(array.length) // 6


// ตัวอย่างการใช้งาน pop
// const array = [1,2,3,4,5]
// console.log(array) // [1,2,3,4,5]
// console.log(array.length) // 5

// array.pop()
// console.log(array) // [1,2,3,4]
// console.log(array.length) // 4


//การใช้งาน unshift
// const array = [1,2,3,4]
// console.log(array)//[1,2,3,4]
// console.log(array.length) //4

// array.unshift(0)
// console.log(array) // [0,1,2,3,4] unshift จะเป็นการ add array ไปหน้าสุด
// console.log(array.length) //5


//ตัวอย่างการเขียน shift 
// const array = [1,2,3,4,5]
// console.log(array) // [1,2,3,4,5]
// console.log(array.length) //5

// array.shift()
// console.log(array) //[2,3,4,5] //ตัด array ตัวแรกออก
// console.log(array.length) // 4