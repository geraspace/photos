import React from "react";

// PHOTOS ROUTE
var myPhotos_route = "images/my_photos/";

export default function Card(props) {
  
  // CONDITIONAL RENDERING: LABEL FOR PHOTO
  let badgeText;
  if (props.available === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "online") {
    badgeText = "ONLINE";
  }

  return (

    <div className="card--section">

      {/* IF badgeText, LABEL IS SHOWN */}
      {badgeText && <div className="available"> {badgeText} </div>}

      {/* SHOW PHOTO */}
      <img className="card--image" src={myPhotos_route + props.img} />

      {/* RATING, # OF REVIEWS AND LOCATION */}
      <div className="card--stats">
        <span>
          <img className="star--image" src="images/star.gif" />
        </span>
        <span>{props.stars}</span>
        <span>({props.review})</span>
        <span>{props.location}</span>
      </div>

      {/* TITLE AND SUBTITLE OF EACH CARD */}
      <p className="card--title">{props.title}</p>
      <p className="card--subtitle">{props.subtitle}</p>

    </div>

  );
}
