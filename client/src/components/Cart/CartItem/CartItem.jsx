import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const CartItem = () => {
  return (
    <div className='cart-products'>
      {/* {cartItems?.map((item) => ( */}
      <div
        className='cart-product'
        // key={item.id} onClick={() => {}}
      >
        <div className='image-container'>
          <img src={prod} alt='cart item img' />
        </div>
        <div className='prod-details'>
          <span className='name'>
            {" "}
            Product name {/* {item.attributes.title} */}
          </span>
          <MdClose
            className='close-btn'
            //   onClick={() => handleRemoveFromCart(item)}
          />
          <div className='quantity-buttons'>
            <span
            // onClick={() =>
            //     handleCartProductQuantity("dec", item)
            // }
            >
              -
            </span>
            <span>4{/* {item.attributes.quantity} */}</span>
            <span
            // onClick={() =>
            //     handleCartProductQuantity("inc", item)
            // }
            >
              +
            </span>
          </div>
          <div className='text'>
            <span>2{/* {item.attributes.quantity} */}</span>
            <span>x</span>
            <span className='highlight'>
              <span>$ 400</span>
              {/* {item.attributes.price * item.attributes.quantity} */}
            </span>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default CartItem;
