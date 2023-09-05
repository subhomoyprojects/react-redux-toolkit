import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartAdd } from "./store/slice/cartSlice";

export default function Product() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        let url = `https://fakestoreapi.com/products`;
        let res = await fetch(url);
        let data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log(product);

  const handleAdd = (productId) => {
    dispatch(cartAdd(productId));
  };

  return (
    <main>
      <div className="container">
        <h1>Product</h1>
        <div className="items">
          {Array.isArray(product) &&
            product.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <div className="card">
                    <figure>
                      <img src={item.image} className="card-img-top" alt="..." />
                    </figure>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <h5 className="card-price">Price: ${item.price}</h5>
                      <p className="card-text">{item.description.slice(0, 80)}</p>
                      <button
                        type="button"
                        onClick={() => {
                          handleAdd(item);
                        }}
                        className="btn btn-info"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
