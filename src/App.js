import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Checkout from "./Checkout/Checkout";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { authentication } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    authentication.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

return (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/checkout" element={<><Header /><Checkout /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<><Header /><Home /></>} />
      </Routes>
    </Router>
  </div>
);
}
export default App;