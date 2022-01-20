import { Link } from "react-router-dom";

const CategorizedProducts = ({ key, product }) => {
  return (
    <section
      key={key}
      className='grid d:grid-cols-2 d:items-center text-center gap-8 d:gap-5 d:flex d:even:flex-row-reverse'
    >
      <div
        className={`d:grid bg-light-gray rounded-lg bg-no-repeat bg-center bg-cover bg-m-${product.slug}-preview t:bg-t-${product.slug}-preview d:bg-d-${product.slug}-preview h-96 d:bg-contain w-full`}
      ></div>
      <section className='grid gap-6'>
        {product.new && (
          <h4 className='text-moderate-orange font-light d:text-left d:pl-20'>
            N &nbsp; E &nbsp; W &nbsp;&nbsp;&nbsp;&nbsp; P &nbsp; R &nbsp; O
            &nbsp; D &nbsp; U &nbsp; C &nbsp; T
          </h4>
        )}
        <h2 className='text-2xl font-semibold tracking-wider w-4/6 mx-auto t:w-1/2 t:mx-auto t:text-4xl d:w-1/2 d:mx-20 d:text-left'>
          {product.name.toUpperCase()}
        </h2>
        <p className='leading-7 text-black text-opacity-50 font-light px-4 t:w-4/5 t:mx-auto d:w-3/5 d:text-left d:mx-20 d:px-0'>
          {product.description}
        </p>
        <Link
          to={`${product.slug}`}
          className='bg-moderate-orange hover:bg-opacity-70 text-white mx-auto py-3 px-7 d:ml-20'
        >
          <button className='text-sm font-semibold'>SEE PRODUCT</button>
        </Link>
      </section>
    </section>
  );
};

export default CategorizedProducts;
