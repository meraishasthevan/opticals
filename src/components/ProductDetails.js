import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cardSlice';
import './ProductDetails.css'; 

function ProductDetails() {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.card.selectedCard);

  const handleAddToCart = () => {
    if (selectedCard) {
      const actionPayload = {
        id: new Date().getTime(),
        title: selectedCard.name,
        price: selectedCard.price,
        image: selectedCard.image,
        quantity: 1, 
      };
      dispatch(addToCart(actionPayload));
    }
  };

  if (!selectedCard) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details-container">
      <div className="row-pro">
        <div className="col-md-6-pro-img">
          <img src={selectedCard.image} alt={selectedCard.name} className="img-fluid" />
        </div>

        <div className="col-md-6-pro">
          <h2>{selectedCard.name}</h2>
          <p>{selectedCard.description}</p>
          <p className="price">Price: ₹{selectedCard.price}</p>

          <div className="medical-info">
            <h3>Medical Benefits of Contact Lenses</h3>
            <ul>
              <li>Provides better peripheral vision than glasses.</li>
              <li>Corrects irregular corneal conditions.</li>
              <li>Reduces glare and reflection for better vision.</li>
              <li>Suitable for active lifestyles, no risk of breaking like glasses.</li>
              <li>Options for multifocal correction for both near and far vision.</li>
              <li>Available in materials to suit different eye sensitivities.</li>
            </ul>
          </div>

          <button className="btn-pro btn-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
