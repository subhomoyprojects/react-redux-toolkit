import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState([]);
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
                      <Link to="/" className="btn btn-info">
                        Go somewhere
                      </Link>
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
