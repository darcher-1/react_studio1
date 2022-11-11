// TODO: create a component that displays a single bakery item
function BakeryItem({item, updateTotal}){
    return(
        <div>
        <img src={item.image}/> 
        <button onClick={() => updateTotal(item.name, item.price)}>add to cart</button>
        </div>
    )
}
export default BakeryItem