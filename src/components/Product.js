import headphone from "./../assets/cart/xx99-one.svg";
import speaker from "./../assets/cart/speaker.svg";
import earphone from "./../assets/cart/earphone.svg";
import arrow from "./../assets/cart/arrow.svg";
import shadow from "./../assets/cart/oval-shadow.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Product = ({ productNum, productName }) => {
  const products = [
    { src: headphone, link: "headphones" },
    { src: speaker, link: "speakers" },
    { src: earphone, link: "earphones" },
  ];

  return (
    <Link to={`/${products[productNum]["link"]}`} className='btn-product'>
      <motion.button>
        <img
          src={products[productNum]["src"]}
          alt='product'
          className={`-mt-20 mx-auto justify-self-center ${
            productNum === 0 ? "transform -rotate-6" : "transform -rotate-1"
          }`}
        />
        <section className='h-10'>
          <img src={shadow} alt='shadow' className='transform -translate-y-9' />
        </section>
        <section className='grid justify-items-center gap-4'>
          <p className='font-semibold tracking-wider'>{productName}</p>
          <section className='grid grid-flow-col auto-cols-max gap-3'>
            <h5 className='text-sm text-black text-opacity-50 font-medium group-hover:text-moderate-orange'>
              SHOP
            </h5>
            <img src={arrow} alt='arrow' className='pt-1' />
          </section>
        </section>
      </motion.button>
    </Link>
  );
};

export default Product;
