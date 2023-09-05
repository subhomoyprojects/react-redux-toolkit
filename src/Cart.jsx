import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartRemove } from "./store/slice/cartSlice";

export default function Cart() {
  const selector = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handelDelete = (itemId) => {
    dispatch(cartRemove(itemId));
  };
  return (
    <main>
      <div className="container">
        <h1>Cart</h1>
        {selector.length > 0 ? (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(selector) &&
                  selector.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="pro-holder">
                          <figure className="pro-img">
                            <img src={item.image} alt="" />
                          </figure>
                          <div className="description">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <div className="btn-holder">
                          <button type="button" className="btn btn-info">
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              handelDelete(item.id);
                            }}
                            className="btn btn-warning"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="noData">No Data Available</div>
        )}
      </div>
    </main>
  );
}
