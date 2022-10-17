import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import dataGeo from "../../../data/geoJson/0301100100_UNITATS_ADM_POLIGONS.json";

function Map() {
  const hoodStyle = {
    fillColor: "blue",
    fillOpacity: 0.8,
    color: "black",
    weight: 2,
    dashArray: 1,
  };

  return (
    // <MapContainer center={[41.390205, 2.154007]} zoom={13} scrollWheelZoom={false}>
    //   {/* <GeoJSON style={{ hoodStyle }} data={dataGeo.features}></GeoJSON> */}
    // </MapContainer>

    <MapContainer center={[41.390205, 2.154007]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON style={hoodStyle} data={dataGeo.features}></GeoJSON>
    </MapContainer>
  );
}
export default Map;
