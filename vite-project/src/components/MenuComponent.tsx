

// Menu.tsx
import React, { useState, useEffect } from 'react';
import './Menu.css'; // Import CSS file
import menuItems, { MenuItem } from './menuItems'; // Import menu items data

const Menu: React.FC = () => {
  const [menuItemsData, setMenuItemsData] = useState<MenuItem[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<string>('all');

  useEffect(() => {
    // Set menu items data when component mounts
    setMenuItemsData(menuItems);
  }, []);

  const displayMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <article key={item.id} className="menu-item">
        <img src={item.img} alt={item.title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">${item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>
    ));
  };

  const filterItems = (category: string) => {
    setFilteredCategory(category);
  };

  const filteredMenuItems = filteredCategory === 'all' ? menuItemsData : menuItemsData.filter(item => item.category === filteredCategory);

  const displayMenuButtons = () => {
    const categories = ['all', ...new Set(menuItemsData.map((item) => item.category))];
    return categories.map((category) => (
      <button
        key={category}
        type="button"
        className={category === filteredCategory ? "filter-btn active" : "filter-btn"}
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    ));
  };

  return (
    <section className="menu">
      <div className="title">
        <h2>Book Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">{displayMenuButtons()}</div>
      <div className="section-center">{displayMenuItems(filteredMenuItems)}</div>
    </section>
  );
};

export default Menu;





