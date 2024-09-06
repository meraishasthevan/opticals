import React from 'react';
import './ContactLens.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedCard } from './cardSlice';

const products = [
  { name: 'Contact Lens', description: 'Airvue 120ml Contact Lenses Solution', price: 5000, image: 'https://www.specsmakers.in/cdn/shop/products/PRODUCTS-1_f34ebb57-d049-4afe-86ab-a43bc95c6a1f.jpg?v=1672148581&width=480' },
  { name: 'Contact Lens', description: 'Airvue Color Contact Lenses', price: 3270, image: 'https://www.specsmakers.in/cdn/shop/files/1_26a8168f-703b-44ae-b11c-fc7d2b5ac57e.jpg?v=1724410621&width=480' },
  { name: 'Contact Lens', description: 'Airvue Color Monthly Disposable Contact Lenses', price: 2455, image: 'https://www.specsmakers.in/cdn/shop/products/1_093ab11c-5a6c-430a-ac49-38e4fecc689e.jpg?v=1675776679&width=480' },
  { name: 'Contact Lens', description: 'Airvue TORIC Monthly Disposable Contact Lenses', price: 1565, image: 'https://www.specsmakers.in/cdn/shop/products/Toric-Lens-01_f950278e-e4f1-4fbe-9574-cd4288a265f9.jpg?v=1596562599&width=480' },
  { name: 'Contact Lens', description: 'Airvue 60ml Contact Lenses Solution', price: 2982, image: 'https://www.specsmakers.in/cdn/shop/products/1599469003214.jpg?v=1599469712&width=480' },
  { name: 'Contact Lens', description: 'Airvue Color Monthly Disposable Contact Lenses', price: 985, image: 'https://www.specsmakers.in/cdn/shop/products/Regular-Lens-01_9793998e-dc77-447e-a227-e510031daab1.jpg?v=1596562606&width=480' },
];

function ContactLens() {
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    dispatch(setSelectedCard(product));
  };

  return (
    <div className="cont-lens">
      <h2>Contact Lenses</h2>
      <div className="static-content">
        <p>
          Explore our wide range of contact lenses that offer comfort, clarity, and style. 
          Whether you're looking for daily wear, monthly disposables, or specialty lenses, 
          we have something to suit every need. Check out our collection and find the perfect lenses for you.
        </p>
        <img src='https://d3995ea24pmi7m.cloudfront.net/fit-in/2130x1100/media/wysiwyg/titan_cms/contact-lens-banner/contact_lenses_2_1450x400_desktop.jpg' alt='Contact Lens Info' className='static-img'/>
      </div>
     
      <div className="row-cont">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <div className="card-lens">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₹{product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary" onClick={() => handleProductClick(product)}>Show More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactLens;
