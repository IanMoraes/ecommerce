import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

export default function Rating({ value }: { value: 1 | 2 | 3 | 4 | 5 }) {
  const stars = Array(5).fill(0).map((_, index) => {
    if (index < value) {
      return <IoMdStar key={index} />;
    } else {
      return <IoMdStarOutline key={index} />;
    }
  });

  return <div className="flex">{stars}</div>;
}
