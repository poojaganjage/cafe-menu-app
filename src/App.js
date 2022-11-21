import {useState} from 'react';
import Category from './Category';
import Menu from './Menu';
import menus from './data';
import './App.css';

//const allCategories = ['all', 'breakfast', 'lunch', 'shakes'];
const allCategories = ['all', ...new Set(menus.map((menu) => menu.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menus);
  //const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(menus);
      return;
    }
    const newItems = menus.filter((menu) => menu.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        {/* <Category categories={categories} filterItems={filterItems} /> */}
        <Category categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
export default App;
