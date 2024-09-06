import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./cardSlice";
import "./Showmore.css";

function Showmore() {
  const selectedCard = useSelector((state) => state.card.selectedCard);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (selectedCard) {
      const actionPayload = {
        id: new Date().getTime(),
        title: selectedCard.title,
        price: parseFloat(selectedCard.price.replace('₹', '').replace(',', '')),
        image: selectedCard.image,
        quantity: 1,
      };
      dispatch(addToCart(actionPayload));
    }
  };

  if (!selectedCard) {
    return <p style={{margin:"20px"}}>No product selected.</p>;
  }

  return (
    <div className="showmore-container">
      <h2>{selectedCard.title}</h2>
      <img src={selectedCard.image} alt={selectedCard.title} />
      <p>{selectedCard.description}</p>
      <p className="price">{selectedCard.price}</p>

      <button onClick={handleAddToCart} className="button">
        Add to Cart
      </button>

      <div className="product-details">
        <h3>Product Details</h3>
        <p><strong>Material:</strong> {selectedCard.material}</p>
        <p><strong>Brand:</strong> {selectedCard.brand}</p>
        <p><strong>Category:</strong> {selectedCard.category}</p>
        <p><strong>Prescription Required:</strong> {selectedCard.prescription_required}</p>
        <p><strong>Lens Type:</strong> {selectedCard.lens_type}</p>
        <p><strong>UV Protection:</strong> {selectedCard.UV_protection}</p>
      </div>

      <div className="reviews">
        <h3>Customer Reviews</h3>
        <div className="review">
          <p><strong>John Wesly</strong></p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Great product, highly recommend!</p>
        </div>
        <div className="review">
          <p><strong>Riya</strong></p>
          <p>⭐⭐⭐⭐</p>
          <p>Very satisfied with my purchase.</p>
        </div>
      </div>

      <div className="related-products">
        <h3>Related Products</h3>
        <div className="related-product-item">
          <img src="https://himalayaoptical.com/cdn/shop/files/0BE4393__405413_000A_370x320.jpg?v=1711803930" alt="Burberry 4349 Sunglass" />
          <p>Burberry 4349 Sunglass</p>
          <p>₹3299</p>
        </div>
        <div className="related-product-item">
          <img src="https://himalayaoptical.com/cdn/shop/products/0VO5496SI__27644L_000A_370x320.jpg?v=1681729745" alt="Vogue 5461SI Sunglass" />
          <p>Vogue 5461SI Sunglass</p>
          <p>₹5699</p>
        </div>
      </div>
    </div>
  );
}

export default Showmore;
