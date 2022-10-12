import ItemComponent from "./ItemComponent"
import '../assets/css/Transaction.css'
import {v4 as uuidv4} from 'uuid' //ใช้สำหรับกดหนด id ไม่ให้ซ้ำ ต้องติดตั้งก่อน npm i uuid
 /**
  *   Keys เป็นพร็อพเพอร์ตี้ที่อยู่ใน JSX
  * โดย Keys จะมีค่าไม่ซ้ำกัน กำหนดขึ้นเพื่อให้
  * React นำไปเช็คว่ามี Component ใดบ้างที่เปลี่ยนแปลงค่า
  * ไปในการ Render หน้าเว็บ
  * @returns 
  * 
  *   React PropsType(Validation)
  * เป็นการประกาศรูปแบบหรือชนิดของ Props ที่ส่งเข้าไปทำงาน
  * ในComponent เช่น กำหนดชนิดข้อมูล Props หรือบังคับให้ต้อง
  * กำหนดค่า Props ทุกครั้งที่มีการเรียกใช้งาน Component เป็นต้น
  */
const TransactionComponent =()=>{
    //ชุดข้อมูลค่าใช้จ่าย
    const data = [
      {title:"ค่ารักษาพยาบาล",amount:1},
      {title:"ค่าน้ำมันรถ",amount:500},
      {title:"ค่าเครื่องดืม",amount:200},
      {title:"ค่าอาหาร",amount:60},
      {title:"ค่าขนม",amount:60},
      {title:"ค่าทางด่วน",amount:100},
      {title:"ค่าประกันสังคม",amount:500},
    ]

    return(
        <>
           <ul  className="item-list">
               {/* {data.map(({id,title,amount},index)=>{ */}
                  {data.map((element)=>{
                  return(
                    //  <ItemComponent key={id} name ={title}  amount={amount}/>
                    <ItemComponent key={uuidv4()} {...element}/>
                  )
               })}
           </ul>
        </>
    )
}
export default TransactionComponent