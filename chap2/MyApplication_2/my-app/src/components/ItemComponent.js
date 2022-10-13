  /**
   * Props หรือชื่อเต็มๆมันคือ Properties หากเปรียบกับ HTML แล้ว 
   * ตัว Props จะเป็นคล้ายๆ attributes ของ HTML ดัง เช่น src, href หรือ class
   * 
   *  React Props คือ ตัวแปรที่สามารถส่งเข้าไปใน Components 
   * ได้ผ่านการกำหนด Attribute ส่งผลให้ Componenet แต่ละตัว
   * สามารถรับค่าจากด้านนอกเข้าไปทำงานได้
   */
   import PropTypes from 'prop-types';   //เป็น libray ใชสำหรับกรองข้อมูล อารมประมาณ validation https://www.npmjs.com/package/prop-types

const ItemComponent =(props)=>{

const {title,amount} = props
  return(
      <>
         <li  >{title} <span>{amount}</span></li>
      </>
  )
}
ItemComponent.prototype={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}

export default ItemComponent