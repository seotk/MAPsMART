import MainBanner1 from "./MainBanner1";
import MainBanner2 from "./MainBanner2";
import MainList from "./MainList";
// ========================================================

import { useState, useEffect } from "react";
// ========================================================

function Main() {
  const [isVisible, setIsVisible] = useState(true);
  const [delay, setDelay] = useState(3000);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setDelay(0);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  // useEffect(() => {
  //   if (isVisible) {
  //     const interval = setInterval(() => {
  //       setOpacity((prevOpacity) => prevOpacity - 0.001);
  //     }, 3);
  //     return () => clearInterval(interval);
  //   } else {
  //     setOpacity(1);
  //   }
  // }, [isVisible]);

  return (
    <section className="Main">
      {isVisible && (
        <div style={{ opacity }}>
          <MainBanner1 />
        </div>
      )}
      {!isVisible && (
        <div style={{ opacity }}>
          <MainBanner2 />
        </div>
      )}
    </section>
  );
}

export default Main;
