import * as api from "./Api";
import { getRandomColor } from "./colors";
import { sayRandomQuote } from "./say";
import { registerBot } from "./util";

const botName = "Vincent van Bot";

export async function main() {
  let bot = await registerBot(botName);
  bot = await api.setColor(bot, getRandomColor());
  bot = await sayRandomQuote(bot);

  // Dickbutt
  // for (let i = 0; i < 7; i++) {
  // bot = await sayRandomQuote(bot);
  //   bot = await api.setColor(bot, getRandomColor());
  //   bot = await drawDickbutt(bot);
  // }

  console.log(
    `Current bot position: ${bot.position?.x},${bot.position?.y} and current bot color: ${bot.color}`
  );
}

if (require.main === module) {
  main();
}
