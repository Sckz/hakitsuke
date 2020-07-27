const Discord = require("discord.js")

module.exports = {
    name: "mute",
    category: "moderation",
    description: "Rendre muet un utilisateur.",
    usage: "<utilisateur> [raison]",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("> Vous n'avez pas la permission !").then(m => m.delete(5000));
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("> Veuillez mentionner un utilisateur !").then(m => m.delete(5000));
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("> Je ne peux pas mute cet utilisateur").then(m => m.delete(5000));
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("> Je ne peux pas mute cet utilisateur").then(m => m.delete(5000));
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        let muteReason = args.slice(1).join(' ')
        if(!muteReason) {
            member.addRole(muterole)
            let send = new Discord.RichEmbed()
            .setAuthor(`${member.user.username}`)
            .setDescription(`**${member}** a été réduit au silence. Raison: **__Aucune raison__**.`)
            .setFooter('https://emoji.gg/assets/emoji/2990_yes.png')
            message.channel.send(send)
            let embed = new Discord.RichEmbed()
             .setColor('AQUA')
             .setTitle(`🔕 MUTE 🔕`)
             .setAuthor(client.user.tag, client.user.displayAvatarURL)
             .setThumbnail(member.user.displayAvatarURL)
             .setDescription(member.user.username + ` a été rendu muet 🔕!`)
             .addField(`📌 Modérateur: `, message.author.tag)
             .addField('📄 Raison :', "**__Raison non défini__**")
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
            .addField(`📌 Type: `, `**__Réduction au silence__**`)
            .addField('📄 Raison :', `**__Raison non défini__**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
member.send(sanction)
        };
        if (muterole) {
            member.addRole(muterole)
            let send = new Discord.RichEmbed()
            .setAuthor(`${member.user.username}`)
            .setDescription(`**${member}** a été réduit au silence. Raison: **__${muteReason}__**.`)
            .setFooter("Sanction appliquée", 'https://emoji.gg/assets/emoji/2990_yes.png')
            message.channel.send(send)
            let embed = new Discord.RichEmbed()
             .setColor('AQUA')
             .setTitle(`🔕 MUTE 🔕`)
             .setAuthor(client.user.tag, client.user.displayAvatarURL)
             .setThumbnail(member.user.displayAvatarURL)
             .setDescription(member.user.username + ` a été rendu muet 🔕!`)
             .addField(`📌 Modérateur: `, message.author.tag)
             .addField('📄 Raison :', muteReason)
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
            .addField(`📌 Type: `, `**__Réduction au silence__**`)
            .addField('📄 Raison :', `**${muteReason}**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
member.send(sanction)
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
