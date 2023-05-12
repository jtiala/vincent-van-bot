import { Color, colors } from "./types/Color";

export const getRandomColor = (): Color =>
  Object.values(colors)[
    Math.floor(Math.random() * Object.values(colors).length)
  ];
