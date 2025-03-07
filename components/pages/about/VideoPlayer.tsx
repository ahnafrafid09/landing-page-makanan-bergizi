"use client";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container mx-auto mt-24">
      <div className="relative w-full">
        <video
          ref={videoRef}
          src="/assets/video.mp4"
          className="w-full h-[700px] rounded-lg"
          controls={false}
          loop
        ></video>

        {/* Tombol Play/Pause */}
        <button
          className="absolute inset-0 flex items-center justify-center"
          onClick={togglePlayPause}
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            {isPlaying ? (
              <Pause className="w-10 h-10 fill-darken text-darken cursor-pointer" />
            ) : (
              <Play className="w-10 h-10 fill-darken text-darken cursor-pointer" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
