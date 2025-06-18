import React from "react";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import Lottie from "lottie-react";

const LottieComponent = ({
  source,
  width,
  height,
  autoPlay = true,
  loop = true,
  style,
}) => {
  const { width: screenWidth } = useWindowSize();

  // Adjust container for small screens and keep aspect ratio
  const containerMaxWidth = screenWidth
    ? Math.min(width, Math.max(screenWidth - 40, 0))
    : width;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: containerMaxWidth,
        margin: "0 auto",
        aspectRatio: `${width}/${height}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <Lottie
        animationData={source}
        loop={loop}
        autoplay={autoPlay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

LottieComponent.propTypes = {
  source: PropTypes.object.isRequired, // lottie-react uses JSON object
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  style: PropTypes.object,
};

export default LottieComponent;
