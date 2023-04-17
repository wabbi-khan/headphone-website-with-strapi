import {
  useContext,
  useEffect,
  useState,
  // , useContext
} from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
const Header = () => {
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();
  //nav bar sticky
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <>
      <header className={`main-header ${scrolled ? "stickey-header" : ""}`}>
        <div className='header-content'>
          <ul className='left'>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className='center' onClick={() => navigate("/")}>
            DEVSTORE.
          </div>
          <div className='right'>
            <TbSearch onClick={() => setShowSearch(true)} /> <AiOutlineHeart />
            <span className='cart-icon' onClick={() => setShowCart(true)}>
              <CgShoppingCart />

              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
