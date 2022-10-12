const ItemComponent =(props)=>{
  /**
   * Props หรือชื่อเต็มๆมันคือ Properties หากเปรียบกับ HTML แล้ว 
   * ตัว Props จะเป็นคล้ายๆ attributes ของ HTML ดัง เช่น src, href หรือ class
   * 
   */
  return(
      <>
         <li >{props.name} <span>{props.amount}</span></li>
      </>
  )
}
export default ItemComponent