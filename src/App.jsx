import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
