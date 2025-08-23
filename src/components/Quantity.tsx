// import React from "react"; 

function Quantity({item , handleMinus , handlePlus}) {
  return (
    <div className="border-gray-500 flex border justify-around rounded-xl w-1/9">
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
}

export default Quantity;
