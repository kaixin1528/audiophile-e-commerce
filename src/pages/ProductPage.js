import Product from "../components/Product";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer";
import data from "../data";

import SpecifiedProductHeader from "../components/SpecifiedProductHeader";
import ReturnButton from "../components/ReturnButton";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import ScrollToTop from "../components/ScrollToTop";
import ProductDescription from "../components/ProductDescription";
import FeaturesAndInBox from "../components/FeaturesAndInBox";
import Gallery from "../components/Gallery";
import Recommend from "../components/Recommend";

const ProductPage = ({
  dropMenu,
  onDropMenu,
  productName,
  onAddtoCart,
  openCart,
  onOpenCart,
  cart,
  total,
  onTotal,
  onRemoveItem,
  onAddItem,
  onRemoveAll,
}) => {
  const specifiedProduct = data.filter(
    (product) => product.slug === productName
  );

  const category = specifiedProduct.map((product) => product.category)[0];

  return (
    <main className='grid relative min-h-screen font-manrope'>
      <SpecifiedProductHeader onDropMenu={onDropMenu} onOpenCart={onOpenCart} />
      <ReturnButton category={category} />

      {/* Product Info */}
      <ul className='grid px-6 py-10 pb-24 t:pb-32 t:px-12 d:px-40 gap-20'>
        {specifiedProduct.map((product) => {
          return (
            <li key={product.id} className='grid text-center gap-28'>
              <ProductDescription
                product={product}
                onAddtoCart={onAddtoCart}
                onTotal={onTotal}
              />
              <FeaturesAndInBox product={product} />
              <Gallery product={product} />
              <Recommend product={product} />
            </li>
          );
        })}
      </ul>

      {/* Categories */}
      <section className='grid px-6 pb-24 text-sm gap-20 bg-white rounded-lg t:grid-cols-3 t:gap-5 t:px-12 d:px-40 d:pt-24'>
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

export default ProductPage;
