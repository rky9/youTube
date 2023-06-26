const GOOGLE_API_KEY = "AIzaSyCXsjH6OpcjqY6Oriay1C-W-nIGBdpUAVc";
//https://youtube.googleapis.com/youtube/v3/videos?key=[YOUR_API_KEY] HTTP/1.1
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;
