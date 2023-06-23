import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      <iframe
        width="900"
        height="500"
        title="Youtube video player"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
      ></iframe>

      <div>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
