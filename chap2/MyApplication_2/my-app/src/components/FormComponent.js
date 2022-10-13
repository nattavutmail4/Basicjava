const FormComponent = ()=>{
    return(
        <>
            <form>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" />
                </div>
                <div className="form-control">
                    <lab>จำนวนเงิน</lab>
                    <input type="number" placeholder="ระบุจำนวนเงิน"/>
                </div>
                <div>
                    <button type="submit">บันทึกรายการ</button>
                </div>
            </form>
        </>
    )
}

export default FormComponent