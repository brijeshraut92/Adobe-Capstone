import React from 'react';
import { useContext } from 'react';
import CartContext from '../../redux/cart-context';

export default function CartItemForm(props) {
    const cartCtx = useContext(CartContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = document.getElementById("amount").value;
        console.log(enteredAmount,"Entered Amount");
        cartCtx.addItem({
            id: props.id,
            amount: enteredAmount, // Qty
            price: props.price
        });
        {cartCtx.items.map((item) => (
        console.log(item.id,"Entered id")
        ))}
    }
  return (
    <form onSubmit={submitHandler}>
        <div class="cart-form-input">
            <label for="amount">Amount</label>
            <input id="amount" type="number" min="1" max="5" step="1"  />
            
        </div>
        <button>+ Add</button>
    </form>
  )
}
