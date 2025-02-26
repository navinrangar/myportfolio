/* eslint-disable react/display-name */
import React, { useState, useEffect } from "react";

export const withScreenXY = (Component) => {
  return (props) => {
    const [screenXY, setScreenXY] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      const handleResize = () => {
        setScreenXY({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      if (typeof window !== "undefined") {
        handleResize();
        window.addEventListener("resize", handleResize);
      }

      return () => window.removeEventListener("resize", handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} screenXY={screenXY} />;
  };
};
