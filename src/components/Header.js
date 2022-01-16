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
        <button className=''>
          <img src={logo} alt='logo' />
        </button>
      </Link>
      <nav className='lg:grid grid-flow-col auto-cols-max hidden text-sm text-white gap-10 pt-1'>
        <Link to='/'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className='hover:text-moderate-orange'
          >
            HOME
          </motion.button>
        </Link>
        <Link to='/headphones'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className='hover:text-moderate-orange'
          >
            HEADPHONES
          </motion.button>
        </Link>
        <Link to='/speakers'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className='hover:text-moderate-orange'
          >
            SPEAKERS
          </motion.button>
        </Link>
        <Link to='/earphones'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className='hover:text-moderate-orange'
          >
            EARPHONES
          </motion.button>
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
