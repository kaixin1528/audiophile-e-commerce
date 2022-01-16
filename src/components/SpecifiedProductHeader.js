import Header from "./Header";
const SpecifiedProductHeader = ({ onDropMenu, onOpenCart }) => {
  return (
    <main className='grid bg-black px-6 pt-10 t:px-12 d:px-40'>
      <Header onDropMenu={onDropMenu} onOpenCart={onOpenCart} />
    </main>
  );
};

export default SpecifiedProductHeader;
