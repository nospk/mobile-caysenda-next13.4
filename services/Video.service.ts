import type { Video } from "@/types/video";
const getVideoList = async () => {
  const videos:Video[] = [
    {
      type: "video",
      data: {
        image: "",
        name: "",
        productId: 12321312,
        detail: ""
      },
    },
    {
      type: "video",
      data: {
        image: "",
        name: "",
        productId: 12323312,
        detail: ""
      },
    },
  ];

  return videos;
};

const VideoService = {
  getVideoList,
};
export default VideoService;
