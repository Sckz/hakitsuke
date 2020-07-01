const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    category: "info",
    description: "Permet d'avoir son avatar ou celui d'un autre utilisateur sous format png.",
    usage: "[utilisateur]",
    run: async (client, message, args) => {
        let membre = message.mentions.members.first()
        message.reply("Voici l'avatar que vous voulez.")
        if (membre) return message.channel.send((membre.user.displayAvatarURL))
        if (!membre) return message.channel.send((message.author.displayAvatarURL))
    }
}