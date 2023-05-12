import { Color } from "./Color";
import { Point } from "./Point";

export interface Bot {
  id: string;
  name: string;
  color?: Color;
  position?: Point;
}
