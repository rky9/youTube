import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/chatSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex">
        <div>
          <iframe
            width="900"
            height="500"
            title="Youtube video player"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <div>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
