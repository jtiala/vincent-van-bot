import { ColorValue } from "./Color";

export interface Pixel {
  color: ColorValue;
  position: {
    x: number;
    y: number;
  };
}
