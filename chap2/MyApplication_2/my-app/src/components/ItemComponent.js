import './item.css'
const ItemComponent = ()=>{
    const name = "พักโรงแรม"
    const price = 500
    return(
        <>
            <li className='item'>{name} - {price}</li>
            <li className='item'>{name} - {price}</li>
            <li className='item'>{name} - {price}</li>
            <li className='item'>{name} - {price}</li>
            <li className='item'>{name} - {price}</li>
            <li className='item'>{name} - {price}</li>
        </>
    )
}
export default ItemComponent