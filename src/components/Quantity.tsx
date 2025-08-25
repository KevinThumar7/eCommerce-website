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
    <div className="border-gray-500 flex border justify-around items-center rounded-xl w-full">
      <button
        type="button"
        className="cursor-pointer py-1 px-2"
        disabled={item.quantity <= 1}
        onClick={() => handleMinus(Number(item.id))}
      >
        -
      </button>
      <p className="px-2">{item.quantity}</p>
      <button
        type="button"
        className="cursor-pointer py-1 px-2"
        disabled={item.quantity >= 10}
        onClick={() => handlePlus(Number(item.id))}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
