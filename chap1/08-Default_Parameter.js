// Default Parameter กรณีที่ส่งตัวแปรมาไม่มีค่า ให้กับหนดค่าเป็นอะไร


//ตัวอย่างกรณี customerAddress ไม่มีค่า ให้กำหนดเป็น กรุงเทพมหานคร
getDataCustomer = (customerName,customerAddress='กรุงเทพมหานคร')=>{
    const address = `ชื่อลูกค้า :${customerName} ที่อยู่ ${customerAddress}`
    return address
}

console.log(getDataCustomer('Nattawut Khuntamli','Lorem'))
console.log(getDataCustomer('Somechai Malicona'))