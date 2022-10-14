import '../assets/css/form.css'

/**
 *   State
 *  คือ ตัวแปรที่เก็บข้อมูลภายใน Component คล้ายๆกับ Props
 * แต่การใช้งาน Props นั้นข้อมูลจะไม่สามารถเปลี่ยนแปลงค่าได้แต่ State สำามารถทำได้
 *  ฉะนั้น ถ้าต้องการให้ข้อมูลภายในแอพสามารถเปลี่ยนแปลงค่าได้
 * ในระหว่างรันแอพก็จะใช้ State ซึ่งรูปแบบเดิมจะเขียนภายใน Class Component
 * 
 *   React Hook 
 *  เป็นฟีเจอร์ที่มีอยู่ใน React เวอร์ชั่น 16.8 เป็นต้นไป
 * ใช้สำหรับจัดการเกี่ยวกับ State หรือ ฟีเจอร์ต่างๆที่อยู่ภายใน React
 * โดยที่ไม่ต้องเขียนใน Class Component แต่จะเขียนใน Function 
 * Component แทน
 *  ตัวอย่่าง React Hook
 *  1. useState
 * 
 *     ตัวอย่างการใช้ useState
 *     import {useState} from 'react'
 *     [ชื่อ State, ฟังก์ชั่นที่ใช้เปลี่ยนแปลงข้อมูล State] = useState('ค่าเริ่มต้น state ')
 *     const [name,setName] = useState('Kho')
 *     const [age,setAge] = useState(30) เป็นต้น
 *     จะได้ Array ที่ Destructuring จาก useState
 * 
 *  2. useEffect
 *  3. useReducer
 *  4. useContext
 *  5. useMemo
 *  6 useCallBack
 * @returns 
 * 
 */
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid' //ใช้สำหรับกดหนด id ไม่ให้ซ้ำ ต้องติดตั้งก่อน npm i uuid

const FormComponent = (props)=>{

    //รูปแบบการใช้งาน useState
    const [title,setTitle]   = useState('') //กำหนดเป็นค่าว่าง
    const [amount,setAmount] = useState(0)  //กำหนดเป็น 0
    //end useState

    const inputTtitle = (event)=>{
        // console.log(event.target.value)
        setTitle(event.target.value)
    }
    const inputAmount = (event)=>{
        // console.log(event.target.value)
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault() //preventDefault ทำให้ฟอร์มค้างไม่รีเฟส
        //itemData เก็บข้อมูลจาก useState
        const itemData = {
             id:uuidv4(),
             title:title, //title ทางขวามาจาก useState
             amount:Number(amount) //amount ทางขวามาจาก useState
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    return(
        <>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text"  placeholder="ระบุชื่อรายการ" onChange={inputTtitle}  value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" >บันทึกรายการ</button>
                </div>
            </form>
        </>
    )
}
export default FormComponent