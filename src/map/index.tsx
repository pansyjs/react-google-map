import React, { useState, useEffect } from 'react';
import { MapContext } from '../context';
import { BaseAPILoader, BaseAPILoaderProps } from '../api-loader/api-loader';
import { BaseMap, BaseMapProps } from './map';

export interface MapProps extends Omit<BaseAPILoaderProps, 'onComplete'>, Omit<BaseMapProps, 'googleMaps'> {}

export const Map: React.FC<MapProps> = ({
  apiKey,
  channel,
  client,
  nonce,
  region,
  retries,
  loading,
  version,
  mapIds,
  url,
  language,
  libraries,
  children,
  ...rest
}) => {
  const [map, setMap] = useState<google.maps.Map>();
  const [googleMaps, setGoogleMaps] = useState<typeof google.maps>();

  useEffect(() => {}, []);

  const handleComplete = (maps: typeof google.maps) => {
    setGoogleMaps(maps);
  };

  return (
    <MapContext.Provider
      value={
        {
          googleMaps,
        } as any
      }
    >
      <BaseAPILoader
        apiKey={apiKey}
        channel={channel}
        client={client}
        version={version}
        libraries={libraries}
        language={language}
        region={region}
        mapIds={mapIds}
        url={url}
        nonce={nonce}
        retries={retries}
        loading={loading}
        onComplete={handleComplete}
      >
        <BaseMap {...rest} googleMaps={googleMaps} />
      </BaseAPILoader>
    </MapContext.Provider>
  );
};
