import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>
        {cartCtx.items.map(item => (
          <li key={item.id} className={classes['cart-item']}>
            <div>
              <h2>{item.name}</h2>
              <div className={classes.summary}>
                <span className={classes.price}>${item.price}</span>
                <span className={classes.amount}>x {item.amount}</span>
              </div>
            </div>
            <div className={classes.actions}>
              <button onClick={() => removeHandler(item.id)}>−</button>
              <button onClick={() => addHandler(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
