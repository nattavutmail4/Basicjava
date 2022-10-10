/**
 *      String
 *   MultiLine String สามารถทำงานกับข้อความยาวๆได้ โดยการขึ้น
 * บรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกินขึ้นโดยใช้  `` เรียกว่า template string
 * 
 *   Interpolation สามารถแทรกตัวแปลงในพื้นที่ String 
 * ได้โดยใช้ ${ชื่อตัวแปร} รวทกับ `` template string
 * 
 */
 let nikcename = 'กอล์ฟ'
 let address_  = ' 1563 ถนนเพชรเกษม อำเภอ หาดใหญ่ จังหวัดสงขลา 90110 '

 //รูปแบบที่ 1
  const address = 'ชื่อลูก: เด็กชายกอลฟ์ ที่อยู่ 1563 ถนนเพชรเกษม อำเภอ หาดใหญ่ จังหวัดสงขลา 90110'
  console.log(address)

  const msg_1   = 'ชื่อลูก: เด็กชายกอลฟ์ \n ที่อยู่ 1563 ถนนเพชรเกษม อำเภอ หาดใหญ่ จังหวัดสงขลา 90110' // \n คือ การขึ้นบันทัดใหม่ ใน Javascript
  console.log(msg_1)


  const msg_2   = `ชื่อลูกค้า: ${nikcename} \n ที่อยู่ ${address_}` // เป็นการใช้งานร่วมกันระหว่าง template string กับ Interpolation
  console.log(msg_2)