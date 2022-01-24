import menu from "../assets/header/menu.svg";
import logo from "../assets/header/logo.svg";
import cartImg from "../assets/header/cart.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ({ onDropMenu, onOpenCart }) => {
  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 5, stiffness: 120 },
      }}
      className='grid grid-cols-3 pb-8 border-b border-gray-500 border-opacity-30'
    >
      <button
        className='lg:hidden z-10 transition duration-100 ease-out origin-top-left transform hover:scale-110'
        onClick={onDropMenu}
      >
        <img src={menu} alt='menu' />
      </button>
      <Link to='/' className='justify-self-center d:justify-self-start'>
        <div>
          <img src={logo} alt='logo' />
        </div>
      </Link>
      <nav className='lg:grid grid-flow-col auto-cols-max hidden text-sm text-white gap-10 pt-1'>
        <Link to='/'>
          <motion.h4
            whileHover={{ scale: 1.1 }}
            className='hover:text-moderate-orange'
          >
            HOME
          </motion.h4>
        </Link>
        <Link to='/headphones'>
          <motion.h4
            whileHover={{ scale: 1.1 }}
            className='hover:text-moderate-orange'
          >
            HEADPHONES
          </motion.h4>
        </Link>
        <Link to='/speakers'>
          <motion.h4
            whileHover={{ scale: 1.1 }}
            className='hover:text-moderate-orange'
          >
            SPEAKERS
          </motion.h4>
        </Link>
        <Link to='/earphones'>
          <motion.h4
            whileHover={{ scale: 1.1 }}
            className='hover:text-moderate-orange'
          >
            EARPHONES
          </motion.h4>
        </Link>
      </nav>
      <button
        className='justify-self-end z-10 transition duration-100 ease-out origin-top-right transform hover:scale-110'
        onClick={onOpenCart}
      >
        <img src={cartImg} alt='cart' />
      </button>
    </motion.header>
  );
};

export default Header;
