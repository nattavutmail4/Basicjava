
// join คือ การแปลง สมาชิก array ให้เป็นสตริง  ,
// concat รวม array เป็นชุดเดียวกัน

const data = [100,200,300]
console.log(data)

const result = data.join(' ') //่ join('เครื่องหมายที่ต้องการเปลี่ยน') 
console.log(result)

const data2 = [400,500]

const alldata = data.concat(data2)
console.log(alldata)