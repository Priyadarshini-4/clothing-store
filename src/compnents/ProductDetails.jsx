import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>❌ Product not found</h2>;

  return (
    <div className="product-details">
      <div className="images-gallery">
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={`${product.title} ${index + 1}`} />
        ))}
      </div>
      <div className="details-info">
        <h1>{product.title}</h1>
        <h3>{product.brand}</h3>
        <p>⭐ {product.rating}/5</p>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <h4>Category: {product.category}</h4>
        <h4>Stock: {product.stock} available</h4>
        <Link to="/" className="back-btn">
          ⬅ Back to Products
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
