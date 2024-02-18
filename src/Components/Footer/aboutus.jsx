import React from 'react';

import ppf from "../../assets/ppf.jpg";
import interior from "../../assets/INTERIOR.JPG";
import sunroof from "../../assets/SUNROOF.JPG";

const AboutUs = () => {
  return (
    <div className="about-us bg-blue-500 h-auto flex flex-col items-center justify-center">
      <h2 className="text-5xl">Uniq's Automotive</h2>
      <p>Welcome to Uniq's Automotive, your one-stop destination for high-quality car accessories and top-notch automotive services. At Uniq's, we are passionate about cars and strive to provide exceptional products and services to meet all your automotive needs.</p>
      
      <h3 className="my-3 text-3xl">Our Mission</h3>
      <p>Our mission is to enhance your driving experience by offering innovative and reliable car accessories that cater to your style and functionality preferences. We also aim to deliver outstanding automotive services that ensure the optimal performance and longevity of your vehicle.</p>
      
      <h3 className="my-3 text-3xl">What Sets Us Apart</h3>
      <p>At Uniq's Automotive, we differentiate ourselves through:</p>
      <ul>
        <li>Curated Selection: We handpick each product in our inventory to guarantee quality, performance, and style.</li>
        <li>Expertise: Our team consists of experienced professionals who are knowledgeable about cars and passionate about providing exceptional service.</li>
        <li>Customer Satisfaction: We prioritize your satisfaction and strive to exceed your expectations with every interaction.</li>
      </ul>
      
      <h1 className="text-3xl my-3">Our Services</h1>
      <p>"UNIQ'S AUTOMOTIVE" is a one stop solution to modify, customize, and give a unique look and feel to your car. We provide various services like Car Wrapping, Custom Interior, Sound Proofing, Auto Lighting, Car Detailing, High End Audio, Car Restoration, Paint Protective Film etc. With Highly skilled & dedicated team of experts, we are determined to serve you better and fast. Spacious workshop with ample parking slots and multiple bays with advanced technology to completely transform your car into the way you wanted, professionally.</p>
      
      <div className="flex justify-center">
        <img src={ppf} className="rounded-3xl object-fill h-48 w-48 mx-4" alt="hero-image" />
        <img src={interior} className="rounded-3xl object-fill h-48 w-48 mx-4" alt="hero-image" />
        <img src={sunroof} className="rounded-3xl object-fill h-48 w-48 mx-4" alt="hero-image" />
      </div>
    </div>
  );
}

export default AboutUs;
