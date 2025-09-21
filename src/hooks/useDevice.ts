import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

const getDeviceType = (width: number): DeviceType => {
  if (width < 768) return "mobile"; 
  if (width >= 768 && width < 1024) return "tablet"; 
  return "desktop";
};

export const useDeviceType = (): DeviceType => {
  const [device, setDevice] = useState<DeviceType>(
    getDeviceType(typeof window !== "undefined" ? window.innerWidth : 1200)
  );

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
