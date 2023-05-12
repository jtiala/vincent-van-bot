import * as api from "./Api";
import { getRandomColor } from "./colors";
import { drawDickbutt } from "./draw";
import { goto, moveBotDiagonal } from "./move";
import { Bot } from "./types/Bot";
import { registerBot } from "./util";

const botName = "Vincent van Bot";

const sayings = [
  "I am seeking, I am striving. I am in it with all my heart.",
  "What would life be if we had no courage to attempt anything?",
  "I dream my painting and I paint my dream",
  "I don’t know anything with certainty, but seeing the stars makes me dream.",
  "I would rather die of passion than of boredom.",
  "I often think that the night is more alive and more richly colored than the day.",
  "If you truly love nature, you will find beauty everywhere.",
  "Art is to console those who are broken by life.",
  "I put my heart and my soul into my work, and have lost my mind in the process.",
  "Great things are done by a series of small things brought together.",
  "There is no blue without yellow and without orange.",
];

const randomSay = async (bot: Bot) => {
  return await api.say(
    bot,
    sayings[Math.floor(Math.random() * sayings.length)]
  );
};

export async function main() {
  let bot = await registerBot(botName);
  bot = await api.setColor(bot, getRandomColor());
  bot = await randomSay(bot);

  bot = await goto(bot, 100, 1);
  bot = await moveBotDiagonal(bot, "RIGHT_DOWN", 2);

  // Test
  // bot = await drawLine(bot, "RIGHT", 3);
  // bot = await goto(bot, 30, 33);
  // bot = await drawLine(bot, "RIGHT", 1);
  // bot = await goto(bot, 33, 33);
  // bot = await drawLine(bot, "RIGHT", 1);
  // bot = await drawDiagonalLine(bot, "RIGHT_DOWN", 3);

  // Dickbutt
  for (let i = 0; i < 7; i++) {
    bot = await randomSay(bot);
    bot = await api.setColor(bot, getRandomColor());
    bot = await drawDickbutt(bot);
  }

  console.log(
    `Current bot position: ${bot.position?.x},${bot.position?.y} and current bot color: ${bot.color}`
  );

  // console.log(await api.bots(bot));

  // await deregisterBot(bot);
}

if (require.main === module) {
  main();
}
