import { Link } from "react-router-dom";

const ReturnButton = ({ category }) => {
  return (
    <Link to={`/${category}`}>
      <button className='text-black text-opacity-50 hover:text-moderate-orange font-extralight justify-self-start px-6 pt-10 t:px-12 d:px-40'>
        Go back
      </button>
    </Link>
  );
};

export default ReturnButton;
