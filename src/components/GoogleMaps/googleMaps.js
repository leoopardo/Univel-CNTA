import React from 'react'
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '300px',
  height: '250px'
};

const center = {
  lat: -24.939933400669733,
  lng: -53.504414407196635
};

export function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAdnEoC4I15BB8IvcZDZP6q8x5o-_CWoEw"
  })

  const [map, setMap] = useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={{ lat: -24.939933400669733, lng: -53.504414407196635}} />
      </GoogleMap>
  ) : <></>
}
