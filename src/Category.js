import React from 'react';

function Category({categories, filterItems}) {
  return (
    <div className='btn-containers'>
        {categories.map((category, index) => {
            return (
                <button 
                    key={index} 
                    type='button' 
                    className='filter-btn' 
                    onClick={() => filterItems(category)}
                >
                    {category}
                </button>
            );
        })}
    </div>
  );
}
export default Category;
