import React from "react";

type PaymentPageProps = {
  total: number;
};

const PaymentPage: React.FC<PaymentPageProps> = ({ total }) => {
  const shipCost: number = 7.99;
  const discount: number = 0.1;
  const tax: number = 0.07;

  const discountedTotal = total - total * discount;

  const isFreeShipping = discountedTotal > 100;
  const appliedShippingCost = isFreeShipping ? 0 : shipCost;

  const subtotal = discountedTotal + appliedShippingCost;
  const taxAmount = subtotal * tax;
  const totalWithTax = subtotal + taxAmount;

  return (
    <div className="w-full">
      <h1 className="lg:text-xl md:text-lg sm:text-md text-sm mb-5">SUMMARY</h1>
      <hr />
      <div className="mt-5 w-full lg:text-lg md:text-md sm:text-sm text-xs">
        <p className="flex mb-2">
          Subtotal <span className="ml-auto">$ {total.toFixed(2)}</span>
        </p>
        <p className="flex mb-2">
          Discount{" "}
          <span className="ml-auto">- {(discount * 100).toFixed(2)}%</span>
        </p>
        <hr />
        <p className="flex my-2">
          After Discount{" "}
          <span className="ml-auto">$ {discountedTotal.toFixed(2)}</span>
        </p>
        <hr />
        <p className={`flex mt-2 ${isFreeShipping ? "line-through" : ""}`}>
          Shipping Cost <span className="ml-auto">$ {shipCost}</span>
        </p>
        <p className="mb-2 text-[12px] text-green-500">
          Shipping Cost free on orders above $ 100 after discount
        </p>
        <p className="flex mb-2">
          Tax <span className="ml-auto">{(tax * 100).toFixed(2)}%</span>
        </p>
        <hr />
        <p className="flex my-2 justify-center items-center">
          Apply Discount Code{" "}
          <span className="ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </span>
        </p>
        <hr />
        <p className="flex mt-2">
          Total <span className="ml-auto">$ {totalWithTax.toFixed(2)}</span>
        </p>
      </div>
      <button
        type="button"
        className="mt-5 py-1 px-4 lg:text-xl md:text-lg sm:text-md text-sm bg-black text-white cursor-pointer rounded-full hover:bg-gray-400 transition-all duration-500"
      >
        Checkout
      </button>
    </div>
  );
};

export default PaymentPage;
