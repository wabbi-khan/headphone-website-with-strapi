import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
// import Search from "./Search/Search";
// import { Context } from "../../utils/context";
// import Cart from "../Cart/Cart";
const Header = () => {
  //nav bar sticky
  const [scrolled, setScrolled] = useState(false);
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
    <header className={`main-header ${scrolled ? "stickey-header" : ""}`}>
      <div className='header-content'>
        <ul className='left'>
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className='center'>DEVSTORE.</div>
        <div className='right'>
          <TbSearch /> <AiOutlineHeart />
          <span className='cart-icon'>
            <CgShoppingCart />
            <span>0</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
