import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Header from "./Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
