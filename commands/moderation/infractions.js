const Discord = require("discord.js")
const fs = require("fs")
const warns = JSON.parse(fs.readFileSync('./warns.json'))

module.exports = {
    name: "infractions",
    category: "moderation",
    description: "Voir les avertissements d'un utilisateur.",
    usage: "<user>",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("> Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("> Veuillez mentionner un membre")
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .setDescription('⚠️ INFRACTIONS ⚠️')
            .addField('**10 derniers warns**', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "> *Ce membre n'a aucun warns*"))
            .setFooter('Infractions')
            .setTimestamp()
        message.channel.send(embed)
    }
}
