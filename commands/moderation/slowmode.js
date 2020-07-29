const Discord = require("discord.js")

module.exports = {
    name: "slowmode",
    category: "moderation",
    description: "Définir un slowmode",
    usage: "<valeur>",
    run: async (client, message, args) => {
        var membre = message.guild.member(message.author)
        message.channel.bulkDelete(parseInt(1))
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("> Vous n'avez pas la permission !").then(m => m.delete(5000));
        let duration = args[0]
        if(!duration) return message.channel.send("> Veuillez spécifier un temps => (1-21600 Seconds)").then(m => m.delete(5000));
        message.channel.setRateLimitPerUser(duration)
         .catch(() => {
        message.channel.send("> Une erreur est survenu, veuillez vérifié votre temps du slowmode.").then(m => m.delete(5000));
         })
        let send2 = new Discord.RichEmbed()
            .setAuthor("Commande effectuée", 'https://emoji.gg/assets/emoji/2990_yes.png')
            .setDescription(`**${membre}** a ralenti les messages par un délai de _**${duration}s**_.`)
          message.channel.send(send2)
    }
}
