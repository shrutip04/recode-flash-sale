import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import products from "../data/products";

function ProductPage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center mt-20 text-white">
        Product not found
      </div>
    );
  }

  const images = [
    product.image,
    product.image,
    product.image
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="min-h-screen">

      <Navbar />

      {/* Product Section */}
      <div className="max-w-6xl mx-auto p-10 grid grid-cols-2 gap-12">

        {/* Image Gallery */}
        <div className="bg-slate-900 p-6 rounded-xl">

          <img
            src={selectedImage}
            alt={product.name}
            className="rounded-xl mb-6 max-h-[400px]"
          />

          <div className="flex gap-4">

            {images.map((img, index) => (

              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                className="w-20 h-20 object-cover rounded cursor-pointer border border-slate-700 hover:scale-105"
              />

            ))}

          </div>

        </div>

        {/* Product Info */}
        <div>

          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            {product.name}
          </h1>

          <p className="text-gray-400 mb-4">
            Premium marketplace product with limited availability.
          </p>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <span className="text-yellow-400 text-lg mr-2">★★★★☆</span>
            <span className="text-gray-400">(124 reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-semibold mb-6">
            ${product.price}
          </p>

          {/* Stock */}
          <p className="text-green-400 mb-6">
            In Stock
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Buy Now
            </button>

            <button
              onClick={() => navigate("/flash-sale")}
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Enter Flash Drop
            </button>

          </div>

        </div>

      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto px-10 pb-12">

        <h2 className="text-2xl text-yellow-400 mb-4">
          Product Description
        </h2>

        <p className="text-gray-400 leading-relaxed">
          This product is part of our curated marketplace collection.
          Designed with premium materials and modern aesthetics,
          it delivers both style and performance. Whether you're
          shopping for everyday use or exclusive drops, this item
          represents quality and reliability.
        </p>

      </div>

      {/* Recommended Products */}
      <div className="max-w-6xl mx-auto px-10 pb-20">

        <h2 className="text-2xl text-yellow-400 mb-6">
          You May Also Like
        </h2>

        <div className="grid grid-cols-4 gap-6">

          {products
            .filter(p => p.id !== product.id)
            .slice(0, 4)
            .map((p) => (

              <div
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`)}
                className="bg-slate-900 p-4 rounded-xl cursor-pointer hover:scale-105 transition"
              >

                <img
                  src={p.image}
                  className="rounded mb-3"
                />

                <h3 className="font-semibold">
                  {p.name}
                </h3>

                <p className="text-gray-400">
                  ${p.price}
                </p>

              </div>

            ))}

        </div>

      </div>

    </div>
  );
}

export default ProductPage;