import * as api from "./Api";
import { randomStartingPointForSprite } from "./canvas";
import { getRandomColor } from "./colors";
import { dickbutHeight, dickbutWidth, drawDickbutt } from "./draw";
import { goto } from "./move";
import { sayRandomQuote } from "./say";
import { registerBot } from "./util";

const botName = "Vincent van Bot";

export async function main() {
  let bot = await registerBot(botName);
  bot = await api.setColor(bot, getRandomColor());
  bot = await sayRandomQuote(bot);

  bot = await goto(bot, { x: 1, y: 1 });

  do {
    bot = await sayRandomQuote(bot);
    bot = await api.setColor(bot, getRandomColor());
    bot = await goto(
      bot,
      randomStartingPointForSprite(dickbutWidth, dickbutHeight)
    );
    bot = await drawDickbutt(bot);
    // eslint-disable-next-line no-constant-condition
  } while (true);
}

if (require.main === module) {
  main();
}
