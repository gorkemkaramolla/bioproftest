import React from "react";

type Props = {
  imgSrc: string;
};

const SquareBoard: React.FC<Props> = ({ imgSrc }) => {
  return (
    <a className="flex items-center justify-center" href="">
      <img
        style={{ width: "95%" }}
        className="rounded-sm shadow-4xl "
        src={imgSrc}
        alt=""
      />
    </a>
  );
};

export default SquareBoard;
