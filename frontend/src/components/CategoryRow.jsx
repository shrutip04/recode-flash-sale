import { useNavigate } from "react-router-dom";

function CategoryRow() {

  const navigate = useNavigate();

  const categories = [
    { name: "Sneakers", icon: "👟" },
    { name: "Electronics", icon: "🎧" },
    { name: "Fashion", icon: "👕" },
    { name: "Gaming", icon: "🎮" },
    { name: "Accessories", icon: "⌚" }
  ];

  return (
    <div className="flex justify-center gap-10 py-6 bg-slate-950">

      {categories.map((cat) => (

        <div
          key={cat.name}
          onClick={() => navigate(`/category/${cat.name}`)}
          className="flex flex-col items-center cursor-pointer hover:scale-110 transition"
        >

          <div className="text-3xl mb-1">
            {cat.icon}
          </div>

          <p className="text-sm text-gray-300">
            {cat.name}
          </p>

        </div>

      ))}

    </div>
  );
}

export default CategoryRow;