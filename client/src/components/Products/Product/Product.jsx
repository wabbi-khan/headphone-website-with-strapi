import "./Product.scss";
import product from "../../../assets/products/earbuds-prod-1.webp";
const Product = ({ id, data }) => {
  return (
    <div className='product-card'>
      <div className='thumbnail'>
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
          alt='product thumbnail'
        />
      </div>
      <div className='prod-details'>
        <span className='name'>{data.title}</span>
        <span className='price'> ${data.price}</span>
      </div>
    </div>
  );
};

export default Product;
