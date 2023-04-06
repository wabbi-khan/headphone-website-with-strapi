import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Search = ({ setShowSearch }) => {
  return (
    <div className='search-modal'>
      <div className='form-field'>
        <input
          autoFocus
          type='text'
          placeholder='Search for products'
          // value={query}
          // onChange={onChange}
        />
        <MdClose className='close-btn' onClick={() => setShowSearch(false)} />
      </div>
      <div className='search-result-content'>
        {/* {!data?.data?.length && ( */}
        <div className='start-msg'>
          Start typing to see products you are looking for.
        </div>
        {/* )} */}
        <div className='search-results'>
          {/* {data?.data?.map((item) => ( */}
          <div
            className='search-result-item'
            // key={item.id}
            // onClick={() => {
            //     navigate("/product/" + item.id);
            //     setSearchModal(false);
            // }}
          >
            <div className='image-container'>
              <img src={prod} alt='search item img' />
            </div>
            <div className='prod-details'>
              <span className='name'>
                Product name {/* {item.attributes.title} */}
              </span>
              <span className='desc'>
                Product des
                {/* {item.attributes.description} */}
              </span>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Search;
