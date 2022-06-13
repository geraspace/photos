import React from "react";
const PhotosSlideshow_route = "images/images_slideshow/";
const LocationLogo = "images/LocationLogo.png";

export default function Photo(props) {
  return (
    <div className="allPhotos">
      <img className="slideshowImage" src={PhotosSlideshow_route + props.src} />
      <div className="seeLocation">
        <img className="locationLogo" src={LocationLogo}></img>
        <a className="linkLocation" href={props.location}>
          {" "}
          <p className="photoSlideshowTitle">See on Google Maps</p>
        </a>
      </div>
    </div>
  );
}
