import headphone from "./../assets/cart/xx99-one.svg";
import speaker from "./../assets/cart/speaker.svg";
import earphone from "./../assets/cart/earphone.svg";
import arrow from "./../assets/cart/arrow.svg";
import shadow from "./../assets/cart/oval-shadow.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = ({ onDropMenu }) => {
  const products = [
    { src: headphone, link: "headphones", name: "HEADPHONES" },
    { src: speaker, link: "speakers", name: "SPEAKERS" },
    { src: earphone, link: "earphones", name: "EARPHONES" },
  ];

  const introVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  return (
    <motion.main
      initial={{ y: 100 }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 0.5, stiffness: 200 },
      }}
      exit={{
        y: 100,
        opacity: 0,
        transition: { type: "tween", duration: 0.2 },
      }}
      className='absolute inset-0 top-24 bg-gray-600 bg-opacity-50 d:hidden'
    >
      {/* Categories */}
      <motion.section
        variants={introVariants}
        initial='hidden'
        animate='visible'
        className='grid px-6 py-24 text-sm gap-20 bg-white rounded-lg t:grid-cols-3 t:gap-5 t:px-12 d:px-40 d:pt-24'
      >
        {[...Array(3)].map((e, i) => {
          return (
            <Link to={`/${products[i]["link"]}`} className='btn-product'>
              <motion.button variants={introVariants} onClick={onDropMenu}>
                <img
                  src={products[i]["src"]}
                  alt='category'
                  className={`-mt-20 mx-auto justify-self-center ${
                    i === 0 ? "transform -rotate-6" : ""
                  }`}
                  onClick={onDropMenu}
                />
                <section className='h-10'>
                  <img
                    src={shadow}
                    alt='shadow'
                    className='transform -translate-y-9'
                  />
                </section>
                <section className='grid justify-items-center gap-4'>
                  <h4 className='font-semibold tracking-wider'>
                    {products[i]["name"]}
                  </h4>
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
        })}
      </motion.section>
    </motion.main>
  );
};

export default Menu;
