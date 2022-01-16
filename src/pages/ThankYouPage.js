import Footer from "../components/Footer";
import ReturnButton from "../components/ReturnButton";
import SpecifiedProductHeader from "../components/SpecifiedProductHeader";
import { useState } from "react";
import BillingDetails from "../components/BillingDetails";
import Summary from "../components/Summary";
import ScrollToTop from "../components/ScrollToTop";
import PaidConfirmation from "../components/PaidConfirmation";

const ThankYouPage = ({ onDropMenu, onOpenCart, cart, total, onRemoveAll }) => {
  const [payment, setPayment] = useState("e-Money");

  return (
    <main className='grid bg-rice-white relative min-h-screen'>
      <SpecifiedProductHeader onDropMenu={onDropMenu} onOpenCart={onOpenCart} />
      <ReturnButton category='' />
      <section className='grid d:grid-cols-5 items-start'>
        <BillingDetails payment={payment} onPayment={setPayment} />
        <Summary cart={cart} total={total} />
        <PaidConfirmation cart={cart} total={total} onRemoveAll={onRemoveAll} />
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ThankYouPage;
