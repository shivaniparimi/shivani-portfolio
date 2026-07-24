"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Music } from "lucide-react";

const YOUTUBE_VIDEO_ID = "VzAjXdBJsEc";
const ALBUM_ART_SRC =
  "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02175c577a61aa13d4fb4b6534";

type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
};

type YTPlayerState = {
  PLAYING: number;
  PAUSED: number;
  ENDED: number;
};

type YTNamespace = {
  Player: new (
    element: HTMLElement,
    options: {
      height: string;
      width: string;
      videoId: string;
      playerVars?: Record<string, number>;
      events?: {
        onReady?: () => void;
        onStateChange?: (e: { data: number }) => void;
      };
    }
  ) => YTPlayer;
  PlayerState: YTPlayerState;
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [artworkFailed, setArtworkFailed] = useState(false);
  const playerHostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    function createPlayer() {
      if (playerRef.current || !playerHostRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(playerHostRef.current, {
        height: "1",
        width: "1",
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: { autoplay: 0, controls: 0 },
        events: {
          onStateChange: (e) => {
            setIsPlaying(e.data === window.YT!.PlayerState.PLAYING);
          },
        },
      });
    }

    if (window.YT) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
      if (!document.getElementById("youtube-iframe-api")) {
        const script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  const handleToggle = () => {
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo?.();
    } else {
      player.playVideo?.();
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        {/*
          OLD VINYL DISC DESIGN (kept for reference in case it's revisited)

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-full shadow-lg">
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={
                isPlaying
                  ? { repeat: Infinity, duration: 2.8, ease: "linear" }
                  : { duration: 0.4, ease: "easeOut" }
              }
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <defs>
                  <radialGradient id="discGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#166534" />
                    <stop offset="100%" stopColor="#052e16" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="url(#discGradient)" />
                {GROOVE_RADII.map((r, i) => (
                  <circle
                    key={r}
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke={i % 2 === 0 ? "#166534" : "#052e16"}
                    strokeWidth="1.6"
                    strokeOpacity={0.8}
                  />
                ))}
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#fefce8"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeOpacity={0.5}
                  strokeDasharray="50 400"
                  transform="rotate(-135 50 50)"
                />
              </svg>

              <div className="absolute inset-[37%] rounded-full bg-amber-50 border-4 border-green-900 shadow-inner" />

              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <circle cx="50" cy="50" r="4" fill="black" fillOpacity="0.9" />
              </svg>
            </motion.div>
          </div>

          GROOVE_RADII constant: const GROOVE_RADII = [18, 22, 26, 30, 34, 38, 42, 46];
        */}

        <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden shadow-md">
          {!artworkFailed ? (
            <Image
              src={ALBUM_ART_SRC}
              alt="Swimming album cover"
              fill
              sizes="96px"
              className="object-cover"
              onError={() => setArtworkFailed(true)}
            />
          ) : (
            <div className="w-full h-full bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center">
              <Music className="text-neutral-500 dark:text-neutral-400" size={28} />
            </div>
          )}
        </div>

        <div className="flex-1 font-mono min-w-0">
          <p className="text-neutral-900 dark:text-white font-semibold truncate">
            Come Back to Earth
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate">
            Mac Miller &middot; Swimming
          </p>
        </div>

        <button
          onClick={handleToggle}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="w-10 h-10 rounded-full border-2 border-green-800 dark:border-green-400 text-green-800 dark:text-green-400 flex items-center justify-center shrink-0 hover:bg-green-800 dark:hover:bg-green-400 hover:text-white dark:hover:text-neutral-900 hover:scale-110 active:scale-95 transition-all"
        >
          {isPlaying ? (
            <Pause size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" className="ml-0.5" />
          )}
        </button>
      </div>

      <div
        ref={playerHostRef}
        className="fixed left-[-9999px] top-[-9999px] w-px h-px overflow-hidden"
        aria-hidden="true"
      />
    </div>
  );
}
