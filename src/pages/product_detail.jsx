// pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../cartContext";
import products from "../products.json";

const ProductDetail = () => {
    const { id } = useParams(); // get id from url
    const product = products.find(p => p.id.toString() === id);
    const { addToCart } = useContext(cartContext);

    const handleAdd = (e) => {
            e.preventDefault()
            addToCart(product)
        };
  
        

  return (
    <div className="max-w-4xl mx-auto mb-20 p-6 grid md:grid-cols-2 gap-10">
      <img src={product.image} alt={product.title} className="w-full h-auto rounded" />
      <div>
        <h1 className="text-2xl mt-3 mb-10 font-bold">{product.name}</h1>
        <p className="text-xl  mt-2">$ {product.price}</p>
        <p className="mt-4 mb-8 text-gray-700">{product.description}</p>

        {product.sizes && product.sizes.length > 0 && (
            <div className="mt-4">
                <p className="font-medium text-gray-800 mb-1">Available Sizes:</p>
                <div className="flex gap-2">
                {product.sizes.map((size) => (
                    <span
                    key={size}
                    className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700"
                    >
                    {size}
                    </span>
                ))}
                </div>
            </div>
            )}
        

        <button
          onClick={handleAdd}
          className="mt-6 px-6 py-2 bg-gray-900 text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
