import CategoryCard from "./CategoryCard"
import { FaShoePrints, FaBolt, FaBullseye, FaTshirt } from "react-icons/fa"

function CategoryRow() {

  const categories = [
    {
      title: "Sneakers",
      icon: <FaShoePrints />,
      description: "Limited edition kicks"
    },
    {
      title: "Electronics",
      icon: <FaBolt />,
      description: "Cutting-edge tech drops"
    },
    {
      title: "Collectibles",
      icon: <FaBullseye />,
      description: "Rare finds & exclusives"
    },
    {
      title: "Apparel",
      icon: <FaTshirt />,
      description: "Designer streetwear"
    }
  ]

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">

      {/* Section Title */}
      <h2 className="text-center text-2xl font-semibold tracking-widest text-white mb-10">
        CATEGORIES
      </h2>

      {/* Category Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            icon={category.icon}
            description={category.description}
          />
        ))}
      </div>

    </section>
  )
}

export default CategoryRow