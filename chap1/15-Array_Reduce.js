// Array Reduce
/**
 * ซึ่งเป็น 1 ในตัวที่ผู้เขียนงงกับ Method ตัวนี้พอสมควรในช่วงแรกที่ได้เจอ 5555 Method Reduce นั้นจะทำหน้าที่รวมผลลัพธ์โดยเราสามารถกำหนดค่าเริ่มต้น 
 * และ Function ที่ใช้ในการรวมได้ ก่อนดูตัวอย่างขออธิบายก่อนว่าในโค้ดนั้นจะมีการรับ Parameter 2 ตัวก็คือ Function และ Initial Value มาดูตัวอย่างกันเลย
 */
//  const numbers = [10, 20, 30, 40]
//  const result = numbers.reduce((sum,number) => {
//    return sum+number
//  }, 1)// 0 คือผลรวม ประมาณ 0+10+20+30+40 100
//  console.log(result) // 100

const cart= [
    {name:"กระเป่า",price:100},
    {name:"หนังสือ",price:200},
    {name:"ปืน",price:300},
]

const summation = cart.reduce((value,e)=>{
     let total = e.price+value
     return total
},0)
console.log(`ลูกค้าต้องชำระเงิน ${summation} บาท`)
