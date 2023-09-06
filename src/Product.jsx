import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd } from "./store/slice/cartSlice";
import { STATUSES, fetchProducts } from "./store/slice/productSlice";

export default function Product() {
  const { data: product, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (productId) => {
    dispatch(cartAdd(productId));
  };

  if (status === STATUSES.LOADING) {
    return (
      <main>
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  } else if (status === STATUSES.SUCCESS) {
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
  } else {
    return (
      <main>
        <div className="container">
          <h1>Something went wrong!</h1>
        </div>
      </main>
    );
  }
}
