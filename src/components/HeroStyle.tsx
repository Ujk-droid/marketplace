
'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const ImageSlider = () => {
  const [text] = useTypewriter({
    words: [
      "Armchair Chair Set",
      "Pink Lounge Chair",
      "Stylish Armchair",
      "Hans Wegner Style Three-Legged Shell Chair",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const images = [
    "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://next-ecommerce-template-4.vercel.app/product/Chair (4).png",
    "https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://plus.unsplash.com/premium_photo-1661962827359-b165dec0850f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://plus.unsplash.com/premium_photo-1681487485258-26aaa059d967?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[440px] overflow-hidden">
      {/* Image Slider */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`banner-${index}`}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#d68956] text-center">
        <h1 className="text-4xl font-bold mb-2">
          {text}
          <Cursor cursorBlinking cursorStyle="|" cursorColor="#5e376c" />
        </h1>
      </div>
    </div>
  );
};

export default ImageSlider;
