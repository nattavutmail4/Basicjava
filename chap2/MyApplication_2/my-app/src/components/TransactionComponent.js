import ItemComponent from "./ItemComponent"
import '../assets/css/Transaction.css'
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
const TransactionComponent =(props)=>{
    //ชุดข้อมูลค่าใช้จ่าย
    const {items } = props //ข้อมูลที่ถูกส่งมาจาก App.js
    return(
        <>
           <ul  className="item-list">
               {/* {data.map(({id,title,amount},index)=>{ */}
                  {items.map((element)=>{
                  return(
                    //  <ItemComponent key={id} name ={title}  amount={amount}/>
                    <ItemComponent {...element} key={element.id}/>
                  )
               })}
           </ul>
        </>
    )
}
export default TransactionComponent