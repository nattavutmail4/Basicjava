
import TransactionComponent from "./components/TransactionComponent";
const  App = ()=>{
    const headTitle = {color:'red',textAlign:"center"}
    const Titlepop  = {color:"green",textAlign:"center",fontSize:"30px"}
    return(
      <>
        <div>
           <h1 style={headTitle}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
           <p  style={Titlepop}>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
           <TransactionComponent/>
        </div>
      </>
    );
}
export default App;
