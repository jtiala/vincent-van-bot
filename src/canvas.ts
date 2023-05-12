export const canvasWidth = 320;
export const canvasHeight = 200;

export const randomStartingPointForSprite = (
  spriteWidth: number,
  spriteHeight: number
) => {
  const x = Math.floor(Math.random() * (canvasWidth - spriteWidth)) + 1;
  const y = Math.floor(Math.random() * (canvasHeight - spriteHeight)) + 1;

  return { x, y };
};
