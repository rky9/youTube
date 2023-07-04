import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  //const { channelTitle, title, thumbnails } = snippet;
  console.log(statistics);

  return (
    <div className="p-2 m-2 shadow-lg w-64">
      <img
        className="rounded-lg"
        src={snippet?.thumbnails?.medium.url}
        alt="img"
      />

      <ul>
        <li className="font-bold py-2"> {snippet?.title}</li>
        <li>{snippet?.channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
