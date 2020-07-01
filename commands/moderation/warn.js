const Discord = require("discord.js")
const fs = require("fs")
const warns = JSON.parse(fs.readFileSync('./warns.json'))

module.exports = {
    name: "warn",
    category: "moderation",
    description: "Avertir un utilisateur.",
    usage: "<utilisateur> [raison]",
    run: async (client, message, args) => {
                if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("> Vous n'avez pas la permission !").then(m => m.delete(5000));
                let member = message.mentions.members.first()
                if (!member) return message.channel.send("> Veuillez mentionner un utilisateur !").then(m => m.delete(5000));
                if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("> Vous ne pouvez pas warn cet utilisateur !").then(m => m.delete(5000));
                let warnreason = args.slice(1).join(' ')
                if (!warnreason) return warnreason = "Aucune"
                if (!warns[member.id]) {
                    warns[member.id] = []
                }
                warns[member.id].unshift({
                    reason: warnreason,
                    date: Date.now(),
                    mod: message.author.id
                })
                fs.writeFileSync('./warns.json', JSON.stringify(warns))
                message.channel.send("> " + member + " a été avertis pour __**" + warnreason + "**__ :white_check_mark:")
                member.send(`Vous avez été avertis pour __**${warnreason}**__`)
                let embed = new Discord.RichEmbed()
                 .setColor('GREY')
                 .setTitle(`⚠️ WARNING ⚠️`)
                 .setAuthor(client.user.tag, client.user.displayAvatarURL)
                 .setThumbnail(member.user.displayAvatarURL)
                 .setDescription(member + ` a été avertis ⚠️!`)
                 .addField(`📌 Modérateur: `, message.author.tag)
                 .addField('📄 Raison :', `__**${warnreason}**__`)
                 .setFooter(`Log Modération || Limen `)
                 .setTimestamp()
    }
}