import { useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import uuid4 from "uuid4";
import { connect, useDispatch } from "react-redux";
import { addProduct } from "../../store/action";

const Products = (props) => {
  const dispatch = useDispatch();

  console.log(props.products);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [description, setDescription] = useState("");

  function handleEnable() {
    return name && description && quantity && price;
  }

  const handleClick = () => {
    const product = {
      id: uuid4(),
      name: name,
      price: price,
      quantity: quantity,
      description: description,
      image:
        "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp",
    };

    dispatch(addProduct(product));

    reset();
  };

  const reset = () => {
    setName("");
    setPrice("");
    setQuantity("");
    setDescription("");
  };

  // function addProductToCart(id) {
  //   const filteredProducts = products.filter((product) => product.id !== id);
  //   setProducts(filteredProducts);
  // }

  return (
    <>
      <div>
        {" "}
        {props.children}
        <ul className="items">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {props.products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                image={product.image}
                //deleteProduct={() => handleDelete(product.id)}
              />
            ))}
          </Grid>
        </ul>
        <br />
        <div style={{ marginLeft: 40 }}>
          <h4>Add Product</h4>
          <div className="container">
            <div className="textContainer">
              <TextField
                required
                error={!name}
                id="outlined-required"
                label="Name"
                defaultValue=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!name && <p className="red">Name is required</p>}
            </div>
            <div className="textContainer">
              <TextField
                required
                error={!description}
                id="outlined-required"
                label="Description"
                defaultValue=""
                sx={{ marginLeft: 5 }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {!description && <p className="red">Description is required</p>}
            </div>
            <div className="textContainer">
              <TextField
                required
                id="filled-number"
                error={!price}
                label="Price"
                type="number"
                sx={{ marginLeft: 5 }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {!price && <p className="red">Price is required</p>}
            </div>
            <div className="textContainer">
              <TextField
                required
                error={!quantity}
                id="filled-number"
                label="Quantity"
                type="number"
                sx={{ marginLeft: 5 }}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              {!quantity && <p className="red">Quantity is required</p>}
            </div>
            <Button
              variant="contained"
              sx={{ marginLeft: 5 }}
              disabled={!handleEnable()}
              onClick={handleClick}
            >
              Add product
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = function (state) {
  return {
    products: state.products,
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Products); //higher order component / function
