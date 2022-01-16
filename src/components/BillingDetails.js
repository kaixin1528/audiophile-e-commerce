import Input from "./Input";
import PaymentMethod from "./PaymentMethod";
import cash from "../assets/cart/cash.svg";

const BillingDetails = ({ payment, onPayment }) => {
  return (
    <main className='grid d:col-span-3 gap-10 px-6 py-8 m-6 mb-0 t:px-10 t:mx-12 d:ml-40 d:mr-0 d:mb-32 bg-white rounded-lg'>
      <h2 className='text-2xl font-medium'>CHECKOUT</h2>
      <form className='grid gap-10'>
        <section className='grid gap-5'>
          <h4 className='font-medium text-moderate-orange'>BILLING DETAILS</h4>
          <section className='grid t:grid-cols-2 gap-5'>
            <Input input='Name' placeholder='Alexel Ward' />
            <Input input='Email Address' placeholder='alexel@mail.com' />
            <Input input='Phone Number' placeholder='+1 202-555-0136' />
          </section>
        </section>
        <section className='grid gap-5'>
          <h4 className='font-medium text-moderate-orange'>SHIPPING INFO</h4>
          <Input input='Your Address' placeholder='1137 Williams Avenue' />
          <section className='grid t:grid-cols-2 gap-5'>
            <Input input='ZIP Code' placeholder='10001' />
            <Input input='City' placeholder='New York' />
            <Input input='Country' placeholder='United States' />
          </section>
        </section>
        <section className='grid gap-5'>
          <h4 className='font-medium text-moderate-orange'>PAYMENT DETAILS</h4>
          <section className='grid t:grid-cols-2 gap-5'>
            <h5 className='font-medium text-sm'>Payment Method</h5>
            <section className='grid gap-5'>
              <PaymentMethod
                method='e-Money'
                payment={payment}
                onPayment={onPayment}
              />
              <PaymentMethod
                method='Cash on Delivery'
                payment={payment}
                onPayment={onPayment}
              />
            </section>
          </section>
        </section>
        {payment === "e-Money" && (
          <section className='grid t:grid-cols-2 gap-5'>
            <Input input='e-Money Number' placeholder='238521993' />
            <Input input='e-Money PIN' placeholder='6891' />
          </section>
        )}
      </form>
      {payment === "Cash on Delivery" && (
        <article className='grid justify-items-center t:grid-cols-8 t:items-center gap-3'>
          <img src={cash} alt='cash' />
          <p className='t:col-span-7 text-sm text-black text-opacity-50'>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </article>
      )}
    </main>
  );
};

export default BillingDetails;
