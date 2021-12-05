import React, { useEffect, useState, useRef } from 'react';
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';

export interface BaseAPILoaderProps extends LoaderOptions {
  /**
   * 加载效果组件
   * */
  loading?: React.ReactNode;
  /**
   * 资源加载完成
   */
  onComplete?: (googleMaps: typeof google.maps) => void;
}

export const BaseAPILoader: React.FC<BaseAPILoaderProps> = ({ loading, children, onComplete, ...rest }) => {
  const loader = useRef<Loader>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    loader.current = new Loader(rest);

    loader.current
      .load()
      .then((google) => {
        setLoaded(false);
        setSuccess(true);
        onComplete?.(google.maps);
      })
      .catch(() => {
        setLoaded(false);
      });
  }, [JSON.stringify(rest)]);

  if (loaded && loading) {
    return <>{loading}</>;
  }

  return <>{success && children}</>;
};
