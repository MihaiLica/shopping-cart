import uuid4 from "uuid4";

const INITIAL_PRODUCTS = [
  {
    id: uuid4(),
    name: "apa",
    price: 1,
    quantity: 10,
    description: "apa plata",
    image:
      "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
  },
  {
    id: uuid4(),
    name: "zahar",
    price: 3,
    quantity: 100,
    description: "zahar",
    image:
      "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
  },
  {
    id: uuid4(),
    name: "cola",
    price: 2,
    quantity: 55,
    description: "suc",
    image:
      "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
  },
  {
    id: uuid4(),
    name: "fanta",
    price: 2,
    quantity: 10,
    description: "suc",
    image:
      "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
  },
  {
    id: uuid4(),
    name: "sprite",
    price: 12,
    quantity: 90,
    description: "suc",
    image:
      "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
  },
  {
    id: uuid4(),
    name: "paine",
    price: 12,
    quantity: 90,
    description: "paine",
    image:
      "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
  },
  {
    id: uuid4(),
    name: "sprite",
    price: 12,
    quantity: 90,
    description: "suc",
    image:
      "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
  },
  {
    id: uuid4(),
    name: "sprite",
    price: 12,
    quantity: 90,
    description: "suc",
    image:
      "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
  },
];

const INITIAL_STATE = {
  products: INITIAL_PRODUCTS,
  counter: 0,
};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const copyProducts = [...state.products];
      copyProducts.push(action.value);
      return {
        ...state,
        products: copyProducts,
      };
    case "DELETE_PRODUCT":
    //
    default:
      return state;
  }
};

export default reducer;
