import React from "react";
import ContactPage from "../components/section/ContactUs/ContactPage";
import Banner from "../components/Layout/Banner";
import bannerImage from "../assets/HomeImages/banner-img.avif"


 
function ContactUs() {
  return (
   
    <div>
      <Banner
        title="Contact Us"
        subtitle="We’d love to hear from you! Reach out for inquiries, support, or collaboration opportunities."
        backgroundImage={bannerImage}
      />
     <ContactPage />
      

      </div>

 );
}



export default ContactUs;
