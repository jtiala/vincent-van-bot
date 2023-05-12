import { ColorValue, colors } from "./types/Color";

export const getRandomColor = (): ColorValue =>
  Object.values(colors)[
    Math.floor(Math.random() * Object.values(colors).length)
  ];
