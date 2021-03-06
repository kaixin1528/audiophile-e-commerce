const Input = ({ input, placeholder }) => {
  return (
    <article className='grid gap-3'>
      <h5 className='text-sm font-medium'>{input}</h5>
      <input
        type='text'
        name={input}
        placeholder={placeholder}
        className='p-5 font-medium text-sm ring-1 ring-gray-300 appearance-none focus:ring-1 focus:ring-moderate-orange rounded-lg focus:outline-none'
      />
    </article>
  );
};

export default Input;
