import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const product = {
    imagePath:
      'https://plus.unsplash.com/premium_photo-1690971631390-4f3fa92315f9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'A spacious lounge chair with a quilted back and soft cushioning.',
    price: 1600,
    name: 'Pink Lounge Chair',
  };

  return (
    <div>
      <section className="bg-myyellow">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-10 py-16 mx-auto flex flex-wrap items-center">
          {/* Left Section */}
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-center md:text-left">
            <h1 className="title-font font-medium text-4xl sm:text-5xl md:text-6xl text-gray-800 ml-2 sm:ml-5 md:ml-10 lg:ml-20  dark:text-white">
              {product.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl pt-4 mt-3 ml-2 sm:ml-5 md:ml-10 lg:ml-20">
              {/* ${product.price} */}
            </h2>
            <p className="text-lg pt-4 mt-2 ml-2 sm:ml-5 md:ml-10 lg:ml-20">
              {/* {product.description} */}
            </p>
            <Link href="/shop">
              <div className=" text-gray-800 text-xl sm:text-2xl pt-6 mt-6 ml-2 sm:ml-5 md:ml-10 lg:ml-20  dark:text-gray-100">
                Shop Now
              </div>
              <div className="h-1 w-[20px] sm:w-[100px] md:w-[150px] lg:w-[150px] bg-gray-600 mt-2 ml-4 sm:ml-10 md:ml-10 lg:ml-20  dark:text-gray-100"></div>
            </Link>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/5 md:w-1/2 w-full mt-6 md:mt-0">
            <div className="mx-auto sm:mr-12 overflow-hidden h-64 sm:h-72 md:h-[450px] lg:h-[600px] bg-myyellow rounded-lg">
              <Image
                src={product.imagePath}
                alt={product.name}
                width={800}
                height={600}
                className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
