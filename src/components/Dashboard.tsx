'use client'

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const productData = [
  { id: 1, name: "Product A", price: 29.99, category: "Electronics" },
  { id: 2, name: "Product B", price: 19.99, category: "Clothing" },
  { id: 3, name: "Product C", price: 49.99, category: "Home" },
  { id: 4, name: "Product D", price: 9.99, category: "Books" },
  { id: 5, name: "Product E", price: 99.99, category: "Gadgets" },
];

export default function AdminDashboard() {
  const [products] = useState(productData);
  const [search, setSearch] = useState("");

  const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Card className="shadow-md p-4">
        <CardContent>
          <div className="mb-4 flex items-center gap-4">
            <Input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearch}
              className="w-full"
            />
            <Button>Add Product</Button>
          </div>

          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">ID</th>
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">Price</th>
                <th className="border border-gray-200 px-4 py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="text-center">
                  <td className="border border-gray-200 px-4 py-2">{product.id}</td>
                  <td className="border border-gray-200 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-200 px-4 py-2">${product.price.toFixed(2)}</td>
                  <td className="border border-gray-200 px-4 py-2">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
