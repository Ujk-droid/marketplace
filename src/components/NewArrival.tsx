import React from 'react';
import Image from "next/image";

const productData = [
  {
    name: "Chair Wibe",
    _id: 1,
    imagePath: "https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A sleek outdoor chair with natural wooden elements and a modern look.",
    price: 1200,
  },
  {
    name: "Alpha Table",
    _id: 10,
    imagePath: "https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A sturdy oak chair with a sleek and minimalist design.",
    price: 900,
  },
  {
    name: "Replica Table",
    _id: 11,
    imagePath: "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic wishbone chair with a dark walnut frame and cord seat.",
    price: 750,
  },
  {
    name: "Sleek Modern Table",
    _id: 12,
    imagePath: "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A modern chair with a carbon fiber frame and bold red accents.",
    price: 2000,
  },
];

const NewArrival = () => {
  return (
    <section className="text-gray-600 body-font  dark:text-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800 lg:w-1/3 lg:mb-0 mb-4  dark:text-gray-100">
            New Arrivals
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover our latest collection of premium furniture, blending modern design with timeless elegance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="h-64 w-full mb-4 overflow-hidden rounded-md">
                <Image
                  alt={product.name}
                  src={product.imagePath}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-medium text-gray-700 dark:text-gray-100">{product.name}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{product.description}</p>
              <p className="mt-2 text-gray-700 font-semibold dark:text-gray-300">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
