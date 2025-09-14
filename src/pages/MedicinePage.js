import React from "react";
import { useParams } from "react-router-dom";
import medicines from "../data/medicines";
import "./MedicinesPage.css";

export default function MedicinesPage() {
  const { category } = useParams(); // get category from URL
  const categoryData = medicines[category] || [];

  return (
    <div className="medicines-container">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Care</h2>
      <div className="medicines-grid">
        {categoryData.length > 0 ? (
          categoryData.map((item) => (
            <div key={item.id} className="medicine-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button className="btn">Add</button>
              <button className="btn buy">Buy</button>
            </div>
          ))
        ) : (
          <p>No medicines found in this category.</p>
        )}
      </div>
    </div>
  );
}