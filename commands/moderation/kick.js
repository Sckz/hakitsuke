const Discord = require("discord.js")

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Expulser un utilisateur.",
    usage: "<utilisateur> [raison]",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("> Vous n'avez pas la permission !").then(m => m.delete(5000));
        let member = message.mentions.members.first()
        let kickReason = args.slice(1).join(' ')
        if (!kickReason) return kickReason = "Aucune"
        if (!member) return message.channel.send("> Veuillez mentionner un utilisateur !").then(m => m.delete(5000));
        if (!kickReason) return kickReason = "Aucune raison définit"
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("> Vous ne pouvez pas ban cet utilisateur !").then(m => m.delete(5000));
        if (!member.kickable) return message.channel.send("> Je ne peux pas kick cet utilisateur").then(m => m.delete(5000));
        member.kick()
        message.channel.send("> **" + member.user.username + '** a été kick pour __**' + kickReason + '**__ :white_check_mark:')
        member.send(`👢 Vous avez été kick pour __**${kickReason}**__ 👢`)
        let embed = new Discord.RichEmbed()
         .setColor('RED')
         .setTitle(`👢 KICK 👢`)
         .setAuthor(client.user.tag, client.user.displayAvatarURL)
         .setThumbnail(member.user.displayAvatarURL)
         .setDescription(member.user.username + ` a été kick 👢!`)
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', kickReason)
         .setFooter(`Log Modération`)
         .setTimestamp()
        const channel = client.channels.find('name', "🚫・sanctions")
        channel.send(embed)
//
let sanction = new Discord.RichEmbed()
            .setColor('DARK_RED')
            .setTitle(`👢 ◆ EXPULSION`)
            .setAuthor(client.user.username, client.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setDescription(`**Vous avez été expulsé du serveur !**`)
            .setFooter(`Hakitsuke 🥀`)
            .setTimestamp()
member.send(sanction)
    }
}
