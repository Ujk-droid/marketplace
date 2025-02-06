"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Ensure this is correctly configured
import { useParams } from "next/navigation";

interface Product {
  _id: string;
  imagePath: string;
  description: string;
  price: number;
  name: string;
  category: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
}

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null); // To store fetched product data
  const [selectedColor, setSelectedColor] = useState<string>("Default");
  const [selectedSize, setSelectedSize] = useState<string>("SM");
  const { shop } = useParams(); // Ensure dynamic route parameter is captured correctly

  useEffect(() => {
    // Log the shop parameter to debug
    console.log("Shop parameter:", shop);

    if (!shop) {
      console.error("Shop parameter is missing or undefined");
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await client.fetch(
          `*[_type == 'product' && _id == $shop] {
            _id,
        setProduct(response[0] || null); // Set the product or fallback to null
            description,
            price,
            name,
            category,
            discountPercentage,
            isFeaturedProduct,
            stockLevel
          }`,
          { shop }
        );
        console.log("Fetched product:", response);
        setProduct(response[0] || any); // Set the product or fallback to null
      } catch (error) {
        if (error instanceof Error) {
          console.error("Failed to fetch product data:", error.message);
        } else {
          console.error("Failed to fetch product data:", error);
        }
      }
    };

    fetchProduct();
  }, [shop]);

  if (!product) {
    return (
      <p className="text-center text-gray-500 text-lg">
        Loading product details...
      </p>
    );
  }

  const handleColorChange = (color: string) => setSelectedColor(color);
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedSize(e.target.value);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Product Image */}
          <Image
            className="w-full"
            src={product.imagePath || "/placeholder-image.jpg"} // Fallback to placeholder image
            alt={product.name || "Product"}
            width={500}
            height={500}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <p className="leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {["Default", "Gray", "Indigo"].map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ${
                      selectedColor === color ? "ring-2 ring-indigo-500" : ""
                    }`}
                  ></button>
                ))}
              </div>

              {/* Size Selection */}
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select
                    value={selectedSize}
                    onChange={handleSizeChange}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                  >
                    {["SM", "M", "L", "XL"].map((size) => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Product Price and Add to Cart */}
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
