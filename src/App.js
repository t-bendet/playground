import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./app.css";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("./images/marker-icon-2x.png"),
  iconUrl: require("./images/marker-icon.png"),
  shadowUrl: require("./images/marker-shadow.png"),
});

const App = () => {
  return (
    <div>
      <MapContainer center={[31.0461, 34.8516]} zoom={9}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[31.253, 34.7915]}>
          <Popup>Hello, Beer-sheva</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;
