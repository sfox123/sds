"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

const ScrollLottie = ({
  animationData,
  width = 920,
  height = 1080,
  className = "",
}) => {
  const containerRef = useRef(null);
  const lottieRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height + windowHeight;
      const visible = Math.min(Math.max(windowHeight - rect.top, 0), total);
      const progress = visible / total;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      const totalFrames = lottieRef.current.getDuration(true);
      const frame = Math.floor(scrollProgress * (totalFrames - 1));
      lottieRef.current.goToAndStop(frame, true);
    }
  }, [scrollProgress]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        maxWidth: width,
        margin: "0 auto",
        aspectRatio: `${width}/${height}`,
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={false}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ScrollLottie;
