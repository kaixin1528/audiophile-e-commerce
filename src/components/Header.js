import menu from "../assets/header/menu.svg";
import logo from "../assets/header/logo.svg";
import cartImg from "../assets/header/cart.svg";
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
      <a href='/' className='justify-self-center d:justify-self-start'>
        <img src={logo} alt='audiophile logo' />
      </a>
      <nav className='lg:grid grid-flow-col auto-cols-max hidden text-sm text-white gap-10 pt-1'>
        <motion.a
          href='/'
          whileHover={{ scale: 1.1 }}
          className='hover:text-moderate-orange'
        >
          HOME
        </motion.a>
        <motion.a
          href='/headphones'
          whileHover={{ scale: 1.1 }}
          className='hover:text-moderate-orange'
        >
          HEADPHONES
        </motion.a>
        <motion.a
          href='/speakers'
          whileHover={{ scale: 1.1 }}
          className='hover:text-moderate-orange'
        >
          SPEAKERS
        </motion.a>
        <motion.a
          href='/earphones'
          whileHover={{ scale: 1.1 }}
          className='hover:text-moderate-orange'
        >
          EARPHONES
        </motion.a>
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
