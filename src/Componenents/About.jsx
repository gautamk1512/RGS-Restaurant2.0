import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" bg-gradient-to-r from-orange-50 to-orange-100 min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5" id="about">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        We source only the freshest ingredients for our dishes, ensuring exceptional taste in every bite. Immerse yourself in our inviting atmosphere, designed to enhance your dining pleasure. Our head chef brings years of expertise, crafting innovative and delicious creations. We support local farmers and producers, bringing you the best of our region's bounty.
 Your satisfaction is our priority. Our attentive staff is here to make your visit memorable.

        </p>
        <p>
        Signature Specialties: Don't miss our renowned [Signature Dish], a must-try for every visitor.
       Online Ordering: Enjoy our menu from the comfort of your home with our convenient online ordering.
        </p>
        <h1 className=" font-semibold text-4xl text-center md:text-start">Our Mission</h1>
        <p>
At RGS, our mission is to provide an unforgettable dining experience by combining exceptional food, outstanding service, and a warm, welcoming atmosphere. We are dedicated to using the freshest ingredients, supporting local farmers, and promoting sustainability in everything we do. Our goal is to create a space where friends and family can gather, celebrate, and enjoy the pleasures of good food and great company</p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" onClick={()=>{}}/>
        </div>
      </div>
    </div>
  );
};

export default About;