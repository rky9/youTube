import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null; //Early Return patern
  return (
    <div className="p-5 shadow-lg w-60">
      <ul className="">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
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
