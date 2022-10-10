/**
 *   Arrow function
 *  เป็นรูปแบบการเขียน function ให้มีความกระชับมากยิ่งขึ้น
 * รูปแบบเดิมในการเขียน
 *   function fullname(fname,lastname){
 *    return fname+lstname 
 *  }
 * 
 *  รูปแบบใหม่
 *  เป็นการเขียน function ให้มีกระชับมากยิ่งขึ้น
 * fullname = (fname,lname)=>fname+lname  (ไม่ต้องใส่ปีกกาหรือ return ก็ได้ ใช้ในกรณีที่มีคำสั่งไม่เยอะ)
 * 
 * 
 */

//รูปแบบเก่า Arrow function
function fullname(fname,lname){
     return fullname+lname
}
console.log(fullname('Nattawut','Khuntamli'))


//รูปแบบใหม่ Arrow function
full_name = (fname,lastname)=>fname+lastname
console.log(full_name('Nattawut','Khuntamli'))

setAge=(age)=>`อายุ ${age}`
console.log(setAge(14))

const setAg =(age)=>{
    return age
}
console.log(`dd`+setAg(10))