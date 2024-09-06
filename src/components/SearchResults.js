import React from "react";
import './SearchResults.css';
import { useLocation } from "react-router-dom";

function SearchResults() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query") || "";
      
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

  
  const filteredCards = allCards.filter(card =>
    card.title.toLowerCase().includes(query.toLowerCase()) ||
    card.description.toLowerCase().includes(query.toLowerCase())
  );

    
  return (
    <div>
      <div className="menu-items">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div className="menu-card" key={index}>
              <img src={card.image} alt={card.description} />
              <div className="menu-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <p className="price">{card.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
