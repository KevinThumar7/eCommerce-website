// import React from 'react'

import { useForm, type SubmitHandler } from "react-hook-form";

function Contact() {
  type Inputs = {
    example: string;
    exampleRequired: string;
    firstName: string;
    lastName: string;
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  };

  return (
    <section className="container w-full h-full">
      <div className="w-full">
        <div className="w-2/3 mx-auto mt-10 text-center">
          <h1 className="mb-10 text-xl">CONTACT US</h1>
          <div className="flex justify-center py-10 rounded-4xl px-7 border w-fit mx-auto">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex items-center gap-5">
                <label htmlFor="firstName">First Name :</label>
                <input
                  className="border py-1 rounded-xl px-5"
                  {...register("firstName", {
                    required: true,
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
                <label htmlFor="lastName">Last Name :</label>
                <input
                  className="border py-1 rounded-xl px-5"
                  {...register("lastName", {
                    required: true,
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
                <label htmlFor="email">Email :</label>
                <input
                  className="border py-1 rounded-xl px-5"
                  {...register("email", {
                    required: true,
                    minLength: { value: 3, message: "Enter a Valid Email" },
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
                  className="py-1 cursor-pointer hover:text-black transition-all duration-500 hover:bg-white px-5 rounded-full border mt-5 text-white bg-black"
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
