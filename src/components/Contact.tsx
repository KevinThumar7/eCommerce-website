// import React from 'react'

import { useForm, type SubmitHandler } from "react-hook-form";

function Contact() {
  type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <section className="container w-full h-full">
      <div className="w-full">
        <div className="lg:w-2/3 sm:w-1/2 mx-auto mt-10 text-center">
          <h1 className="mb-10 text-xl">CONTACT US</h1>
          <div className="flex justify-center lg:py-10 md:py-7 py-5 rounded-4xl lg:px-7 md:px-5 px-3 border w-fit mx-auto">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex items-center gap-5">
                <label
                  htmlFor="firstName"
                  className="lg:text-lg md:text-sm sm:text-xs text-[10px]"
                >
                  First Name :
                </label>
                <input
                  className="border py-1 rounded-xl md:px-5 sm:px-3 px-2"
                  {...register("firstName", {
                    required: "Required",
                    minLength: {
                      value: 3,
                      message: "Enter Characters Greater than 2",
                    },
                  })}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter Your First Name..."
                />
              </div>
              {errors.firstName && (
                <p className="text-red-500 text-end">
                  {errors.firstName.message}
                </p>
              )}
              <div className="w-full items-center flex gap-5 mt-5">
                <label
                  htmlFor="lastName"
                  className="lg:text-lg md:text-sm sm:text-xs text-[10px]"
                >
                  Last Name :
                </label>
                <input
                  className="border py-1 rounded-xl md:px-5 sm:px-3 px-2"
                  {...register("lastName", {
                    required: "Required",
                    minLength: {
                      value: 3,
                      message: "Enter Characters Greater than 2",
                    },
                  })}
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Your Last Name..."
                />
              </div>
              {errors.lastName && (
                <p className="text-red-500 text-end">
                  {errors.lastName.message}
                </p>
              )}
              <div className="w-full flex gap-5 justify-between items-center mt-5">
                <label
                  htmlFor="email"
                  className="lg:text-lg md:text-sm sm:text-xs text-[10px]"
                >
                  Email :
                </label>
                <input
                  className="border py-1 rounded-xl md:px-5 sm:px-3 px-2"
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a Valid Email",
                    },
                  })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email..."
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-end">{errors.email.message}</p>
              )}
              <div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="py-1 cursor-pointer hover:text-black transition-all duration-500 hover:bg-white md:px-5 sm:px-4 px-3 md:text-sm sm:text-xs text-[10px] rounded-full border mt-5 text-white bg-black"
                >
                  {isSubmitting ? "Submitting" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
