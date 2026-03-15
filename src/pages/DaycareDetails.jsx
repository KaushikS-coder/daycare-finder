import React from "react";
import { useParams } from "react-router-dom";
import daycares from "../data/daycares";
import "../App.css";

function DaycareDetails() {

  const { id } = useParams();
  const daycare = daycares.find(d => d.id === parseInt(id));

  if(!daycare) return <h2>Daycare not found</h2>;

  return (

    <div className="details-container">

      <h1>{daycare.name}</h1>

      <p className="location">📍 {daycare.location}</p>

      <div className="rating">
        ⭐ {daycare.rating} ({daycare.reviews} Reviews)
      </div>

      <p className="description">{daycare.description}</p>

      <div className="images">

        {daycare.images.map((img,index)=>(
          <img key={index} src={img} alt="daycare"/>
        ))}

      </div>

      <div className="info-grid">

        <div className="info-box">
          <h4>Hours</h4>
          <p>{daycare.hours}</p>
        </div>

        <div className="info-box">
          <h4>Age Group</h4>
          <p>{daycare.age}</p>
        </div>

        <div className="info-box">
          <h4>Staff Ratio</h4>
          <p>{daycare.ratio}</p>
        </div>

        <div className="info-box">
          <h4>Capacity</h4>
          <p>{daycare.capacity}</p>
        </div>

      </div>

      <h2>Services</h2>

      <ul className="services">

        {daycare.services.map((service,i)=>(
          <li key={i}>✔ {service}</li>
        ))}

      </ul>

      <p className="price">{daycare.price}</p>

    </div>

  );
}

export default DaycareDetails;