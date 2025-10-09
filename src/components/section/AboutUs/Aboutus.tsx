import React, { useRef, useEffect, useState } from "react";
import AboutImg from "../../../assets/property.jpg"

const AboutUs: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) setTextVisible(true);
            if (entry.target === imageRef.current) setImageVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24 p-8 text-gray-700 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="font-bold text-4xl mb-12 text-center text-gray-800">
        About Us
      </h1>

      {/* Flex container for text + image */}
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Text on left */}
        <div
          ref={textRef}
          className={`md:w-1/2 space-y-6 order-2 md:order-1 transform transition-all duration-700 ${
            textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <p>
            We Put People First. A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times 
            and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. 
            But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole 
            and dragged her into their agency, where they abused her for their.
          </p>
          <p>
            PropertyDealer helps you find your dream property with ease and transparency. 
            We list premium residential and commercial properties, complete with verified information, high-quality images, 
            and detailed descriptions to make your property search effortless and trustworthy.
          </p>
        </div>

        {/* Image on right */}
        <div
          ref={imageRef}
          className={`md:w-1/2 flex-shrink-0 order-1 md:order-2 transform transition-all duration-700 ${
            imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <img
            src={AboutImg} // public folder path
            alt="Property"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
