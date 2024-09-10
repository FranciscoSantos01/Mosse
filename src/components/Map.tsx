// MapComponent.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon not showing correctly in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src
});

L.Marker.prototype.options.icon = DefaultIcon;

export const MapComponent = () => {
  return (
    <MapContainer center={[-26.826100, -65.201221]} zoom={13} style={{ height: "400px", width: "100%",marginTop:20 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-26.826100, -65.201221]}>
        <Popup>
          Atencion al Cliente
        </Popup>
      </Marker>
      <Marker position={[-26.83047922166047, -65.19509470390398]}>
        <Popup>
         Atencion a Empresas
        </Popup>
      </Marker>
    </MapContainer>
  );
};
