import React, { useState } from "react";
import "./Medicines.css";

function Medicines() {
  const [search, setSearch] = useState("");

  const healthConditions = [
    { name: "Diabetes Care", icon: "💉" },
    { name: "Cardiac Care", icon: "❤️" },
    { name: "Pain Relief", icon: "🩹" },
    { name: "Dental care", icon: "🦷" },
    { name: "Skin & Hair", icon: "💇" },
    { name: "Respiratory", icon: "🫁" },
    { name: "Stomach Care", icon: "🥗" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <div className="medicines-container">
      {/* Header */}
      <div className="medicines-header">
        <h2>Buy Medicines and Essentials</h2>
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search for medicines, health products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Browse by Health Conditions */}
      <div className="medicines-section">
        <h3>Browse by Health Conditions</h3>
        <div className="health-grid">
          {healthConditions.map((item, index) => (
            <div key={index} className="health-card">
              <div className="health-icon">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Medicines;