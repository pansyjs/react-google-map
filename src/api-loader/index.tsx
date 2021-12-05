import React, { useState } from 'react';
import { BaseAPILoader, BaseAPILoaderProps } from './api-loader';
import { MapContext, MapContextProps } from '../context';

export const APILoader: React.FC<BaseAPILoaderProps> = (props) => {
  const [googleMaps, setGoogleMaps] = useState<typeof google.maps>();

  const handleComplete = (maps) => {
    console.log(maps);
    setGoogleMaps(maps);
  };

  return (
    <MapContext.Provider
      value={
        {
          googleMaps,
        } as MapContextProps
      }
    >
      <BaseAPILoader {...props} onComplete={handleComplete} />
    </MapContext.Provider>
  );
};
