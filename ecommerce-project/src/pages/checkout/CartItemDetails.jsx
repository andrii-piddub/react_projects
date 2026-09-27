import axios from 'axios'
import { Fragment } from 'react'
import { useState } from 'react';
import { formatMoney } from '../../utils/money'
export function CartItemDetails({ cartItem, loadCart }) {
  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }
  const [updated, setUpdated] = useState(false);
  const updateQuantity = async () => {
    if (!updated) {
      setUpdated(true);
      return;
    }

      await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity
          });
        await loadCart();
        setUpdated(false);
      };
    
    const [quantity, setQuantity] = useState(cartItem.quantity)
    return (
      <Fragment>
        <img className="product-image"
          src={cartItem.product.image} />
        <div className="cart-item-details">
          <div className="product-name">
            {cartItem.product.name}
          </div>
          <div className="product-price">
            {formatMoney(cartItem.product.priceCents)}
          </div>
          <div className="product-quantity">
            <span>
              <input
                className='input-quantity'
                type="text"
                value={quantity}
                onChange={(event) => {
                  setQuantity(Number(event.target.value))
                }}
                onKeyDown={(event)=>{
                  if (event.key==='Enter'){
                    updateQuantity()
                  }
                  if (event.key==='Escape'){
                    setUpdated(false);
                    setQuantity(cartItem.quantity)
                  }
                }}
                style={{ opacity: !updated ? 0 : 1 }} />
              Quantity: <span className="quantity-label" style={{ opacity: updated ? 0 : 1 }}>{cartItem.quantity}</span>
            </span>
            <span className="update-quantity-link link-primary" onClick={updateQuantity}>
              Update
            </span>
            <span className="delete-quantity-link link-primary"
              onClick={deleteCartItem}>
              Delete
            </span>
          </div>
        </div>
      </Fragment>
    )
  }