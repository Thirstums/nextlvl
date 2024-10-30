"use client";

import React, { useState, useEffect } from "react";


interface SpriteProps {
  spriteUrl: string;
  frameWidth: number;
  frameHeight: number;
  frameCount: number;
  row: number;
  frameDuration?: number; // duration per frame in ms
}

const Sprite: React.FC<SpriteProps> = ({
  spriteUrl,
  frameWidth,
  frameHeight,
  frameCount,
  row,
  frameDuration = 100
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frameCount);
    }, frameDuration);

    return () => clearInterval(interval);
  }, [frameCount, frameDuration]);

  const offsetX = -currentFrame * frameWidth;
  const offsetY = -row * frameHeight;

  return (
    <div
      className="overflow-hidden"
      style={{
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        backgroundImage: `url(${spriteUrl})`,
        backgroundPosition: `${offsetX}px ${offsetY}px`,
        backgroundRepeat: "no-repeat"
      }}
    />
  );
};

interface FightAnimationProps {
  gokuSpriteUrl: string;
  beerusSpriteUrl: string;
  frameWidth: number;
  frameHeight: number;
  frameCount: number;
  frameDuration?: number;
}

const FightAnimation: React.FC<FightAnimationProps> = ({
  gokuSpriteUrl,
  beerusSpriteUrl,
  frameWidth,
  frameHeight,
  frameCount,
  frameDuration = 100
}) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      {/* Goku */}
      <div className="absolute left-1/4">
        <Sprite
          spriteUrl={gokuSpriteUrl}
          frameWidth={frameWidth}
          frameHeight={frameHeight}
          frameCount={frameCount}
          row={1} // Row number to display Goku’s fighting animation
          frameDuration={frameDuration}
        />
      </div>

      {/* Beerus */}
      <div className="absolute right-1/4">
        <Sprite
          spriteUrl={beerusSpriteUrl}
          frameWidth={frameWidth}
          frameHeight={frameHeight}
          frameCount={frameCount}
          row={1} // Row number to display Beerus’s fighting animation
          frameDuration={frameDuration}
        />
      </div>
    </div>
  );
};

export default FightAnimation;
