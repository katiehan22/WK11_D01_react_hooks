import React from 'react'

function ProductListItem({ product, isSelected, onClick }) {
  console.log("re-render Product List Item")
  return (
    <div className={`product-list-item ${isSelected ? ' selected' : ''}`}>
      <img className="product-list-item-photo"
          src={product.photo.filename}
          alt={`${product.name}`}
      />
      <button onClick={onClick}>{product.name}</button>
    </div>
  )
}

export default ProductListItem;
