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
        if (!reason) return reason = "Aucune"
        var tempBanTime = args[1];
        if (ms(tempBanTime)) {
            message.guild.member(user).ban(reason);
            message.channel.send(`> ${member} a été bannis temporairement pendant __**${tempBanTime}**__ pour **__${reason}__** ! :white_check_mark:`)
            member.send(`🔨 Vous avez été bannis pendant **${tempBanTime}** pour __**${reason}**__ 🔨`)
            setTimeout(function () {
                message.guild.unban(user.id);
                message.channel.send(`${member} n'est plus bannis.`);
            }, ms(tempBanTime));
        }else {
            return message.channel.send("> Spécifiez une heure valide.");
        }
        let embed = new Discord.RichEmbed()
         .setColor('DARK_RED')
         .setTitle(`🔨 TEMPBAN 🔨`)
         .setAuthor(client.user.tag, client.user.displayAvatarURL)
         .setThumbnail(member.user.displayAvatarURL)
         .setDescription(member + ` a été bannis 🔨 !`)
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', `**__ ${reason}__**`)
         .setFooter(`Log Modération`)
         .setTimestamp()
        const channel = client.channels.find('name', "🚫・sanctions")
        channel.send(embed)
        //
        let embedsend = new Discord.RichEmbed()
         .setColor('DARK_RED')
         .setTitle(`⛔ BANNISSEMENT TEMPORAIRE`)
         .setAuthor(client.user.username, client.user.displayAvatarURL)
         .setThumbnail(member.user.displayAvatarURL)
         .setDescription(` Vous avez été rendu muet temporairement pendant **`  + tempBanTime + '**')
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', `**__ ${reason}__*`)
         .setFooter(`Hakitsuke 🥀`)
         .setTimestamp()
        member.send(embedsend)
    }
}
