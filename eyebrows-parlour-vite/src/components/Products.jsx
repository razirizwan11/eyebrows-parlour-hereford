import React from "react";

const products = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/27/09/9c/27099c8aebc28fce50ce441c2b931d1c.jpg",
    name: "Castor Oil",
    description: "Suitable for all skin types.",
    price: "",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/aa/63/df/aa63df887a75460d6c2e363677b41649.jpg",
    name: "Dove Scalp Serum",
    description: "Strengthens hair roots and reduces breakage.",
    price: "",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/1200x/34/d7/58/34d7586f5415fbe5d8d49ec1e86dacb5.jpg",
    name: "Hair Growth Oil",
    description: "200ml intensive hair growth treatment.",
    price: "£25.00",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/ea/17/da/ea17da60fd532170fcfe9d5adb128bd4.jpg",
    name: "Dove Serum",
    description: "Smooth and repair damaged hair.",
    price: "",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/4c/42/38/4c42382d136a536986bceb0ac7db6ecd.jpg",
    name: "Repair Spray",
    description: "Heat protection & repair spray.",
    price: "",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/736x/4a/31/89/4a31898c7ae01c65efc9b9c23d334ca8.jpg",
    name: "TRESemme Care Kit",
    description: "Full professional hair care bundle.",
    price: "£49.99",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="text-gray-600 mt-2">
            Professional beauty products for healthy hair & skin
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">{product.name}</h3>

                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>

                <div className="mt-3 font-bold text-brand-600">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;