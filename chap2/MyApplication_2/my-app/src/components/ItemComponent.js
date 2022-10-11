const ItemComponent =(props)=>{
  return(
      <>
         <li >{props.name} <span>{props.amount}</span></li>
      </>
  )
}
export default ItemComponent