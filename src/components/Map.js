import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../utils/util";
import "../style/Map.css"

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className={"map container mx-auto"}>
      <LeafletMap center={center} zoom={zoom} maxZoom={2} minZoom={2} boxZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
