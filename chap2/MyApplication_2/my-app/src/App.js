
import TransactionComponent from "./components/TransactionComponent";
import './App.css'
const  App = ()=>{
    const headTitle = {color:'red',textAlign:"center"}
    const Titlepop  = {color:"green",textAlign:"center",fontSize:"17px"}
    return(
      <>
        <div className="container">
           <h2 style={headTitle}>บัญชีรายรับ - รายจ่าย</h2>
           <p  style={Titlepop}>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
           <TransactionComponent/>
        </div>
      </>
    );
}
export default App;
