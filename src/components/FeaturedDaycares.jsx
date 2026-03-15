import React from "react";
import { Link } from "react-router-dom";
import daycares from "../data/daycares";
import "../App.css";

function FeaturedDaycares() {
  return (
    <div className="container">

      <h1 className="title">Daycare Finder</h1>
      <h2 className="subtitle">Featured Daycares</h2>

      <div className="card-grid">

        {daycares.map((daycare) => (
          <div key={daycare.id} className="card">

            <img src={daycare.images[0]} alt="daycare"/>

            <h3>{daycare.name}</h3>

            <div className="card-info">
              ⭐ {daycare.rating}
              <span>📍 {daycare.distance}</span>
            </div>

            <p className="price">{daycare.price}</p>

            <Link to={`/details/${daycare.id}`}>
              <button className="btn">View Details</button>
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default FeaturedDaycares;