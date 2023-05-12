import * as api from "./Api";
import { moveBot, moveBotDiagonal } from "./move";
import { Bot } from "./types/Bot";
import { DiagonalDir, Dir, dirs } from "./types/Dirs";

export const drawRectangle = async (bot: Bot, width: number): Promise<Bot> => {
  for (const dir of dirs) {
    for (let i = 1; i < width; i++) {
      bot = await moveBot(bot, dir, 1);
      bot = await api.paintPixel(bot);
    }
  }

  return bot;
};

export const drawLine = async (
  bot: Bot,
  dir: Dir,
  length: number
): Promise<Bot> => {
  for (let i = 1; i < length; i++) {
    bot = await api.paintPixel(bot);
    bot = await moveBot(bot, dir, 1);
  }

  bot = await api.paintPixel(bot);

  return bot;
};

export const drawDiagonalLine = async (
  bot: Bot,
  dir: DiagonalDir,
  length: number
): Promise<Bot> => {
  const dirs: Dir[] =
    dir === "RIGHT_DOWN"
      ? ["RIGHT", "DOWN"]
      : dir === "RIGHT_UP"
      ? ["RIGHT", "UP"]
      : dir === "LEFT_DOWN"
      ? ["LEFT", "DOWN"]
      : ["LEFT", "UP"];

  for (let i = 1; i < length; i++) {
    bot = await api.paintPixel(bot);

    for (const dir of dirs) {
      bot = await api.moveBot(bot, dir);
    }
  }

  bot = await api.paintPixel(bot);

  return bot;
};

