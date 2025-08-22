// import React from 'react'
import photo from "../assets/aboutus.jpg";

function AboutUs() {
  return (
    <section className="container mt-[-80px] w-full">
      <div className=" flex flex-col justify-center items-center mt-10">
        <h1 className="text-2xl mb-10">ABOUT US</h1>
        <div className="flex max-lg:flex-col-reverse w-full justify-center items-center">
          <div className="w-1/2 max-lg:w-full">
            <img className="w-full" src={photo} alt="" />
          </div>
          <div className="w-1/2 p-10 gap-7 max-lg:w-full flex text-xs flex-col">
            <p>
              Welcome to{" "}
              <span className="lg:text-3xl md:text-2xl sm:text-xl text-lg">
                HEAVENLY
              </span>
              , your one-stop online destination for everything you need—whether
              it's for your home, your wardrobe, or your daily life. Founded
              with the vision to make online shopping simple, affordable, and
              reliable, we bring you a wide range of quality products across
              multiple categories, including home & kitchen, electronics,
              fashion, health & beauty, personal care, and more. Our goal is to
              offer everyday essentials and unique finds—all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
