import { ColorValue } from "./Color";

export interface Bot {
  id: string;
  name: string;
  color?: ColorValue;
  position?: {
    x: number;
    y: number;
  };
}
