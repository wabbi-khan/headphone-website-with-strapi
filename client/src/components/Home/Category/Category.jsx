// import { useNavigate } from "react-router-dom";
import "./Category.scss";
// import cart1 from "../../../assets/category/cat-1.jpg";
const Category = ({ categories }) => {
  // console.log(categories);
  return (
    <div className='shop-by-category'>
      <div className='categories'>
        {categories?.data?.map((item) => (
          <div key={item.id} className='category'>
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt='category img'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
