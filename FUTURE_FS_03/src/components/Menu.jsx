import React, { useState } from 'react';
import './Menu.css';
import pastryImg from '../assets/images/pastry.png';

const menuItems = {
  starters: [
    { name: 'Punjabi Samosa', desc: 'Crispy pastry filled with spiced potatoes and peas', price: '₹40' },
    { name: 'Paneer Tikka', desc: 'Cottage cheese marinated in spices and grilled in tandoor', price: '₹150' },
    { name: 'Chicken 65', desc: 'Spicy, deep-fried chicken tossed with curry leaves', price: '₹180' },
    { name: 'Hara Bhara Kebab', desc: 'Healthy pan-fried patties with spinach and green peas', price: '₹190' },
  ],
  mains: [
    { name: 'Butter Chicken', desc: 'Classic tandoori chicken in a rich tomato gravy', price: '₹220' },
    { name: 'Paneer Butter Masala', desc: 'Soft paneer cubes in a creamy, mildly spiced curry', price: '₹200' },
    { name: 'Mutton Rogan Josh', desc: 'Tender lamb slow-cooked with Kashmiri chillies', price: '₹550' },
    { name: 'Dal Makhani', desc: 'Slow-cooked black lentils with cream and butter', price: '₹120' },
  ],
  breads: [
    { name: 'Garlic Naan', desc: 'Tandoor-baked flatbread topped with garlic and butter', price: '₹40' },
    { name: 'Tandoori Roti', desc: 'Whole wheat flatbread baked in a clay oven', price: '₹20' },
    { name: 'Lachha Paratha', desc: 'Multi-layered flaky whole wheat bread', price: '₹55' },
    { name: 'Cheese Kulcha', desc: 'Stuffed bread with melted cheese and herbs', price: '₹70' },
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('mains');

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="menu-header">
          <h2>Our <i>Menu</i></h2>
          <div className="underline center-line"></div>
        </div>

        <div className="menu-tabs">
          <button
            className={`tab-btn ${activeTab === 'starters' ? 'active' : ''}`}
            onClick={() => setActiveTab('starters')}
          >
            Starters
          </button>
          <button
            className={`tab-btn ${activeTab === 'mains' ? 'active' : ''}`}
            onClick={() => setActiveTab('mains')}
          >
            Mains
          </button>
          <button
            className={`tab-btn ${activeTab === 'breads' ? 'active' : ''}`}
            onClick={() => setActiveTab('breads')}
          >
            Breads
          </button>
        </div>

        <div className="menu-content">
          <div className="menu-list">
            {menuItems[activeTab].map((item, index) => (
              <div className="menu-item" key={index}>
                <div className="item-header">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-dots"></span>
                  <span className="item-price">{item.price}</span>
                </div>
                <p className="item-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="menu-image">
            <img
              src={activeTab === 'starters' ? pastryImg : 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000&auto=format&fit=crop'}
              alt={activeTab}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
