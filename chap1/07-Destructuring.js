/**
 *   Destructuring ( การสลายโครงสร้าง )
 *  คือ การกำหนดค่าที่อยู่ภายใน Array หรือ Object ให้กับตัวแปร
 * โดยใช้วิธีการจับคู่ตัวแปรกับค่าใน array หรือ object เช่น
 *  
 *  const colors = ['ขาว','แดง']
 *  const a  = colors[0] // a = ขาว
 *  const b  = colors[1] // b = แดง
 * 
 *  การใช้งาน 
 *   const [a,b] = colors 
 *   const {a,b} = colors
 */

// const colors = ['แดง','ขาว','ส้ม']
// const [a,b,c] = colors // แดง ขาว ส้ม
// const [,,d] =  colors  // ,, เป็นการข้ามค่า array ตัวถัดไป ผลลัพธ์ที่ได้คือ ส้ม
// console.log(a)
// console.log(d)

// const customers = {
//     name:"nattawut",
//     lname:"Khuntamli"
// }
// const {name,lname} = customers
// console.log(`ยินดีต้อนรับคุณ ${name}  ${lname} เข้าสู่ระบบ`)

const weapon = {
     name:"M4A1",
     type:"ปืนกล",
     price:50000,
     stock:100
}
const {name,type,price,stock} = weapon
console.log(`ชนิดปืนที่ครอบครอง ${name} ประเภทปืน ${type} ราคาปืนปัจจุบัน ${price} บาท จำนวนคงเหลือ ${stock} กระบอก`)