import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.escuelajs.co/api/v1/products/?categoryID=1&offset=0&limit=8"
    )
      .then((result) => result.json())
      .then((data) => setProducts(data));
  }, []);

  const listProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <img
          src={product.images[0]}
          className="object-cover duration-300 hover:contrast-125 rounded-2xl aspect-[9/10] w-full relative"
          alt={product.title}
        />
        <div class="mt-5 px-4 flex justify-between">
          <div class="flex flex-col w-full">
            <span class="font-semibold dark:font-medium text-primary uppercase">
              {product.title}
            </span>
            <span class="text-bodyColor font-medium mt-2">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section class="flex flex-col gap-10">
        <h1 class="text-[28px] sm:text-[22px] md:text-[25px] lg:text-3xl font-semibold other-color">
          <span class="text-primary">Recommendations.</span>{" "}
          <span class="hidden sm:inline">Best matching products for you</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {listProducts}
        </div>
      </section>
    </>
  );
}
