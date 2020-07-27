const Discord = require("discord.js")
const ms = require('ms')

module.exports = {
    name: "tempban",
    category: "moderation",
    description: "Bannir temporairement un utilisateur",
    usage: "<utilisateur> <temps(s/m/h)> [raison]",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("> Vous n'avez pas la permission !").then(m => m.delete(5000));
        var member = message.guild.member(message.mentions.users.first());
        if (!member) return message.channel.send("> Vous devez mentionner un utilisateur !").then(m => m.delete(5000));
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("> Vous ne pouvez pas ban cet utilisateur !").then(m => m.delete(5000));
        var reason = args.join(" ").slice(22);
        if (!reason) {
            var tempBanTime = args[1];
        if (ms(tempBanTime)) {
            message.guild.member(user).ban(reason);
            let send2 = new Discord.RichEmbed()
            .setAuthor(`${member.user.username}`)
            .setDescription(`**${member.user.username}** a été bannis pendant _**${tempBanTime}**_. Raison: **__Raison non défini__**.`)
            .setFooter('https://emoji.gg/assets/emoji/2990_yes.png')
            message.channel.send(send2)
            setTimeout(function () {
                message.guild.unban(user.id);
            let send = new Discord.RichEmbed()
            .setAuthor(`${member.user.username}`)
            .setDescription(`**${member.user.username}** n'est plus bannis !`)
            .setFooter('https://emoji.gg/assets/emoji/2990_yes.png')
            message.channel.send(send)
            }, ms(tempBanTime));
        }else {
            return message.channel.send("> Spécifiez une heure valide.");
        }
        let embed = new Discord.RichEmbed()
         .setColor('DARK_RED')
         .setTitle(`🔨 TEMPBAN 🔨`)
         .setAuthor(client.user.tag, client.user.displayAvatarURL)
         .setThumbnail(member.user.displayAvatarURL)
         .setDescription(member + ` a été bannis pendant **${tempBanTime}** 🔨 !`)
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', `**__Raison non défini__**`)
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
            .setDescription(`**Vous avez été sanctionné !**/n/n*Durée* : **__${tempBanTime}__**`)
            .addField(`📌 Type: `, `**__Bannissement Temporaire__**`)
            .addField('📄 Raison :', `**__Raison non défini__**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
        member.send(sanction)
        };
  
        var tempBanTime = args[1];
        if (ms(tempBanTime)) {
            message.guild.member(user).ban(reason);
             let send2 = new Discord.RichEmbed()
            .setAuthor(`${member.user.username}`)
            .setDescription(`**${member.user.username}** a été bannis pendant _**${tempBanTime}**_. Raison: **__${reason}__**.`)
            .setFooter('https://emoji.gg/assets/emoji/2990_yes.png')
            message.channel.send(send2)
            setTimeout(function () {
                let send = new Discord.RichEmbed()
            .setAuthor(`${member.user.username}`)
            .setDescription(`**${member.user.username}** n'est plus bannis !`)
            .setFooter('https://emoji.gg/assets/emoji/2990_yes.png')
            message.channel.send(send)
                message.guild.unban(user.id);
            }, ms(tempBanTime));
        }else {
            return message.channel.send("> Spécifiez une heure valide.");
        }
        let embed = new Discord.RichEmbed()
         .setColor('DARK_RED')
         .setTitle(`🔨 TEMPBAN 🔨`)
         .setAuthor(client.user.tag, client.user.displayAvatarURL)
         .setThumbnail(member.user.displayAvatarURL)
         .setDescription(member + ` a été bannis pendant **${tempBanTime}** 🔨 !`)
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', `**__ ${reason}__**`)
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
            .setDescription(`**Vous avez été sanctionné !**/n/n*Durée* : **__${tempBanTime}__**`)
            .addField(`📌 Type: `, `**__Bannissement Temporaire__**`)
            .addField('📄 Raison :', `**${reason}**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
        member.send(sanction)
    }
}
