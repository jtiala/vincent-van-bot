export const colors = {
  BLACK: "0",
  BLUE: "1",
  PURPLE: "2",
  GREEN: "3",
  BROWN: "4",
  GREY: "5",
  SILVER: "6",
  WHITE: "7",
  RED: "8",
  ORANGE: "9",
  YELLOW: "a",
  BRIGHT_GREEN: "b",
  LIGHT_BLUE: "c",
  DARK_GRAY: "d",
  PINK: "e",
  TAN: "f",
} as const;

export type ColorName = keyof typeof colors;
export type ColorValue = (typeof colors)[ColorName];
