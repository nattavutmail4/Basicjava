
//รูปแบบการเขียน Object

const customer = {
     customerName:"Nattawut",
     customerLname:"Khuntamli",
     customerAge:24,
     customerAddress:"lorem popstart"
}
console.log(customer.customerName + customer.customerLname);

let username = "Admin" ,password="Aa123654"
const Login = {
    username:username,
    password:password
}
msg=(message)=> (message == true) ? 'Welcom to login success':'Login to false' // รูปแบบการเขียน Arrow function แบบใหม่
let result = (Login.username == 'Admin' && Login.password == 'Aa123654') ? console.log(msg(true)):console.log(msg(false)) //การเขียน if แบบสั่น






