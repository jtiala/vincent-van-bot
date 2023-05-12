import * as api from "./Api";
import { canvasHeight, canvasWidth } from "./canvas";
import { diagonalDirToDirs, isDiagonalDir } from "./dir";
import { Bot } from "./types/Bot";
import { DiagonalDir, Dir } from "./types/Dirs";
import { Point } from "./types/Point";

export const isValidPoint = (point: Point) => {
  const { x, y } = point;

  if (x < 1 || y < 1 || x > canvasWidth || y > canvasHeight) {
    console.log(`Invalid point: ${x},${y}`);
    return false;
  }

  return true;
};

export const goto = async (bot: Bot, position: Point): Promise<Bot> => {
  if (!isValidPoint(position)) {
    return bot;
  }

  const { x, y } = position;

  if (bot.position?.x && bot.position.x < x) {
    for (let i = bot.position.x; i < x; i++) {
      bot = await api.moveBot(bot, "RIGHT");
    }
  }

  if (bot.position?.x && bot.position.x > x) {
    for (let i = bot.position.x; i > x; i--) {
      bot = await api.moveBot(bot, "LEFT");
    }
  }

  if (bot.position?.y && bot.position.y < y) {
    for (let i = bot.position.y; i < y; i++) {
      bot = await api.moveBot(bot, "DOWN");
    }
  }

  if (bot.position?.y && bot.position.y > y) {
    for (let i = bot.position.y; i > y; i--) {
      bot = await api.moveBot(bot, "UP");
    }
  }

  return bot;
};

export const moveBot = async (
  bot: Bot,
  dir: Dir | DiagonalDir,
  dist: number
): Promise<Bot> => {
  if (isDiagonalDir(dir)) {
    const dirs = diagonalDirToDirs(dir);

    for (const dir of dirs) {
      for (let i = 0; i < dist; i++) {
        bot = await api.moveBot(bot, dir);
      }
    }

    return bot;
  }

  for (let i = 0; i < dist; i++) {
    bot = await api.moveBot(bot, dir);
  }

  return bot;
};
