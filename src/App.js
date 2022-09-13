import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is loggin", authUser);
      if (authUser) {
        //the user just logged in /the user was lagged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />

                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
              <>
                <Header />

                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />

                <Payment />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
  // Header
  // Home
}

export default App;
