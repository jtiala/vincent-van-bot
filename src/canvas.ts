export const canvasWidth = 320;
export const canvasHeight = 200;

export const randomStartingPointForSprite = (
  spriteWidth: number,
  spriteHeight: number
) => {
  let x: number | undefined = undefined;
  let y: number | undefined = undefined;

  do {
    x = Math.floor(Math.random() * canvasWidth) + 1;
  } while (x + spriteWidth > canvasWidth);

  do {
    y = Math.floor(Math.random() * canvasHeight) + 1;
  } while (y + spriteHeight > canvasHeight);

  return { x, y };
};
