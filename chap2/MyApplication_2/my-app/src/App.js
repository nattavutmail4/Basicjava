
import TransactionComponent from "./components/TransactionComponent"
import FormComponent from "./components/FormComponent"

import './App.css'

import {useState} from'react'


const  App = ()=>{
    const headTitle = {color:'red',textAlign:"center"}
    const Titlepop  = {color:"green",textAlign:"center",fontSize:"17px"}
    const [items,setItems] = useState([])
    const onAddNewItem = (newItem)=>{
      // console.log('ข้อมูลที่ส่งจากfrom component',newItem)
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      })
    }
    return(
      <>
        <div className="container">
           <h2 style={headTitle}>บัญชีรายรับ - รายจ่าย</h2>
           <p  style={Titlepop}>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
           <FormComponent onAddItem = {onAddNewItem} />
           <TransactionComponent items = {items} />
        </div>
      </>
    );
}
export default App;
