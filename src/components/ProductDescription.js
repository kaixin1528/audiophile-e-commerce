import { useState } from "react";

const ProductDescription = ({ product, onAddtoCart, onTotal }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDeleteQuantity = () => {
    if (quantity === 1) return;
    else setQuantity(quantity - 1);
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className='grid t:grid-cols-2 gap-10 items-center'>
      <div
        className={`d:grid bg-light-gray rounded-lg bg-no-repeat bg-center bg-contain bg-m-${product.slug} t:bg-t-${product.slug} d:bg-d-${product.slug} h-96 w-full`}
      ></div>
      <section className='grid gap-7 justify-items-start'>
        {product.new && (
          <h4 className='text-moderate-orange font-light text-left d:pl-20'>
            N &nbsp; E &nbsp; W &nbsp;&nbsp;&nbsp;&nbsp; P &nbsp; R &nbsp; O
            &nbsp; D &nbsp; U &nbsp; C &nbsp; T
          </h4>
        )}
        <h2 className='text-2xl font-semibold tracking-wider text-left w-3/5 d:w-3/5 d:mx-20'>
          {product.name.toUpperCase()}
        </h2>
        <p className='leading-7 text-black text-opacity-50 font-light text-left d:mx-20'>
          {product.description}
        </p>
        <p className='font-semibold text-xl tracking-widest d:ml-20'>
          ${" "}
          {product.price.toString().length === 4
            ? product.price.toString().slice(0, 1) +
              "," +
              product.price.toString().slice(1, 5)
            : product.price.toString()}
        </p>
        <section className='grid grid-cols-2 gap-4 d:ml-20'>
          <section className='grid grid-cols-3 justify-items-center items-center bg-light-gray'>
            <button
              className='h-12 w-full text-black text-opacity-50 hover:text-moderate-orange'
              onClick={() => handleDeleteQuantity()}
            >
              -
            </button>
            <p className='self-center'>{quantity}</p>
            <button
              className='h-12 w-full text-black text-opacity-50 hover:text-moderate-orange'
              onClick={() => handleAddQuantity()}
            >
              +
            </button>
          </section>

          <button
            id={product.slug}
            className='bg-moderate-orange hover:bg-opacity-70 text-white text-sm font-semibold mx-auto py-2 px-8 t:px-6'
            onClick={(e) => {
              onAddtoCart(e.currentTarget.id, product, quantity);
              onTotal(product.amount, quantity, product.price);
            }}
          >
            ADD TO CART
          </button>
        </section>
      </section>
    </section>
  );
};

export default ProductDescription;
