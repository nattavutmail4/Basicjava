import ItemComponent from "./ItemComponent"
import '../assets/css/Transaction.css'
const TransactionComponent =()=>{
    return(
        <>
           <ul  className="item-list">
             {/* <ItemComponent/> */}
             <ItemComponent name="ค่ารักษาพยาบาล" amount="2000"/>
             <ItemComponent name="ค่ารถยนตร์" amount="5000"/>
             <ItemComponent name="ค่าไฟ" amount="2000"/>
             <ItemComponent name="ค่าน้ำ" amount="300"/>
           </ul>
        </>
    )
}
export default TransactionComponent