import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import CategoriesPage from "./pages/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYouPage from "./pages/ThankYouPage";
import { url } from "./lib/Constant";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [dropMenu, setDropMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleDropMenu = () => {
    setDropMenu(!dropMenu);
  };

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const handleAddtoCart = (id, product, quantity) => {
    const selectedProduct = cart.filter((item) => item.id === id);
    if (selectedProduct.length > 0) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + quantity } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: id,
          name: product.name.substring(0, product.name.lastIndexOf(" ")),
          price: product.price,
          amount: quantity,
        },
      ]);
    }
  };

  const handleTotal = (amount, quantity, price) => {
    if (amount === 1 && quantity * price < 0) return;
    else setTotal(total + quantity * price);
  };

  const handleRemoveItemAmount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  const handleAddItemAmount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleRemoveAll = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Homepage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
            />
          }
        ></Route>
        <Route
          path={`${url}/headphones`}
          element={
            <CategoriesPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
              category='headphones'
            />
          }
        ></Route>
        <Route
          path={`${url}/speakers`}
          element={
            <CategoriesPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
              category='speakers'
            />
          }
        ></Route>
        <Route
          path={`${url}/earphones`}
          element={
            <CategoriesPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
              category='earphones'
            />
          }
        ></Route>
        <Route
          path={`${url}/headphones/xx99-mark-two-headphones`}
          element={
            <ProductPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              onAddtoCart={handleAddtoCart}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
              productName='xx99-mark-two-headphones'
            />
          }
        ></Route>
        <Route
          path={`${url}/headphones/xx99-mark-one-headphones`}
          element={
            <ProductPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              onAddtoCart={handleAddtoCart}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
              productName='xx99-mark-one-headphones'
            />
          }
        ></Route>
        <Route
          path={`${url}/headphones/xx59-headphones`}
          element={
            <ProductPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              onAddtoCart={handleAddtoCart}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
              productName='xx59-headphones'
            />
          }
        ></Route>
        <Route
          path={`${url}/speakers/zx7-speaker`}
          element={
            <ProductPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              onAddtoCart={handleAddtoCart}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
              productName='zx7-speaker'
            />
          }
        ></Route>
        <Route
          path={`${url}/speakers/zx9-speaker`}
          element={
            <ProductPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              onAddtoCart={handleAddtoCart}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
              productName='zx9-speaker'
            />
          }
        ></Route>
        <Route
          path={`${url}/earphones/yx1-earphones`}
          element={
            <ProductPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
              onAddtoCart={handleAddtoCart}
              openCart={openCart}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onTotal={handleTotal}
              onRemoveItem={handleRemoveItemAmount}
              onAddItem={handleAddItemAmount}
              onRemoveAll={handleRemoveAll}
              productName='yx1-earphones'
            />
          }
        ></Route>
        <Route
          path={`${url}/checkout`}
          element={
            <CheckoutPage
              onDropMenu={handleDropMenu}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onRemoveAll={handleRemoveAll}
            />
          }
        ></Route>
        <Route
          path={`${url}/checkout/confirmation`}
          element={
            <ThankYouPage
              onDropMenu={handleDropMenu}
              onOpenCart={handleOpenCart}
              cart={cart}
              total={total}
              onRemoveAll={handleRemoveAll}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
