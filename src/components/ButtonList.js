import React from "react";
import Button from "./Button";

const list = ["All", "Game"];
function ButtonList() {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Game" />
      <Button name="Song" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Cooking" />
    </div>
  );
}

export default ButtonList;
