import Header from "./Header";
const SpecifiedProductHeader = ({ onDropMenu, onOpenCart }) => {
  return (
    <section className='grid bg-black px-6 pt-10 t:px-12 d:px-40'>
      <Header onDropMenu={onDropMenu} onOpenCart={onOpenCart} />
    </section>
  );
};

export default SpecifiedProductHeader;
