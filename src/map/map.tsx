import React, { useState, useEffect, useRef } from 'react';
import { BaseAPILoader } from '../api-loader/api-loader';

export interface BaseMapProps extends google.maps.MapOptions {
  googleMaps?: typeof google.maps;
}

const wrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

export const BaseMap: React.FC<BaseMapProps> = ({ googleMaps, children, ...rest }) => {
  const mapWrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    if (googleMaps && mapWrapper.current) {
      const map = new google.maps.Map(mapWrapper.current, rest);
    }
  }, [googleMaps]);

  return (
    <div style={wrapperStyle}>
      <div ref={mapWrapper} style={containerStyle}>
        124
      </div>
    </div>
  );
};
