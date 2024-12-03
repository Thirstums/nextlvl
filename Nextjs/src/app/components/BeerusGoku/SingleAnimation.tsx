"use client";
import React, { useEffect, useState } from "react";

interface SingleAnimationProps {
  spriteSheetUrl: string; // URL of the sprite sheet
  totalFrames: number; // Number of frames in the sprite sheet row
  frameWidth: number; // Width of each frame
  frameHeight: number; // Height of each frame
  frameSpeed: number; // Time between frames in ms
  loop: boolean; // Whether the animation should loop
  lastFrameWidth?: number; // Optional: new size for the last frame
  lastFrameHeight?: number; // Optional: new size for the last frame
}

const SingleAnimation = ({
  spriteSheetUrl,
  totalFrames,
  frameWidth,
  frameHeight,
  frameSpeed,
  loop,
  lastFrameWidth,
  lastFrameHeight
}: SingleAnimationProps) => {
  const [frame, setFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Track if animation is playing

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setFrame((prevFrame) => {
          const nextFrame = prevFrame + 1;
          if (!loop && nextFrame === totalFrames) {
            clearInterval(interval); // Stop the animation
            return prevFrame; // Stay on the last frame
          }
          return nextFrame % totalFrames; // Loop back to the first frame
        });
      }, frameSpeed);
    } else {
      clearInterval(interval); // Stop the animation when not playing
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isPlaying, loop, frameSpeed]);

  const handleClick = () => {
    if (!isPlaying && !loop) {
      setFrame(0); // Start from the first frame when clicked if not looping
    }
    setIsPlaying(!isPlaying); // Toggle play/pause on click
  };

  // Check if the current frame is the last frame
  const isLastFrame = frame === totalFrames - 1;

  return (
    <div
      onClick={handleClick} // Trigger animation on click
      style={{
        width: `${
          isLastFrame && lastFrameWidth ? lastFrameWidth : frameWidth
        }px`,
        height: `${
          isLastFrame && lastFrameHeight ? lastFrameHeight : frameHeight
        }px`, // Change size for last frame
        backgroundImage: `url(${spriteSheetUrl})`, // Sprite sheet URL passed as a prop
        backgroundPosition: `-${frame * frameWidth}px 0px`, // Dynamically adjust position based on frame
        backgroundSize: "auto", // Ensure the sprite sheet isn't stretched
        cursor: "pointer" // Indicate the area is clickable
      }}
    />
  );
};

export default SingleAnimation;
