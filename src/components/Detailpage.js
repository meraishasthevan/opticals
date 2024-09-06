import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedCard } from './cardSlice';
import './Detailpage.css';
import Contact from "./Contact";

function Detailpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [priceFilter, setPriceFilter] = useState({
    below3000: false,
    between3000And10000: false,
    above10000: false,
    all: true,
  });

  const handleClick = (cardDetails) => {
    dispatch(setSelectedCard(cardDetails));
    navigate('/Showmore');
  };

  const handlePriceFilterChange = (e) => {
    const { name, checked } = e.target;

    if (name === "all") {
      setPriceFilter({
        below3000: false,
        between3000And10000: false,
        above10000: false,
        all: checked,
      });
    } else {
      setPriceFilter(prev => ({
        ...prev,
        [name]: checked,
        all: false, 
      }));
    }
  };

  const allCards = [
    { title: "Sun Glass", description: "Ray-Ban 30261 Sunglass", price: "₹7000", 
      image: "https://himalayaoptical.com/cdn/shop/products/Ray-Ban-3026I-Sunglass_Grey_1_370x320.jpg?v=1617801688",
      material: "Plastic",
      brand: "Ray-Ban",
      category: "Sunglasses",
      prescription_required: "No",
      lens_type: "Polarized",
      UV_protection: "100%", },
    { title: "Sun Glass", description: "Ray-Ban 2140 Sunglass", price: "₹17000", 
      image: "https://himalayaoptical.com/cdn/shop/products/805289126638_1_370x320.jpg?v=1646737754",
      material: "Plastic",
      brand: "Ray-Ban",
      category: "Sunglasses",
      prescription_required: "Yes",
      lens_type: "Non-Polarized",
      UV_protection: "100%", },
    { title: "Sun Glass", description: "Ray-Ban 2768 Sunglass", price: "₹2980",
      image: "https://himalayaoptical.com/cdn/shop/products/DSCF5699_370x320.jpg?v=1654342429",
      material: "Plastic",
      brand: "Ray-Ban",
      category: "Sunglasses",
      prescription_required: "No",
      lens_type: "Non-Polarized",
      UV_protection: "100%", },
    { title: "Spectacle", description: "Oakley 8001 Kids Spectacle", price: "₹7690", 
      image: "https://himalayaoptical.com/cdn/shop/products/888392266354_1_370x320.jpg?v=1645444518",
      material: "Plastic",
      brand: "Okaley",
      category: "Kids-Sunglasses",
      prescription_required: "Yes",
      lens_type: "Polarized",
      UV_protection: "100%", },
    { title: "Spectacle", description: "Vogue 2019 Kids Spectacle", price: "₹4438", 
      image: "https://himalayaoptical.com/cdn/shop/products/0VY2019__3032_000A_370x320.jpg?v=1681728986",
      material: "Plastic",
      brand: "Vogue",
      category: "Kids-Spectacle",
      prescription_required: "No",
      lens_type: "Polarized",
      UV_protection: "100%",},
    { title: "Spectacle", description: "Ray-Ban 9098S Kids Sunglass", price: "₹5290", 
      image: "https://himalayaoptical.com/cdn/shop/files/0RJ9098S__715413__P21__noshad__fr_370x320.jpg?v=1714718178",
      material: "Plastic",
      brand: "Ray-Ban",
      category: "Kids-Sunglasses",
      prescription_required: "Yes",
      lens_type: "Non-Polarized",
      UV_protection: "100%",},
    { title: "Contact Lens", description: "Acuvue Vita For Astigmatism", price: "₹6754",
      image: "https://himalayaoptical.com/cdn/shop/files/0000_35796284020231121093203_370x320.jpg?v=1711872820",
      material: "Plastic",
      brand: "Acuvue Vita",
      category: "Contact Lens",
      prescription_required: "No",
      lens_type: "Polarized",
      UV_protection: "100%",},
    { title: "Contact Lens", description: "Freshlook Colorblends", price: "₹1200", 
      image: "https://himalayaoptical.com/cdn/shop/files/ACUVUE_VITA_FOR_ASTIGMATISM_5_370x320.jpg?v=1694583061",
      material: "Plastic",
      brand: "Ray-Ban",
      category: "Contact Lens",
      prescription_required: "Yes",
      lens_type: "Non-Polarized",
      UV_protection: "100%",},
    { title: "Contact Lens", description: "X-Chrome", price: "₹2500", 
      image: "https://himalayaoptical.com/cdn/shop/products/X-CHROME_1_370x320.jpg?v=1618219232",
      material: "Plastic",
      brand: "Ray-Ban",
      category: "Contact Lens",
      prescription_required: "No",
      lens_type: "Polarized",
      UV_protection: "100%",},
    { title: "Power Sunglasses", description: "Vogue 5438 Spectacle", price: "₹5790", 
      image: "https://himalayaoptical.com/cdn/shop/files/8056262012079_1_370x320.jpg?v=1725260756",
      material: "Plastic",
      brand: "Vogue",
      category: "Sunglasses",
      prescription_required: "Yes",
      lens_type: "Non-Polarized",
      UV_protection: "100%",},
    { title: "Power Sunglasses", description: "Ray-Ban 4187 Powerglass", price: "₹9390", 
      image: "https://himalayaoptical.com/cdn/shop/products/0RB4187__856_13_000A_370x320.jpg?v=1669889852",
      material: "Plastic",
      brand: "Ray-Ban",
      category: "Sunglasses",
      prescription_required: "No",
      lens_type: "Polarized",
      UV_protection: "100%",},
    { title: "Power Sunglasses", description: "Ray-Ban 4386 Powerglass", price: "₹10490", 
      image: "https://himalayaoptical.com/cdn/shop/files/0RB4395__6678T3_000A_370x320.jpg?v=1686654345",
      material: "Plastic",
      brand: "Ray-Ban",
      category: "Sunglasses",
      prescription_required: "Yes",
      lens_type: "Non-Polarized",
      UV_protection: "100%",}

  ];

  const filteredCards = allCards.filter((card) => {
    const price = parseFloat(card.price.replace('₹', '').replace(',', ''));
    
    if (priceFilter.all) return true; 
    if (priceFilter.below3000 && price <= 3000) return true;
    if (priceFilter.between3000And10000 && price > 3000 && price <= 10000) return true;
    if (priceFilter.above10000 && price > 10000) return true;
    
    return false; 
  });

  return (
    <div>
      <div className="collection">
        <img src="https://himalayaoptical.com/cdn/shop/collections/Sunglasses_1890x280.jpg?v=1714111997" alt="Sunglasses Collection" />
      </div>
      <section id="menu" className="menu">
        <div className="container">
          <div className="main-menu">
            <span>Our Glasses</span>
            <h2>Our Glasses</h2>
          </div>

          <div className="price-filter">
            <label>
              <input
                type="checkbox"
                name="all"
                checked={priceFilter.all}
                onChange={handlePriceFilterChange}
              />
              All
            </label>
            <label>
              <input
                type="checkbox"
                name="below3000"
                checked={priceFilter.below3000}
                onChange={handlePriceFilterChange}
              />
              Below ₹3000
            </label>
            <label>
              <input
                type="checkbox"
                name="between3000And10000"
                checked={priceFilter.between3000And10000}
                onChange={handlePriceFilterChange}
              />
              ₹3000 - ₹10000
            </label>
            <label>
              <input
                type="checkbox"
                name="above10000"
                checked={priceFilter.above10000}
                onChange={handlePriceFilterChange}
              />
              Above ₹10000
            </label>
          </div>

          <div className="menu-items">
            {filteredCards.map((card, index) => (
              <div className="menu-card" key={index} onClick={() => handleClick(card)}>
                <img src={card.image} alt={card.description} />
                <div className="menu-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <p className="price">{card.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact/>
     </div>
  );
}

export default Detailpage;
