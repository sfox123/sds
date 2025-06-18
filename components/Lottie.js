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

  // Adjust size based on screen width
  const scale = width > screenWidth ? screenWidth / width : 1;
  const adjustedWidth = width * scale;
  const adjustedHeight = height * scale;

  return (
    <div
      style={{
        width: adjustedWidth,
        height: adjustedHeight,
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
        style={{ width: adjustedWidth, height: adjustedHeight }}
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
