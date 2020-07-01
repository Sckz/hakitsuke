const Discord = require("discord.js")

module.exports = {
    name: "mute",
    category: "moderation",
    description: "Rendre muet un utilisateur.",
    usage: "<utilisateur> [raison]",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("> Vous n'avez pas la permission !").then(m => m.delete(5000));
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("> Veuillez mentionner un utilisateur !").then(m => m.delete(5000));
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("> Je ne peux pas mute cet utilisateur").then(m => m.delete(5000));
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("> Je ne peux pas mute cet utilisateur").then(m => m.delete(5000));
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        let muteReason = args.slice(1).join(' ')
        if(!muteReason) return muteReason = "Aucune"
        if (muterole) {
            member.addRole(muterole)
            message.channel.send("> " + member + ' a été rendu muet pour __**' + muteReason + '**__ :white_check_mark:')
            member.send(`🔕 Vous avez été rendu muet pour __**${muteReason}**__ 🔕`)
            let embed = new Discord.RichEmbed()
             .setColor('AQUA')
             .setTitle(`🔕 MUTE 🔕`)
             .setAuthor(client.user.tag, client.user.displayAvatarURL)
             .setThumbnail(member.user.displayAvatarURL)
             .setDescription(member.user.username + ` a été rendu muet 🔕!`)
             .addField(`📌 Modérateur: `, message.author.tag)
             .addField('📄 Raison :', muteReason)
             .setFooter(`Log Modération  || Limen by Sckz`)
             .setTimestamp()
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
            })
        }
    }
}