import React from "react";
import "./Contact.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
require("dotenv").config();
const Contact = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 33.9547, lng: -118.212 }}
      >
        <Marker position={{ lat: 33.9547, lng: -118.212 }} />
      </GoogleMap>
    ))
  );

  const { REACT_APP_GOOGLE_MAP_KEY } = process.env;

  return (
    <div className="contactSection section">
      <div className="contactContainer">
        <h1>Contact Me</h1>
        <div className="contactInfo">
          <div className="contactLabel">
            <p>Instagram:</p>
            <p>Email:</p>
            <p>Phone:</p>
          </div>
          <div className="contactDesc">
            <div>
              <a
                href="http://instagram.com/lashempressla"
                target="_blank"
                rel="noreferrer"
              >
                @lashempressla
              </a>
            </div>
            <div>
              <a
                href="mailto:lashempressla@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                lashempressla@gmail.com
              </a>
            </div>
            <div>
              <a href="tel:562-850-3423">(562) 850-3423</a>
            </div>
          </div>
        </div>
        <div className="map">
          <MapWithAMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAP_KEY}&v=3.exp&pbraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            className="map"
          />
          <p className="small">*Not Exact Location</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
