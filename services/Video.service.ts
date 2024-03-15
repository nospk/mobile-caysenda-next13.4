import type { Video } from "@/types/video";
const getVideoList = async () => {
  const videos: Video[] = [
    {
      type: "video",
      thumbnail: "https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800",
      name: "Kẹo dẻo",
      productId: 123213132,
      detail: "Kẹo dẻo mềm thơm ngon",
    },
    {
      type: "video",
      thumbnail: "https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800",
      name: "Kẹo dẻo",
      productId: 123234312,
      detail: "Kẹo dẻo mềm thơm ngon",
    },
  ];

  return videos;
};

const VideoService = {
  getVideoList,
};
export default VideoService;
