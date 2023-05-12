import * as api from "./Api";

import { Bot } from "./types/Bot";

const quotes = [
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

export const sayRandomQuote = async (bot: Bot) => {
  return await api.say(bot, quotes[Math.floor(Math.random() * quotes.length)]);
};
