const Discord = require("discord.js")

module.exports = {
    name: "ban",
    category: "moderation",
    description: "Bannir un utilisateur",
    usage: "<user> [reason]",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("> Vous n'avez pas la permission !")
        let member = message.mentions.members.first()
        let banReason = args.slice(1).join(' ')
        if (!banReason) return {}
        if (!member) return message.channel.send("> Veuillez mentionner un utilisateur !")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("> Vous ne pouvez pas ban cet utilisateur !")
        if (!member.bannable) return message.channel.send("> Je ne peux pas ban cet utilisateur")
        message.guild.ban(member, {days: 7})
        message.channel.send("> **" + member.user.username + '** a été bannis pour __**' + banReason + '**__ :white_check_mark:')
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
            .setDescription(`**Vous avez été sanctionné !**/n/n`)
            .addField(`📌 Type: `, `**__Bannissement__**`)
            .addField('📄 Raison :', `**${banReason}**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
member.send(sanction)
    }
}
