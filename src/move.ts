import * as api from "./Api";
import { Bot } from "./types/Bot";
import { DiagonalDir, Dir } from "./types/Dirs";

export const moveBot = async (
  bot: Bot,
  dir: Dir,
  dist: number
): Promise<Bot> => {
  for (let i = 0; i < dist; i++) {
    bot = await api.moveBot(bot, dir);
  }

  return bot;
};

export const moveBotDiagonal = async (
  bot: Bot,
  dir: DiagonalDir,
  dist: number
): Promise<Bot> => {
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
      bot = await api.moveBot(bot, dir);
    }
  }

  return bot;
};

export const goto = async (bot: Bot, x: number, y: number): Promise<Bot> => {
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
