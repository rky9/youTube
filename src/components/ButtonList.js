import React from "react";
import Button from "./Button";
import Slider from "react-slick";

const list = ["All", "Game"];
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const filterButtonList = [
  "All",
  "Music",
  "Mixes",
  "Live",
  "News",
  "Sales",
  "Bollywood",
  "Watched",
  "Music",
  "Mixes",
  "Live",
  "News",
  "Sales",
  "Bollywood",
  "Watched",
  "Live",
  "News",
  "Sales",
  "Bollywood",
  "Watched",
];
const topHeaderButtons = filterButtonList.map((b) => (
  <div className=" border-x-4 border-white">
    <Button name={b} />
  </div>
));
function ButtonList() {
  return (
    <div className="w-[1100px] mt-4">
      <Slider {...settings}>{topHeaderButtons}</Slider>
    </div>
  );
}

export default ButtonList;
