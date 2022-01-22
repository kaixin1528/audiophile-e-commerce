const Gallery = ({ product }) => {
  return (
    <section className='grid t:grid-cols-9 t:grid-rows-2 gap-8'>
      <div
        className={`t:col-span-4 rounded-lg bg-no-repeat bg-center bg-cover bg-m-${product.slug}-gallery-1 t:bg-t-${product.slug}-gallery-1 d:bg-d-${product.slug}-gallery-1 h-96 t:h-full w-full`}
      ></div>
      <div
        className={`t:row-start-2 t:col-span-4 rounded-lg bg-no-repeat bg-center bg-cover bg-m-${product.slug}-gallery-2 t:bg-t-${product.slug}-gallery-2 d:bg-d-${product.slug}-gallery-2 h-96 t:h-40 d:h-72 w-full`}
      ></div>
      <div
        className={`t:col-span-5 t:row-end-3 t:row-span-2 rounded-lg bg-no-repeat bg-center bg-contain bg-m-${product.slug}-gallery-3 t:bg-t-${product.slug}-gallery-3 d:bg-d-${product.slug}-gallery-3 h-96 t:h-full w-full`}
      ></div>
    </section>
  );
};

export default Gallery;
