/**
 *  .map()
 *  โดยหน้าที่ของมือคือการวนค่าทุกค่าใน array ตาม function ที่เราต้องการ และทำการสร้างใหม่ออก
 * มาพร้อมกับค่าใหม่ 
 */

//ตัวอย่างการใช้ map

const arr = [1,2,3,4,5,6]
const mulltiplyTwo = arr.map((value)=>{return value * 3}) // นำค่าทั้งหมดใน array มาคูณ 2
console.log(arr) // [1,2,3,4,5,6]
console.log(mulltiplyTwo) // [2,4,6,8,10]

const sum = arr.map((element)=>{return element **2})
console.log(sum);

const sum_1 = arr.map((element)=>{return element +2})
console.log(sum_1);


const dataStorg = ['ฝนตก','แดดร้อน','อากาศดี','หมอก','หิมะตก']
const resultStorg = dataStorg.map((element,i)=>{
    return `วันที่ ${i+1} ${element}`
})
console.log((resultStorg))


const data = [
    {day:"01/10/2565",weather:"แดดร้อน",temp:27},
    {day:"02/10/2565",weather:"ฝนตก",temp:20},
    {day:"03/10/2565",weather:"ฝนตก",temp:27},
    {day:"04/10/2565",weather:"แดดร้อน",temp:27},
    {day:"05/10/2565",weather:"อากาศดี",temp:27},
]

const resultData = data.map((value,i)=>{
    return `ลำดับที่ ${i+1} วันที่ ${value.day} อากาศ ${value.weather} อุหภมูิ ${value.temp}`
})

console.log(resultData)