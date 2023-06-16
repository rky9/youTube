import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null; //Early Return patern
  return (
    <div className="w-48 p-5 shadow-lg">
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="">
        <li>Movie</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="">
        <li>Movie</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
