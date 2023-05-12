import * as api from "./Api";
import { moveBotDiagonal } from "./move";
import { Bot } from "./types/Bot";
import { Dir, dirs } from "./types/Dirs";

export const drawRectangle = async (bot: Bot, width: number): Promise<Bot> => {
  for (const dir of dirs) {
    for (let i = 0; i < width; i++) {
      await api.moveBot(bot, dir);
      await api.paintPixel(bot);
    }
  }

  return bot;
};

export const drawLine = async (
  bot: Bot,
  dir: Dir,
  width: number
): Promise<Bot> => {
  for (let i = 1; i < width; i++) {
    await api.paintPixel(bot);
    await api.moveBot(bot, dir);
  }

  return bot;
};

