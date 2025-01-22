import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*----Left----*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo1} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            consectetur itaque, incidunt quam architecto amet ducimus, nobis
            cupiditate ratione aspernatur magnam doloribus? Iste quaerat
            possimus expedita fugiat molestiae fuga consequatur.
          </p>
        </div>
        {/*----Center----*/}

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/*----Right----*/}

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-98765-43210</li>
            <li>docease@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center" >&copy; 2024 DocEase. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
