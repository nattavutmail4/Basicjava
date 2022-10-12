  const ItemComponent =(props)=>{
    return(
        <>
           <li >{props.name} <span>{props.amount}</span></li>
        </>
    )
  }
export default ItemComponent

// const ItemComponent =()=>{
//   const list_item = [
//             {id: 1, name: 'ค่าโรงพยาบาล', price: 1000},
//             {id: 2, name: 'ค่าเดินทาง', price: 150},
//             {id: 3, name: 'ค่าอาหาร', price: 100},
//             {id: 4, name: 'ค่าโรงแรม', price: 300},
//             {id: 5, name: 'ค่าน้ำ', price: 50},
//             {id: 6, name: 'ค่ายาสีฟัน', price: 50},
//         ];
//   return(
//       <>
//           {list_item.map(({id,name,price})=>{
//               return(
//                  <li key={id}>{name} <span>-{price}</span></li>
//               )
//            })}
//       </>
//   )
// }
// export default ItemComponent