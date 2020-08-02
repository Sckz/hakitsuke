const Discord = require("discord.js")
const fs = require("fs")
const warns = JSON.parse(fs.readFileSync('./warns.json'))

module.exports = {
    name: "warn",
    category: "moderation",
    description: "Avertir un utilisateur.",
    usage: "<utilisateur> [raison]",
    run: async (client, message, args) => {
                message.channel.bulkDelete(parseInt(1))
         let e1 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Permission manquante.**`)
         .setFooter('Ce message se supprime automatiquement.')
                if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(e1).then(m => m.delete(5000));
                let member = message.mentions.members.first()
                 let e2 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Aucun utilisateur a été mentionné.**`)
         .setFooter('Ce message se supprime automatiquement.')
                if (!member) return message.channel.send(e2).then(m => m.delete(5000));
         let e3 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Cet utilisateur ne peut pas être sanctionné**`)
         .setFooter('Ce message se supprime automatiquement.')
                if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(e3).then(m => m.delete(5000));
                let warnreason = args.slice(1).join(' ')
                if (!warnreason) return;
                if (!warns[member.id]) {
                    warns[member.id] = []
                }
                warns[member.id].unshift({
                    reason: warnreason,
                    date: Date.now(),
                    mod: message.author.id
                })
                fs.writeFileSync('./warns.json', JSON.stringify(warns))
                    let send = new Discord.RichEmbed()
                    .setAuthor("Sanction appliquée", 'https://emoji.gg/assets/emoji/2990_yes.png')
                    .setDescription(`**${member}** a été avertis. Raison: **__${warnreason}__**`)
                   message.channel.send(send)
                let embed = new Discord.RichEmbed()
                 .setColor('GREY')
                 .setTitle(`⚠️ ◆ AVERTISSEMENT`)
                 .setAuthor(client.user.username, client.user.displayAvatarURL)
                 .setThumbnail(member.user.displayAvatarURL)
                 .setDescription(member + ` a été avertis ⚠️!`)
                 .addField(`📌 Modérateur: `, message.author.tag)
                 .addField('📄 Raison :', `__**${warnreason}**__`)
                 .setFooter(`Log Modération`)
                 .setTimestamp()
                const channel = client.channels.find('name', "🚫・sanctions")
                channel.send(embed)
//
let sanction = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle(`⛔ ◆ Sanction`)
            .setAuthor(client.user.username, client.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setDescription(`**Vous avez été sanctionné !**/n/n`)
            .addField(`📌 Type: `, `**__Avertissement__**`)
            .addField('📄 Raison :', `**${warnreason}**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
member.send(sanction)
    }
}
