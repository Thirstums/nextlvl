"use client";
import React from "react";
import SingleAnimation from "./SingleAnimation"; // Import the single animation component

const FightAnimation = () => {
  return (
    /*Goku Relocating animation*/
    <div>
      <SingleAnimation
        spriteSheetUrl="/DragonballSprites/GokuRow8.png"
        totalFrames={8}
        frameWidth={107}
        frameHeight={172}
        frameSpeed={200}
        loop={false} // Loop the animation
        lastFrameWidth={120} // Adjust size for the last frame
        lastFrameHeight={180} // Adjust size for the last frame
      />

    

      <SingleAnimation
        spriteSheetUrl="/DragonballSprites/BeerusRow8.png"
        totalFrames={10}
        frameWidth={100}
        frameHeight={150}
        frameSpeed={150}
        loop={true} // Do not loop
        lastFrameWidth={130} // Adjust size for the last frame
        lastFrameHeight={160} // Adjust size for the last frame
      />
    </div>
  );
};

export default FightAnimation;
