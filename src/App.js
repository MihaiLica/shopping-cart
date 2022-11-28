import React, { useEffect, useState } from "react";
import "./App.css";
import Employees from "./components/Employees/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Weather from "./components/Weather/Weather";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import FirebaseLogin from "./components/Login/FirebaseLogin";
import NoPage from "./components/NoPage/NoPage";
import firebase from "./services/firebase";
import Cart from "./components/Cart/Cart";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  console.log(user);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Employees>
                  <Navbar />
                </Employees>
              ) : (
                <FirebaseLogin />
              )
            }
            exact={true}
          />
          <Route
            path="/Employees"
            element={
              user ? (
                <Employees>
                  <Navbar />
                </Employees>
              ) : (
                <FirebaseLogin />
              )
            }
            exact={true}
          />
          <Route
            path="/Products"
            element={
              user ? (
                <Products>
                  <Navbar />
                </Products>
              ) : (
                <FirebaseLogin />
              )
            }
            exact={true}
          />
          <Route
            path="/Weather"
            element={
              user ? (
                <Weather>
                  <Navbar />
                </Weather>
              ) : (
                <FirebaseLogin />
              )
            }
            exact={true}
          />
          <Route
            path="/Login"
            element={<FirebaseLogin></FirebaseLogin>}
            exact={true}
          />
          <Route
            path="/Cart"
            element={
              user ? (
                <Cart>
                  <Navbar />
                </Cart>
              ) : (
                <FirebaseLogin />
              )
            }
            exact={true}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
