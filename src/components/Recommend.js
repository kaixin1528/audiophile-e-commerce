<<<<<<< HEAD
import { motion } from "framer-motion";
import { url } from "../lib/Constant";
=======
import { Link } from "react-router-dom";
>>>>>>> parent of 92ab309 (improved accessibility)

const Recommend = ({ product }) => {
  return (
    <section className='grid text-center gap-10'>
      <h2 className='text-2xl font-semibold tracking-wider'>
        YOU MAY ALSO LIKE
      </h2>
      <ul className='grid t:grid-cols-3 gap-20 t:gap-5'>
        {product.others.map((other, index) => {
          return (
            <li key={index} className='grid gap-8'>
              <div
                className={`d:grid bg-light-gray rounded-lg bg-no-repeat bg-center bg-contain bg-m-${other.slug}-others t:bg-t-${other.slug}-others d:bg-d-${other.slug}-others h-40 w-full`}
              ></div>
              <h2 className='text-2xl font-semibold tracking-wider'>
                {other.name.toUpperCase()}
              </h2>
<<<<<<< HEAD
              <motion.a
                href={`${url}/${other.category}/${other.slug}`}
                whileHover={{ scale: 1.05 }}
                className='text-sm font-semibold tracking-wider bg-moderate-orange hover:bg-opacity-70 text-white mx-auto py-4 px-8'
              >
                SEE PRODUCT
              </motion.a>
=======
              <Link
                to={`/${other.category}/${other.slug}`}
                className='bg-moderate-orange hover:bg-opacity-70 text-white mx-auto py-4 px-8'
              >
                <button className='text-sm font-semibold tracking-wider'>
                  SEE PRODUCT
                </button>
              </Link>
>>>>>>> parent of 92ab309 (improved accessibility)
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Recommend;
