function CategoryRow() {

  const categories = [
    { name: "Sneakers", icon: "👟", desc: "Limited edition kicks" },
    { name: "Electronics", icon: "⚡", desc: "Cutting-edge tech drops" },
    { name: "Collectibles", icon: "🎯", desc: "Rare finds & exclusives" },
    { name: "Apparel", icon: "🧥", desc: "Designer streetwear" }
  ];

  return (

    <div className="max-w-7xl mx-auto px-10 py-16">

      <h2 className="text-3xl text-center mb-10">
        CATEGORIES
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {categories.map((cat, i) => (

          <div
            key={i}
            className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition cursor-pointer"
          >

            <div className="text-3xl mb-4">{cat.icon}</div>

            <h3 className="text-lg font-semibold">
              {cat.name}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              {cat.desc}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default CategoryRow;