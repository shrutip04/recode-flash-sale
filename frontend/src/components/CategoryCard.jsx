function CategoryCard({ title, icon, description }) {
  return (
    <div className="group relative w-[260px] rounded-xl border border-[#1f2937] bg-[#0b0f14] p-6 text-center transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]">

      {/* Icon */}
      <div className="text-4xl mb-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

    </div>
  )
}

export default CategoryCard