const Discord = require("discord.js")

module.exports = {
    name: "ban",
    category: "moderation",
    description: "Bannir un utilisateur",
    usage: "<user> [reason]",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
         let e1 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Vous n'avez pas la permission !**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(e1).then(m => m.delete(5000));
        let e2 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Veuillez indiquer une raison !**`)
         .setFooter('Ce message se supprime automatiquement.')
        let member = message.mentions.members.first()
        let banReason = args.slice(1).join(' ')
        if (!banReason) return message.channel.send(e2).then(m => m.delete(5000));
        let e3 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Veuillez mentionner un utilisateur !**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (!member) return message.channel.send(e3).then(m => m.delete(5000));
        let e4 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Il est impossible de ban cette utilisateur.**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(e4).then(m => m.delete(5000));
        if (!member.bannable) return message.channel.send(e4).then(m => m.delete(5000));
        message.guild.ban(member, {days: 7})
        let send = new Discord.RichEmbed()
        .setAuthor("Sanction appliquée", 'https://emoji.gg/assets/emoji/2990_yes.png')
        .setDescription(`**${member.user.username}** a été bannis. Raison **__${banReason}__**.`)
        message.channel.send(send)
        let embed = new Discord.RichEmbed()
         .setColor('DARK_RED')
         .setTitle(`🔨 ◆ BANISSEMENT`)
         .setAuthor(client.user.username, client.user.displayAvatarURL)
         .setThumbnail(member.user.displayAvatarURL)
         .setDescription(`**${member.user.username}** a été bannis !`)
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', banReason)
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
            .setDescription(`**Vous avez été sanctionné !**`)
            .addField(`📌 Type: `, `**__Bannissement__**`)
            .addField('📄 Raison :', `**${banReason}**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
member.send(sanction)
    }
}
