import { url } from "../lib/Constant";

const ReturnButton = ({ category }) => {
  return (
    <a
      href={`${url}/${category}`}
      className='text-black text-opacity-50 hover:text-moderate-orange font-extralight justify-self-start px-6 pt-10 t:px-12 d:px-40'
    >
      Go back
    </a>
  );
};

export default ReturnButton;
