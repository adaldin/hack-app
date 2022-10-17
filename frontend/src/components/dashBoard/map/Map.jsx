import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import dataGeo from "../../../data/geoJson/0301100100_UNITATS_ADM_POLIGONS.json";

function Map() {
  const hoodStyle = {
    fillColor: "blue",
    fillOpacity: 0.2,
    color: "blue",
    weight: 1,
    dashArray: 1,
  };

  function handlefeature(barri, layer) {
    const barriName = barri.properties.NOM;
    layer.bindPopup(barriName);

    layer.on({
      click: (event) => {
        console.log(event);
      },
    });
  }

  return (
    <MapContainer center={[41.390205, 2.154007]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON style={hoodStyle} data={dataGeo.features} onEachFeature={handlefeature}></GeoJSON>
    </MapContainer>
  );
}
export default Map;
