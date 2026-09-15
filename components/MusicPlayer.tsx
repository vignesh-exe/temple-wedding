"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.45;

    let interactionStarted = false;

    const removeInteractionListeners = () => {
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
      window.removeEventListener("scroll", startOnInteraction);
    };

    const startOnInteraction = async () => {
      if (interactionStarted) return;

      interactionStarted = true;

      try {
        if (audio.paused) {
          await audio.play();
          setIsPlaying(true);
        }
      } catch {
        // Playback can still be blocked by the browser.
        setIsPlaying(false);
        interactionStarted = false;
        return;
      }

      removeInteractionListeners();
    };

    // Try to autoplay immediately when the website loads.
    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);

        // Autoplay worked, so no interaction listeners are needed.
        removeInteractionListeners();
      } catch {
        // Audible autoplay was blocked by the browser.
        // Wait silently for the first user interaction.
        setIsPlaying(false);

        window.addEventListener("click", startOnInteraction);
        window.addEventListener("touchstart", startOnInteraction);
        window.addEventListener("keydown", startOnInteraction);
        window.addEventListener("scroll", startOnInteraction);
      }
    };

    startMusic();

    return () => {
      removeInteractionListeners();
      audio.pause();
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-music.wav"
        preload="auto"
        loop
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? "Pause wedding music"
            : "Play wedding music"
        }
        className="
          fixed
          right-4
          bottom-4
          z-[100]
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/[0.08]
          text-white
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-105
          hover:bg-white/[0.14]
          active:scale-95
          sm:right-6
          sm:bottom-6
        "
      >
        <span className="relative flex h-4 w-4 items-center justify-center">
          {isPlaying ? (
            <span className="flex items-end gap-[2px]">
              <span className="h-2 w-[2px] animate-pulse rounded-full bg-white" />

              <span className="h-3.5 w-[2px] animate-pulse rounded-full bg-white [animation-delay:150ms]" />

              <span className="h-2.5 w-[2px] animate-pulse rounded-full bg-white [animation-delay:300ms]" />

              <span className="h-3 w-[2px] animate-pulse rounded-full bg-white [animation-delay:450ms]" />
            </span>
          ) : (
            <span className="ml-[1px] text-[11px] leading-none">
              ▶
            </span>
          )}
        </span>
      </button>
    </>
  );
}