// import React from 'react'
import photo from "../assets/aboutus.jpg";

function AboutUs() {
  return (
    <section className="container left-1/2 transform -translate-x-1/2 w-full h-screen absolute top-0">
      <div className=" flex flex-col justify-center items-center mt-25">
        <h1 className="text-2xl mb-10">ABOUT US</h1>
        <div className="flex w-full justify-center items-center">
          <div className="w-1/2">
            <img className="w-full" src={photo} alt="" />
          </div>
          <div className="w-1/2 p-10 gap-7 flex flex-col">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              vitae error quisquam libero sed a delectus eligendi, laudantium
              reprehenderit quidem odit repudiandae deleniti! Quia eaque earum
              ipsa eligendi rem vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              vitae error quisquam libero sed a delectus eligendi, laudantium
              reprehenderit quidem odit repudiandae deleniti! Quia eaque earum
              ipsa eligendi rem vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              vitae error quisquam libero sed a delectus eligendi, laudantium
              reprehenderit quidem odit repudiandae deleniti! Quia eaque earum
              ipsa eligendi rem vitae?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
