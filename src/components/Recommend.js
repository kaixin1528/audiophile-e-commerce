import { Link } from "react-router-dom";

const Recommend = ({ product }) => {
  return (
    <main className='grid text-center gap-10'>
      <h2 className='text-2xl font-semibold tracking-wider'>
        YOU MAY ALSO LIKE
      </h2>
      <section className='grid t:grid-cols-3 gap-20 t:gap-5'>
        {product.others.map((other, index) => {
          return (
            <section key={index} className='grid gap-8'>
              <section
                className={`d:grid bg-light-gray rounded-lg bg-no-repeat bg-center bg-contain bg-m-${other.slug}-others t:bg-t-${other.slug}-others d:bg-d-${other.slug}-others h-40 w-full`}
              ></section>
              <h2 className='text-2xl font-semibold tracking-wider'>
                {other.name.toUpperCase()}
              </h2>
              <Link
                to={`/${other.category}/${other.slug}`}
                className='bg-moderate-orange hover:bg-opacity-70 text-white mx-auto py-4 px-8'
              >
                <button className='text-sm font-semibold tracking-wider'>
                  SEE PRODUCT
                </button>
              </Link>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default Recommend;
