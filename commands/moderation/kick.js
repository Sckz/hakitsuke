const Discord = require("discord.js")

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Expulser un utilisateur.",
    usage: "<utilisateur> [raison]",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
        let e1 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Vous n'avez pas la permission !**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(e1).then(m => m.delete(5000));
        let member = message.mentions.members.first()
        let kickReason = args.slice(1).join(' ')
        let e2 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Veuillez définir une raison.**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (!kickReason) return message.channel.send(e2)
        let e3 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Veuillez mentionner un utilisateur.**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (!member) return message.channel.send(e3).then(m => m.delete(5000));
        let e4 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Il est impossible de sanctionner cette utilisateur**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(e4).then(m => m.delete(5000));
        if (!member.kickable) return message.channel.send(e4).then(m => m.delete(5000));
        member.kick()
         let send = new Discord.RichEmbed()
        .setAuthor("Sanction appliquée", 'https://emoji.gg/assets/emoji/2990_yes.png')
        .setDescription(`**${member.user.username}** a été expulsé. Raison: **__${kickReason}__**.`)
        message.channel.send(send)
        let embed = new Discord.RichEmbed()
         .setColor('RED')
         .setTitle(`👢 KICK 👢`)
         .setAuthor(client.user.username, client.user.displayAvatarURL)
         .setThumbnail(member.user.displayAvatarURL)
         .setDescription(`**${member.user.username}** a été kick !`)
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', kickReason)
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
            .addField(`📌 Type: `, `**__Explusion__**`)
            .addField('📄 Raison :', `**${kickReason}**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
member.send(sanction)
    }
}
