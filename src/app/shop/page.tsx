import React from "react";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";

async function ShopProducts() {
  interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    imagePath: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
  }

  const response: Product[] = await client.fetch(`*[_type=='product']{
    _id,
    imagePath,
    description,
    price,
    name,
    category,
    discountPercentage,
    isFeaturedProduct,
    stockLevel
  }`);

  return (
    <>
      <div className="w-full px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {response.map((item: Product) => (
            <Link
              key={item._id}
              href={`/shop/${item._id}?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.imagePath)}&price=${item.price}`}
            >
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-transform duration-300">
                <div className="w-full h-[250px] rounded-lg overflow-hidden relative">
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    className="hover:scale-105 transition duration-300 object-cover"
                    fill
                  />
                </div>

                <div className="text-gray-700 text-lg font-semibold mt-4">
                  {item.name}
                </div>

                <div className="text-xl font-bold text-gray-900 mt-2">
                  Rs. {item.price}.00
                </div>
                <Button asChild className="w-full mt-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-gray-900 font-semibold py-2 rounded-md">
  <Link href={`/shop/${item._id}`}>Read more</Link>
</Button>


                {/* <Button asChild className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded-md">
                  <Link href={`/shop/${item._id}`}>Read more</Link>
                </Button> */}
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mt-16">
          <Button variant="outline" className="w-12 h-12 rounded-lg bg-yellow-300">
            1
          </Button>
          <Button variant="outline" className="w-12 h-12 rounded-lg">
            2
          </Button>
          <Button variant="outline" className="w-12 h-12 rounded-lg">
            3
          </Button>
          <Button variant="outline" className="px-4 h-12 rounded-lg">
            Next
          </Button>
        </div>

        {/* Features Section */}
        <div className="py-16 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-medium mb-4">Free Delivery</h3>
                <p className="text-gray-600">For all orders over $50, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">90 Days Return</h3>
                <p className="text-gray-600">If goods have problems, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Secure Payment</h3>
                <p className="text-gray-600">100% secure payment, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopProducts;
