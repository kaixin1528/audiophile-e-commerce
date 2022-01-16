import { Link } from "react-router-dom";
import check from "../assets/cart/check.svg";

const PaidConfirmation = ({ cart, total, onRemoveAll }) => {
  return (
    <main className='absolute inset-0 py-40 px-6 bg-gray-900 bg-opacity-50'>
      <section className='grid p-7 py-10 gap-6 t:w-3/5 t:mx-auto d:w-2/5 d:mx-auto bg-white rounded-lg'>
        <section className='grid h-16 w-16 rounded-full bg-moderate-orange'>
          <img src={check} alt='check' className='place-self-center' />
        </section>
        <h2 className='text-2xl w-5/6 font-medium'>THANK YOU FOR YOUR ORDER</h2>
        <p className=' text-black text-opacity-50'>
          You will receive an email confirmation shortly.
        </p>
        <section className='grid t:grid-cols-2 text-sm'>
          {cart.length > 0 && (
            <section className='grid sectionide-y sectionide-gray-300 gap-4 p-5 bg-light-gray rounded-t-lg t:rounded-t-none t:rounded-l-lg'>
              <section className='grid grid-cols-4 items-center justify-items-center'>
                <section
                  className={`bg-no-repeat bg-center bg-cover bg-${cart[0].id} h-12 w-12 rounded-lg`}
                ></section>
                <section className='grid t:ml-4 col-span-2 text-left'>
                  <h4 className='font-semibold'>{cart[0].name}</h4>
                  <h4 className='text-black text-opacity-50 font-semibold'>
                    $ {cart[0].price}
                  </h4>
                </section>
                <h4 className='self-start justify-self-end t:justify-self-center pt-1 text-black text-opacity-50 font-medium'>
                  x{cart[0].amount}
                </h4>
              </section>
              <h4 className='text-xs text-black text-opacity-50 font-medium pt-5 text-center'>
                and {cart.length - 1} other item(s)
              </h4>
            </section>
          )}
          <section className='grid p-6 gap-3 bg-black rounded-b-lg t:rounded-bl-none t:rounded-r-lg'>
            <h4 className='font-light text-white text-opacity-60'>
              GRAND TOTAL
            </h4>
            <h3 className='text-lg text-white font-medium'>$ {total}</h3>
          </section>
        </section>
        <Link to='/'>
          <button
            className='text-sm bg-moderate-orange hover:bg-opacity-50 text-white tracking-wider py-4 w-full'
            onClick={() => {
              onRemoveAll();
            }}
          >
            BACK TO HOME
          </button>
        </Link>
      </section>
    </main>
  );
};

export default PaidConfirmation;
