const PaymentMethod = ({ method, payment, onPayment }) => {
  return (
    <button
      type='button'
      className={`grid grid-flow-col auto-cols-max text-sm ${
        payment === method
          ? "ring-1 ring-moderate-orange"
          : "ring-1 ring-gray-300"
      } font-medium gap-5 items-center p-5  rounded-lg`}
      onClick={() => onPayment(method)}
    >
      {method}
    </button>
  );
};

export default PaymentMethod;
