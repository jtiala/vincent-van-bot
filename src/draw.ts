import * as api from "./Api";
import { diagonalDirToDirs, dirs, isDiagonalDir } from "./dir";
import { moveBot } from "./move";
import { Bot } from "./types/Bot";
import { DiagonalDir, Dir } from "./types/Dirs";

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
  dir: Dir | DiagonalDir,
  length: number
): Promise<Bot> => {
  if (isDiagonalDir(dir)) {
    const dirs = diagonalDirToDirs(dir);

    for (let i = 1; i < length; i++) {
      bot = await api.paintPixel(bot);

      for (const dir of dirs) {
        bot = await api.moveBot(bot, dir);
      }
    }

    bot = await api.paintPixel(bot);

    return bot;
  }

  for (let i = 1; i < length; i++) {
    bot = await api.paintPixel(bot);
    bot = await moveBot(bot, dir, 1);
  }

  bot = await api.paintPixel(bot);

  return bot;
};

export const dickbutWidth = 21;
export const dickbutHeight = 26;

export const drawDickbutt = async (bot: Bot): Promise<Bot> => {
  bot = await moveBot(bot, "RIGHT", 4);
  bot = await drawLine(bot, "RIGHT", 5);
  bot = await drawLine(bot, "RIGHT_DOWN", 4);
  bot = await drawLine(bot, "DOWN", 11);
  bot = await drawLine(bot, "RIGHT_UP", 2);
  bot = await drawLine(bot, "RIGHT", 3);
  bot = await drawLine(bot, "RIGHT_DOWN", 2);
  bot = await drawLine(bot, "DOWN", 2);
  bot = await drawLine(bot, "LEFT", 3);
  bot = await drawLine(bot, "RIGHT", 3);
  bot = await drawLine(bot, "RIGHT_UP", 5);
  bot = await drawLine(bot, "RIGHT", 2);
  bot = await drawLine(bot, "DOWN", 3);
  bot = await drawLine(bot, "LEFT_DOWN", 3);
  bot = await drawLine(bot, "RIGHT", 2);
  bot = await drawLine(bot, "DOWN", 2);
  bot = await drawLine(bot, "LEFT_DOWN", 2);
  bot = await drawLine(bot, "LEFT", 2);
  bot = await drawLine(bot, "LEFT_UP", 2);
  bot = await drawLine(bot, "RIGHT_DOWN", 2);
  bot = await drawLine(bot, "DOWN", 3);
  bot = await drawLine(bot, "LEFT_DOWN", 3);
  bot = await drawLine(bot, "LEFT", 3);
  bot = await drawLine(bot, "LEFT_DOWN", 2);
  bot = await drawLine(bot, "DOWN", 4);
  bot = await drawLine(bot, "LEFT_DOWN", 2);
  bot = await drawLine(bot, "LEFT", 3);
  bot = await drawLine(bot, "LEFT_UP", 2);
  bot = await drawLine(bot, "RIGHT_UP", 2);
  bot = await drawLine(bot, "RIGHT", 2);
  bot = await drawLine(bot, "UP", 3);
  bot = await drawLine(bot, "LEFT_UP", 2);
  bot = await drawLine(bot, "LEFT", 4);
  bot = await drawLine(bot, "DOWN", 5);
  bot = await drawLine(bot, "LEFT_DOWN", 2);
  bot = await drawLine(bot, "LEFT", 3);
  bot = await drawLine(bot, "LEFT_UP", 2);
  bot = await drawLine(bot, "RIGHT_UP", 2);
  bot = await drawLine(bot, "RIGHT", 2);
  bot = await drawLine(bot, "UP", 4);
  bot = await drawLine(bot, "LEFT_UP", 2);
  bot = await drawLine(bot, "UP", 2);
  bot = await drawLine(bot, "LEFT_UP", 2);
  bot = await drawLine(bot, "UP", 2);
  bot = await drawLine(bot, "LEFT_UP", 2);
  bot = await drawLine(bot, "UP", 6);
  bot = await drawLine(bot, "RIGHT", 7);
  bot = await drawLine(bot, "LEFT", 7);
  bot = await drawLine(bot, "UP", 4);
  bot = await drawLine(bot, "RIGHT", 3);
  bot = await drawLine(bot, "RIGHT_DOWN", 2);
  bot = await drawLine(bot, "LEFT", 2);
  bot = await drawLine(bot, "UP", 3);
  bot = await drawLine(bot, "RIGHT", 2);
  bot = await drawLine(bot, "LEFT_UP", 4);
  bot = await drawLine(bot, "DOWN", 4);
  bot = await drawLine(bot, "LEFT", 2);
  bot = await drawLine(bot, "UP", 2);
  bot = await drawLine(bot, "RIGHT_UP", 2);
  bot = await drawLine(bot, "UP", 2);
  bot = await drawLine(bot, "RIGHT_UP", 4);
  bot = await moveBot(bot, "RIGHT_DOWN", 4);
  bot = await drawLine(bot, "RIGHT", 2);
  bot = await drawLine(bot, "LEFT", 3);
  bot = await drawLine(bot, "LEFT_DOWN", 2);
  bot = await drawRectangle(bot, 2);
  bot = await drawLine(bot, "RIGHT_DOWN", 2);
  bot = await drawLine(bot, "DOWN", 2);
  bot = await drawLine(bot, "RIGHT", 3);
  bot = await drawLine(bot, "RIGHT_UP", 2);
  bot = await drawLine(bot, "UP", 2);
  bot = await moveBot(bot, "DOWN", 7);
  bot = await moveBot(bot, "LEFT", 1);
  bot = await drawLine(bot, "DOWN", 3);
  bot = await drawLine(bot, "RIGHT_DOWN", 2);
  bot = await drawLine(bot, "DOWN", 2);
  bot = await drawLine(bot, "LEFT", 2);
  bot = await drawLine(bot, "DOWN", 2);
  bot = await drawLine(bot, "LEFT", 3);
  bot = await drawLine(bot, "UP", 2);
  bot = await drawLine(bot, "LEFT", 2);
  bot = await drawLine(bot, "UP", 2);
  bot = await drawLine(bot, "RIGHT_UP", 2);
  bot = await drawLine(bot, "UP", 3);
  bot = await moveBot(bot, "RIGHT_DOWN", 13);

  return bot;
};
