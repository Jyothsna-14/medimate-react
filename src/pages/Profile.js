import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile saved successfully!");
  };

  const handleLogout = () => {
    alert("You have been logged out!");
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      <div className="profile-card">
        <form onSubmit={handleSave} className="profile-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={profile.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={profile.phone}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={profile.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={profile.address}
            onChange={handleChange}
          />
          <button type="submit" className="save-btn">
            Save Profile
          </button>
        </form>
      </div>

      <div className="booking-card">
        <h3>Booking History</h3>
        <p>No bookings yet.</p>
      </div>

      <div className="logout-card">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;