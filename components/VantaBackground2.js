// components/VantaBackground.js
"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import * as THREE from "three";

export default function VantaBackground2() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const tryLoadVanta = () => {
      if (
        typeof window !== "undefined" &&
        window.VANTA?.CLOUDS &&
        !vantaEffect &&
        vantaRef.current
      ) {
        const effect = window.VANTA.CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          // Soft red shadows
          speed: 1.2,                 // Smooth speed
          sunColor: 	0x00ccff,         // Golden sun effect
        });
        setVantaEffect(effect);
      }
    };

    const interval = setInterval(() => {
      tryLoadVanta();
    }, 300);

    setTimeout(() => clearInterval(interval), 3000);

    return () => {
      clearInterval(interval);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Script src="/js/vanta.clouds.min.js" strategy="afterInteractive" />
      <div
        ref={vantaRef}
        style={{
          width: "100vw",
          height: "48vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </>
  );
}
