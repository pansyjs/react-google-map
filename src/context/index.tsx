import React from 'react';

export interface MapContextProps {
  map: google.maps.Map;
  googleMaps: typeof google.maps;
}

export const MapContext = React.createContext<MapContextProps>({} as MapContextProps);

export const useMap = () => {
  return React.useContext(MapContext);
};
