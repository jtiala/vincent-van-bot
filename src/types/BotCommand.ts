import { ColorValue } from "./Color";

export interface BotCommand {
  id: string;
  color?: ColorValue;
  move?: string;
  paint?: string;
  clear?: string;
  look?: string;
  msg?: string;
  bye?: string;
  bots?: string;
}
