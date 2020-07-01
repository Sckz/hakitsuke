
const Discord = require("discord.js")

module.exports = {
    name: "live",
    category: "info",
    description: "Savoir si vous-même ou un autre utilisateur est en live.",
    usage: "[user]",
    run: async (client, message, args) => {
        let membre = message.mentions.members.first()
    if (membre)  {
    if ((membre.presence.game.streaming) === true) {
        message.channel.send(`${membre} est en live : **__[ 🟣 ] ${membre.presence.game}__**`)
    }
    if ((membre.presence.game.streaming) === false) {
        message.channel.send(`${membre} n'est pas en live.`)
    }
    }
    if (!membre) {
    if ((message.author.presence.game.streaming) === true) {
        message.reply(`Vous êtes en live ! :  **__${membre.presence.game}__**`)
    }
    if ((message.author.presence.game.streaming) === false) {
        message.reply("Vous n'êtes pas en live !")
     }
    }
        }
}