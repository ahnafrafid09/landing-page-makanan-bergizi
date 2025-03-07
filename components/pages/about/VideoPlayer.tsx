import Image from "next/image";
import { Play } from "lucide-react";

const VideoPlayer = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="relative w-full">
        <Image
          src="/assets/video.png"
          alt="Fake Video"
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-full rounded-lg"
        />

        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-10 h-10 text-darken fill-darken" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
