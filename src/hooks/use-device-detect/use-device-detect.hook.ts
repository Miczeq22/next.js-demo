import window from 'global';
import React from 'react';

interface DeviceDetectData {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}

export const useDeviceDetect = () => {
  const isClient = typeof window === 'object';

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  };

  const [windowSize, setWindowSize] = React.useState(getSize);
  const [deviceData, setDeviceData] = React.useState<DeviceDetectData>({
    isMobile: false,
    isDesktop: false,
    isTablet: false,
  });

  React.useEffect(
    () => {
      if (!isClient) {
        return;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  React.useEffect(() => {
    if (windowSize.width <= 768) {
      setDeviceData({
        isMobile: true,
        isDesktop: false,
        isTablet: false,
      });
    } else if (windowSize.width >= 768 && windowSize.width <= 1100) {
      setDeviceData({
        isMobile: false,
        isDesktop: false,
        isTablet: true,
      });
    } else {
      setDeviceData({
        isMobile: false,
        isDesktop: true,
        isTablet: false,
      });
    }
  }, [windowSize.width]);

  return deviceData;
};
