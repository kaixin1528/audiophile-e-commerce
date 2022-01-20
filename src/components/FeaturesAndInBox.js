const FeaturesAndInBox = ({ product }) => {
  return (
    <section className='grid d:grid-cols-7 d:items-start gap-28 d:gap-0'>
      <section className='grid d:col-span-4 justify-items-start text-left gap-5'>
        <h2 className='text-2xl font-semibold tracking-wider'>FEATURES</h2>
        {product.features.split("\n\n").map((paragraph, index) => {
          return (
            <p
              key={index}
              className='leading-7 font-light text-black text-opacity-60'
            >
              {paragraph}
            </p>
          );
        })}
      </section>
      <section className='grid t:grid-cols-2 d:grid-cols-1 d:col-span-3 d:justify-self-center justify-items-start gap-5'>
        <h2 className='text-2xl font-semibold'>IN THE BOX</h2>
        <ul className='grid text-lg gap-2'>
          {product.includes.map((include, index) => {
            return (
              <li
                key={index}
                className='grid grid-flow-col auto-cols-max gap-5'
              >
                <h4 className='text-moderate-orange font-medium'>
                  {include.quantity}x
                </h4>
                <h4 className='text-black text-opacity-50 font-light'>
                  {include.item}
                </h4>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default FeaturesAndInBox;
