import * as api from "./Api";
import { Bot } from "./types/Bot";
import { DiagonalDir, Dir } from "./types/Dirs";

export const moveBot = async (
  bot: Bot,
  dir: Dir,
  dist: number
): Promise<Bot> => {
  let result = bot;

  for (let i = 0; i < dist; i++) {
    result = await api.moveBot(bot, dir);
  }

  return result;
};

export const moveBotDiagonal = async (
  bot: Bot,
  dir: DiagonalDir,
  dist: number
): Promise<Bot> => {
  let result = bot;

  const dirs: Dir[] =
    dir === "RIGHT_DOWN"
      ? ["RIGHT", "DOWN"]
      : dir === "RIGHT_UP"
      ? ["RIGHT", "UP"]
      : dir === "LEFT_DOWN"
      ? ["LEFT", "DOWN"]
      : ["LEFT", "UP"];

  for (const dir of dirs) {
    for (let i = 0; i < dist; i++) {
      result = await api.moveBot(bot, dir);
    }
  }

  return result;
};

export const goto = async (bot: Bot, x: number, y: number): Promise<Bot> => {
  let result = bot;

  if (!bot.position?.x || !bot.position?.y) {
    return bot;
  }

  if (bot.position.x < x) {
    for (let i = bot.position.x; i < x; i++) {
      result = await api.moveBot(bot, "RIGHT");
    }
  }

  if (bot.position.x > x) {
    for (let i = bot.position.x; i > x; i--) {
      result = await api.moveBot(bot, "LEFT");
    }
  }

  if (bot.position.y < y) {
    for (let i = bot.position.y; i < y; i++) {
      result = await api.moveBot(bot, "DOWN");
    }
  }

  if (bot.position.y > y) {
    for (let i = bot.position.y; i > y; i--) {
      result = await api.moveBot(bot, "UP");
    }
  }

  return result;
};
