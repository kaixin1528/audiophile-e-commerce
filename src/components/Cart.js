const Cart = ({
  cart,
  onRemoveAll,
  onRemoveItem,
  onAddItem,
  onTotal,
  total,
  onOpenCart,
}) => {
  return (
    <div className='absolute inset-0 top-24 px-6 t:px-20 d:px-40 bg-gray-600 bg-opacity-50'>
      <section className='grid t:absolute t:right-20 d:right-40 mt-10 bg-white p-6 rounded-lg gap-10 t:w-96 d:w-1/4'>
        <header className='grid grid-cols-2'>
          <h3 className='text-lg tracking-wider font-semibold'>
            CART ({cart.length})
          </h3>
          <button
            className='text-black text-opacity-40 hover:text-moderate-orange underline justify-self-end'
            onClick={onRemoveAll}
          >
            Remove all
          </button>
        </header>
        <ul className='grid gap-6 text-sm max-h-60 overflow-y-scroll'>
          {cart.map((product) => {
            return (
              <li className='grid grid-cols-3 items-center'>
                <div
                  className={`bg-no-repeat bg-center bg-cover bg-${product.id} h-16 w-16 rounded-lg`}
                ></div>
                <section className='grid gap-1 -ml-4'>
                  <h4 className='font-semibold tracking-wider'>
                    {product.name}
                  </h4>
                  <h4 className='text-black text-opacity-50 font-semibold'>
                    $ {product.price}
                  </h4>
                </section>
                <section className='grid grid-cols-3 justify-items-center bg-light-gray'>
                  <button
                    id={product.id}
                    className='h-10 w-full text-black text-opacity-50 hover:text-moderate-orange'
                    onClick={(e) => {
                      onRemoveItem(e.currentTarget.id);
                      onTotal(product.amount, -1, product.price);
                    }}
                  >
                    -
                  </button>
                  <h4 className='self-center'>{product.amount}</h4>
                  <button
                    id={product.id}
                    className='h-10 w-full text-black text-opacity-50 hover:text-moderate-orange'
                    onClick={(e) => {
                      onAddItem(e.currentTarget.id);
                      onTotal(product.amount, 1, product.price);
                    }}
                  >
                    +
                  </button>
                </section>
              </li>
            );
          })}
        </ul>
        <section className='grid grid-cols-2'>
          <h4 className='font-light text-black text-opacity-50'>TOTAL</h4>
          <h3 className='text-lg font-semibold justify-self-end'>$ {total}</h3>
        </section>
        <a
          href='/checkout'
          className='text-sm bg-moderate-orange hover:bg-opacity-50 font-semibold text-white tracking-wider text-center py-3 w-full'
          onClick={onOpenCart}
        >
          CHECKOUT
        </a>
      </section>
    </div>
  );
};

export default Cart;
