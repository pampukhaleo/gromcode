import React from "react";

const ProductList = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(item => {
          return (
            <li className="products__list-item" key={item.id}>
              <span className="products__item-name">{item.name}</span>
              <span className="products__item-price">${item.price}</span>
            </li>
          )
        })}
      </ul>
      <div className="products__total">Total: ${totalPrice}</div>
    </div>
  )
}

export default ProductList