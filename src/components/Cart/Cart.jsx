import { useState } from "react";
import uuid4 from "uuid4";

function Cart(props) {
  const [cartProducts, setCartProducts] = useState([
    {
      id: uuid4(),
      name: "sprite",
      price: 12,
      quantity: 90,
      description: "suc",
      image:
        "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
    },
  ]);

  return (
    <div>
      {props.children}
      <ul>
        {cartProducts.map((cartProduct) => (
          <li>
            {cartProduct.name} - {cartProduct.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
