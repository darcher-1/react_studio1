import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const  [items, setItems] = useState([])
  const  [total, setTotal] = useState(0)
  function updateTotal(item, price){
    setItems([...items, item])
    setTotal(total + price)
  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} updateTotal={updateTotal}></BakeryItem> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        <p>{total}</p>
        <p>items in cart: {items}</p>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
