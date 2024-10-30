"use client";


import FightAnimation from "./FightAnimation";

export default function FightPage() {
  return (
    <FightAnimation
      gokuSpriteUrl="/public/DragonballSprites/GokuSuperSaiyanBlue.png"
      beerusSpriteUrl="/public/DragonballSprites/Beerus.png"
      frameWidth={100}  // Adjust based on actual frame size
      frameHeight={100} // Adjust based on actual frame size
      frameCount={10}   // Number of frames in the fighting sequence
      frameDuration={100} // Duration per frame in ms
    />
  );
}
