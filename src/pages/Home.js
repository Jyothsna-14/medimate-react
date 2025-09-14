import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const categories = [
  {
    name: "Diabetes Care",
    path: "/medicines?category=diabetes",
    image: "https://source.unsplash.com/600x400/?diabetes,medical"
  },
  {
    name: "Cardiac Care",
    path: "/medicines?category=cardiac",
    image: "https://source.unsplash.com/600x400/?heart,cardiac"
  },
  {
    name: "Dental Care",
    path: "/medicines?category=dental,dentist",
    image: "https://source.unsplash.com/600x400/?dental,dentist"
  },
  {
    name: "Skin & Hair Care",
    path: "/medicines?category=skin",
    image: "https://source.unsplash.com/600x400/?skin,beauty,hair"
  },
  {
    name: "Respiratory",
    path: "/medicines?category=respiratory",
    image: "https://source.unsplash.com/600x400/?lungs,respiratory"
  },
  {
    name: "Stomach Care",
    path: "/medicines?category=stomach",
    image: "https://source.unsplash.com/600x400/?stomach,digestion"
  },
];


  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Empowering Patients With Expert Advice</h1>
          <p>
            Connect with Doctor consultants online. If needed, receive prescribed
            medicines delivered directly to you.
          </p>
          <Link to="/consultancy">
            <button className="btn">Start Consultancy</button>
          </Link>
        </div>
      </div>

      {/* Browse by Health Conditions */}
      <section className="conditions">
        <h2>Browse by Health Conditions</h2>
        <div className="conditions-grid">
          {categories.map((cat, index) => (
            <Link to={cat.path} key={index} className="condition-card">
              <img src={cat.image} alt={cat.name} />
              <p>{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;