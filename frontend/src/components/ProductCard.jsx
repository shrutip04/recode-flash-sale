import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-slate-900 p-4 rounded-xl hover:scale-105 transition cursor-pointer"
    >

      <img
      src={product.image || "https://via.placeholder.com/300"}
      alt={product.name}
      className="rounded mb-3"
    />

      <h3 className="text-lg font-semibold">
        {product.name}
      </h3>

      <p className="text-gray-400">
        ${product.price}
      </p>

    </div>
  );
}

export default ProductCard;