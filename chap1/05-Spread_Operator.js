/**
 *     Spread Operator
 *  ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งานโดยเติมเครื่องหมาย ... ด้านหน้าตัวแปร Array
 * 
 */

// รูปแบบตัวอย่างการเขียน Spread Operator

// const newArr = [1,2,3,4]
// const data   = [...newArr,5,6,]
// console.log(data)


const colors = ['แดง','เขียว','ขาว']
const new_colors = ['ฟ้า','เหลือง','น้ำเงิน','ขาว','ชมพู',...colors]
const newColors  = ['คราม','ดำ','เทา']
new_colors.push('ส้ม',...newColors) // push เป็นการเพิ่มข้อมูลสมาชิกลงใน array 
console.log(new_colors)