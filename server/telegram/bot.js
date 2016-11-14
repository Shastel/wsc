import TeleBot from 'telebot';
import controller from 'server/telegram/controller';

const bot = new TeleBot({
    token: process.env.TELEGRAM_API_KEY, // Required. Telegram Bot API token.
    pooling: { // Optional. Use pooling.
        interval: 1000, // Optional. How often check updates (in ms).
        timeout: 0, // Optional. Update pulling timeout (0 - short polling).
        limit: 100, // Optional. Limits the number of updates to be retrieved.
        retryTimeout: 5000 // Optional. Reconnecting timeout (in ms).
    },
});

bot.connect();

bot.on('/stat', (msg) => controller.stat(bot, msg));
bot.on('/start', (msg) => controller.start(bot, msg));
