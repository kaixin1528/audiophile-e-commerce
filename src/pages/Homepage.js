import Header from "../components/Header";
import Product from "../components/Product";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import { url } from "../lib/Constant";

import bigSpeaker from "../assets/home/mobile/zx9-speaker.svg";
import desktopSpeaker from "../assets/home/desktop/image-speaker-zx9.png";

const Homepage = ({
  dropMenu,
  onDropMenu,
  openCart,
  onOpenCart,
  cart,
  total,
  onTotal,
  onRemoveItem,
  onAddItem,
  onRemoveAll,
}) => {
  const introVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 1 } },
  };

  return (
    <main className='grid gap-6 relative min-h-screen font-manrope'>
      <section className='grid bg-no-repeat bg-center bg-cover bg-m-header p-6 pt-10 t:bg-t-header d:bg-d-header t:px-12 d:px-40'>
        <Header onDropMenu={onDropMenu} onOpenCart={onOpenCart} />

        {/* Intro Description */}
        <motion.div
          variants={introVariants}
          initial='hidden'
          animate='visible'
          className='grid px-6 py-24 text-center d:text-left d:px-0 gap-6'
        >
          <motion.section variants={introVariants} className='grid gap-4'>
            <motion.h4
              variants={introVariants}
              className='text-white text-opacity-60 font-extralight'
            >
              N &nbsp; E &nbsp; W &nbsp;&nbsp;&nbsp;&nbsp; P &nbsp; R &nbsp; O
              &nbsp; D &nbsp; U &nbsp; C &nbsp; T
            </motion.h4>
            <motion.h1
              variants={introVariants}
              className='text-white text-4xl font-semibold t:text-5xl t:w-3/5 t:mx-auto d:w-2/5 d:mx-0 d:text-left'
            >
              XX99 MARK II HEADPHONES
            </motion.h1>
          </motion.section>
          <motion.p
            variants={introVariants}
            className='text-sm leading-6 text-white text-opacity-70 font-light w-5/6 mx-auto t:w-1/2 t:mx-auto d:w-1/3 d:ml-0 d:text-left'
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </motion.p>
          <motion.a
            href={`${url}/headphones/xx99-mark-two-headphones`}
            variants={introVariants}
            whileHover={{ scale: 1.05 }}
            className='text-sm font-semibold bg-moderate-orange text-white py-3 px-6 mx-auto d:ml-0'
          >
            SEE PRODUCT
          </motion.a>
        </motion.div>
      </section>

      {/* Categories */}
      <section className='grid px-6 pt-16 pb-24 text-sm gap-20 bg-white rounded-lg t:grid-cols-3 t:gap-5 t:px-12 d:px-40 d:pt-24'>
        <Product productNum={0} productName='HEADPHONES' />
        <Product productNum={1} productName='SPEAKERS' />
        <Product productNum={2} productName='EARPHONES' />
      </section>

      {/* ZX9 Speaker */}
      <motion.section className='grid d:grid-cols-2 justify-items-center overflow-hidden d:items-start mx-6 t:mx-12 d:mx-40 px-10 d:p-36 d:pb-0 p-20 gap-8 text-center bg-no-repeat bg-top d:bg-left bg-contain bg-circles rounded-lg bg-moderate-orange'>
        <img src={bigSpeaker} alt='big speaker' className='mx-auto d:hidden' />
        <img
          src={desktopSpeaker}
          alt='zx9 speaker'
          className='hidden d:inline -mb-3'
        />
        <section className='grid gap-8 justify-items-start d:py-10'>
          <h1 className='text-4xl text-white tracking-wider font-semibold w-4/5 mx-auto t:text-5xl t:w-1/2 t:mx-auto d:text-left d:ml-32'>
            ZX9 SPEAKER
          </h1>
          <p className='text-sm leading-7 text-white text-opacity-70 font-light t:w-1/2 t:mx-auto d:text-left d:ml-32 d:w-5/6'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <motion.a
            href={`${url}/speakers/zx9-speaker`}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className='text-sm font-semibold tracking-wider bg-black hover:bg-opacity-80 text-white p-5 px-8 t:px-10 mx-auto d:ml-32'
          >
            SEE PRODUCT
          </motion.a>
        </section>
      </motion.section>

      {/* ZX7 Speaker */}
      <section className='grid justify-items-start mx-6 t:mx-12 d:mx-40 py-32 gap-10 rounded-lg bg-no-repeat bg-center bg-cover bg-m-speaker t:bg-t-speaker d:bg-d-speaker'>
        <h2 className='text-3xl font-semibold d:font-bold tracking-wider pl-8 t:pl-12 d:pl-24'>
          ZX7 SPEAKER
        </h2>
        <motion.a
          href={`${url}/speakers/zx7-speaker`}
          whileHover={{
            scale: 1.05,
            backgroundColor: "black",
            color: "white",
            transition: { duration: 0.3 },
          }}
          className='text-sm ml-8 font-semibold d:font-bold tracking-wider p-3 px-8 ring-1 ring-black t:ml-12 d:ml-24'
        >
          SEE PRODUCT
        </motion.a>
      </section>

      {/* YX1 Earphone */}
      <section className='grid gap-6 mx-6 t:mx-12 d:mx-40 t:grid-cols-2 t:gap-4 t:mb-12'>
        <div className='justify-self-center rounded-lg bg-no-repeat bg-center bg-cover bg-m-earphone t:bg-t-earphone d:bg-d-earphone h-96 w-full'></div>
        <section className='grid justify-items-start px-8 py-16 t:py-32 d:px-20 mb-24 t:mb-0 gap-10 rounded-lg bg-light-gray'>
          <h2 className='text-3xl font-semibold tracking-wider'>
            YX1 EARPHONES
          </h2>
          <motion.a
            href={`${url}/earphones/yx1-earphones`}
            whileHover={{
              scale: 1.05,
              backgroundColor: "black",
              color: "white",
              transition: { duration: 0.3 },
            }}
            className='font-semibold tracking-wider p-3 px-8 text-sm ring-1 ring-black'
          >
            SEE PRODUCT
          </motion.a>
        </section>
      </section>

      <BestGear />
      <Footer />
      <AnimatePresence>
        {dropMenu && <Menu onDropMenu={onDropMenu} />}
      </AnimatePresence>
      {openCart && (
        <Cart
          cart={cart}
          onRemoveAll={onRemoveAll}
          onRemoveItem={onRemoveItem}
          onAddItem={onAddItem}
          onTotal={onTotal}
          total={total}
          onOpenCart={onOpenCart}
        />
      )}
      <ScrollToTop />
    </main>
  );
};

export default Homepage;
