import Link from 'next/link';
import React from 'react';

const Insta = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="bg-[#EDDFE0] h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh] w-full bg-cover bg-center bg-no-repeat rounded-lg"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {/* Content Section */}
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-gray-800 text-4xl sm:text-7xl font-bold mb-4">
            Our Instagram
          </h1>
          <p className="text-gray-800 text-lg mb-6">
          Follow us on Instagram for the latest updates and stunning furniture inspirations
          </p><Link href="https://www.instagram.com/uzmakhan11122">
          <button className="px-8 py-3 bg-white text-gray-700 rounded-full shadow-lg shadow-gray-500 hover:shadow-gray-700 transition duration-300">
            Click Here
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Insta;