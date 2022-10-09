/**
 *  Block Scope (let/constant)
 *  การประกาศใช้งาน lef แทน var เนื่องจาก var เป็นตัวแปรที่ถูก
 * มอง global variable สามารถทำงานทะลุขอบเขต (block scope) ได้
 *   
 *  var ทำงานทะลุ scope 
 *  let ทำงานภายใต้ block นั้นๆ
 * 
 *  การใช้งาน const ในการประกาศตัวแปรที่เก็บค่าคงที่
 * 
 * 
 */

/**
 * 
 * example1
 *  
 *********** */
// การเขียนแบบเดิม
// var x = 10
// if(x == 10){
//     var y =500
//     console.log(y)
// }
// console.log(y)

// let x  = 10
// let y  = 100
// if(x ==10){
//     let y = 50
//     console.log(y)
// }
// console.log(y)


// const x = 50 
// x=100 // error ไม่สามารถเปลี่ยนค่าได้
// console.log(x)

