import React from "react";

type Props = {
  imgSrc: string;
};

const SocialMediaSquare = (props: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverStyles = {
    filter: isHovered ? "brightness(50%)" : "none",
    transition: "filter 1s",
  };

  return (
    <div className=" border-2 mx-1 hover:cursor-pointer lg:block hidden">
      <img
        className=" w-96 h-100"
        src={props.imgSrc}
        alt=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={hoverStyles}
      />
    </div>
  );
};

export default SocialMediaSquare;
