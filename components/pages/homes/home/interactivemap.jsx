"use client";
import * as React from "react";
import { useRef, useCallback } from "react";

import Map, { MapRef } from "react-map-gl";

import ControlPanel from "./control-panel";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicHJvd2ViY29kZXIiLCJhIjoiY2x3ZnlwdzdsMXVyNDJpcGFleHQyYjZyOSJ9.PEQE_vIrD4N-xJN3WJF71g";

const initialViewState = {
  latitude: 22.3193,
  longitude: 114.1694,
  zoom: 12,
  bearing: 0,
  pitch: 0,
};

export default function InteractiveMap() {
  const mapRef = useRef();

  const onSelectCity = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
  }, []);

  return (
    <div className="mainmapdata">
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        className="mapboxdata"
      />
      <ControlPanel className="controlpanel" onSelectCity={onSelectCity} />
    </div>
  );
}
