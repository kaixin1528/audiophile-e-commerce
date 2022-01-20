import { Link } from "react-router-dom";

const Summary = ({ cart, total }) => {
  return (
    <section className='grid d:col-span-2 gap-8 px-6 py-10 m-6 mt-10 mb-32 t:mx-12 d:mx-40 d:ml-10 d:mt-6 bg-white rounded-lg'>
      <h3 className='text-lg font-medium tracking-widest'>SUMMARY</h3>
      <ul className='grid gap-6'>
        {cart.map((product, index) => {
          return (
            <li key={index} className='grid grid-cols-4 items-center text-sm'>
              <div
                className={`bg-no-repeat bg-center bg-cover bg-${product.id} h-16 w-16 rounded-lg`}
              ></div>
              <section className='grid ml-2 col-span-2'>
                <h5 className='font-semibold'>{product.name}</h5>
                <h5 className='text-black text-opacity-50 font-semibold tracking-wider'>
                  $ {product.price}
                </h5>
              </section>
              <h5 className='self-start justify-self-end pt-3 text-black text-opacity-50 font-medium'>
                x{product.amount}
              </h5>
            </li>
          );
        })}
      </ul>
      <section className='grid gap-3 text-sm'>
        <section className='grid grid-cols-2'>
          <h5 className='text-black text-opacity-50 font-light'>TOTAL</h5>
          <h5 className='text-base justify-self-end font-medium tracking-widest'>
            $ {total}
          </h5>
        </section>
        <section className='grid grid-cols-2'>
          <h5 className='text-black text-opacity-50 font-light'>SHIPPING</h5>
          <h5 className='text-base justify-self-end font-medium tracking-wider'>
            $ 50
          </h5>
        </section>
        <section className='grid grid-cols-2'>
          <h5 className='text-black text-opacity-50 font-light'>
            VAT (INCLUDED)
          </h5>
          <h5 className='text-base justify-self-end font-medium tracking-wider'>
            $ {Math.round(total * 0.2)}
          </h5>
        </section>
      </section>
      <section className='grid grid-cols-2 text-sm'>
        <h5 className='text-black text-opacity-50 font-light'>GRAND TOTAL</h5>
        <h5 className='text-base justify-self-end text-moderate-orange font-medium tracking-wider'>
          $ {total + 50 + Math.round(total * 0.2)}
        </h5>
      </section>
      <Link to='/checkout/confirmation'>
        <button className='text-sm font-medium bg-moderate-orange hover:bg-opacity-50 text-white tracking-wider p-4 px-5 w-full'>
          CONTINUE &amp; PAY
        </button>
      </Link>
    </section>
  );
};

export default Summary;
