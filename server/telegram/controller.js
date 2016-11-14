import cli from 'server/cli';

const users = [];

function isAvailToControllBot(username) {
    return users.indexOf(username) !== -1;
}

export default {
    stat(bot, msg) {
        cli.log(`/stat recived from ${msg.from.username}`);
        if(isAvailToControllBot(msg.from.username)) {
            bot.sendMessage(msg.from.id, 'hello');
        } else {
            bot.sendMessage(msg.from.id, 'perm denied');
            bot.leaveChat(msg.chat.id);
        }
    }
};
