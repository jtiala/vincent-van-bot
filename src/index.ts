import * as api from "./Api";
import { Bot } from "./types/Bot";
import { moveBot, registerBot } from "./util";

const botName = "Vincent van Bot";

// See color palette documentation in api.setColor
const botColor = 9;

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

/**
 * Example helper functions for drawing a simple rectangle using the api calls
 * Here we are moving the bot first to a certain direction and then painting a
 * pixel with a color that was previously set in the main function.
 * @param bot
 * @param width
 */
const drawRectangle = async (bot: Bot, width: number): Promise<Bot> => {
  const dirs = ["RIGHT", "DOWN", "LEFT", "UP"];

  for (const dir of dirs) {
    for (let i = 0; i < width; i++) {
      await api.moveBot(bot, dir);
      await api.paintPixel(bot);
    }
  }

  return bot;
};

export async function main() {
  let bot = await registerBot(botName);
  bot = await api.setColor(bot, botColor);
  bot = await api.say(bot, sayings[Math.floor(Math.random() * sayings.length)]);

  // Draw some simple rectangles for example (make your own helper functions for more complex shapes!)
  bot = await drawRectangle(bot, 6);
  bot = await moveBot(bot, "RIGHT", 4);
  bot = await drawRectangle(bot, 2);
  bot = await moveBot(bot, "RIGHT", 6);
  bot = await drawRectangle(bot, 6);
  bot = await moveBot(bot, "RIGHT", 4);
  bot = await drawRectangle(bot, 2);
  bot = await moveBot(bot, "RIGHT", 8);

  console.log(
    `Current bot position: ${bot.position?.x},${bot.position?.y} and current bot color: ${bot.color}`
  );

  // Print the current state of canvas in ASCII
  // console.log(await api.look(bot))

  // Get the current state of all registered bots (json)
  // Useful i.e. for bots that want to utilize some swarming behaviour
  // console.log(await api.bots(bot))

  // Call 'deregisterBot' if you want to remove your bot from the server and, for example, change your bot name.
  // Your bot key is stored in botConfig.cfg after registration, and it is reused when you run this script again.
  // The deregister_bot command will remove the botConfig.cfg file automatically.
  // await deregisterBot(bot)
}

if (require.main === module) {
  main();
}
