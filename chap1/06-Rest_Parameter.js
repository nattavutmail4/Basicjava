/**
 *   Rest Parameter
 *  ใช้ในการส่งค่า Parameter เข้าไปทำงานใน function 
 * โดยไม่จำกัดจำนวนโดยใช้เครืองหมาย ...
 */

/** รูปแบบการเขียน Rest Parameter */
summation = (...numberArray)=>{
    let total = 0 //ประกาศตัวแปร total มีค่าเท่ากับ 0
    for(const number of numberArray){
        total+=number
    }
    return total
}
// console.log(summation(100,20,30,40))
multiply = (multiplier,...numberArray)=>{
    return numberArray.map((element)=> multiplier * element)
}
console.log(multiply(2, 15, 25, 42,88)) // 2*15 = 30 2*25 2*42

minus = (minusplier,...numberArray)=>{
    return numberArray.map((element)=> minusplier - element)
}
console.log(minus(10,2,4,5,3))
