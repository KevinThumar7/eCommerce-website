import React from "react";

type QuantityProps = {
  item: {
    id: number | string;
    quantity: number;
  };
  handleMinus: (id: number) => void;
  handlePlus: (id: number) => void;
};

const Quantity: React.FC<QuantityProps> = ({
  item,
  handleMinus,
  handlePlus,
}) => {
  return (
    <div className="border-gray-500 flex border justify-around rounded-xl w-full">
      <button
        disabled={item.quantity >= 10}
        onClick={() => handlePlus(Number(item.id))}
      >
        +
      </button>
      <p>{item.quantity}</p>
      <button
        disabled={item.quantity <= 1}
        onClick={() => handleMinus(Number(item.id))}
      >
        -
      </button>
    </div>
  );
};

export default Quantity;
