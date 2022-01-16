import Product from "../components/Product";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer";
import CategorizedProducts from "../components/CategorizedProducts";
import data from "../data";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import { motion } from "framer-motion";

const CategoryPage = ({
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
  category,
}) => {
  const products = data.filter((product) => product.category === category);

  return (
    <main className='grid relative min-h-screen font-manrope'>
      <section className='grid bg-black p-6 pt-10 t:px-12 d:px-40'>
        <Header onDropMenu={onDropMenu} onOpenCart={onOpenCart} />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          className='text-2xl tracking-widest text-white font-semibold text-center pt-10 pb-5'
        >
          {category.toUpperCase()}
        </motion.h2>
      </section>

      {/* Categorized Products */}
      <section className='grid px-6 py-16 pb-20 t:pb-24 t:px-12 d:px-40 gap-28'>
        {products.map((product) => {
          return <CategorizedProducts key={product.id} product={product} />;
        })}
      </section>

      {/* Categories */}
      <section className='grid px-6 pt-16 pb-24 text-sm gap-20 bg-white rounded-lg t:grid-cols-3 t:gap-5 t:px-12 d:px-40 d:pt-24'>
        <Product productNum={0} productName='HEADPHONES' />
        <Product productNum={1} productName='SPEAKERS' />
        <Product productNum={2} productName='EARPHONES' />
      </section>

      <BestGear />
      <Footer />
      {dropMenu && <Menu onDropMenu={onDropMenu} />}
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

export default CategoryPage;
