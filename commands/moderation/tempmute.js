const Discord = require("discord.js")
const ms = require('ms')

module.exports = {
    name: "tempmute",
    category: "moderation",
    description: "Rendre temporairement muet un utilisateur.",
    usage: "<utilisateur> <temps(s/m/h)> [raison]",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(5))
        var tmReason = args.slice(2).join(' ')
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("> Vous n'avez pas la permission").then(m => m.delete(5000));
        var membre = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!membre) return message.channel.send("> Vous devez mentionner un utilisateur").then(m => m.delete(5000));
        if (membre.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("> Vous ne pouvez pas mute cet utilisateur !").then(m => m.delete(5000));
        if(!tmReason) return tmReason = "Aucune"

        var muteRole = message.guild.roles.find("name", "Muted")
        if (!muteRole) return message.channel.send("Le rôle **Muted** n'éxiste pas !").then(m => m.delete(5000));

        var muteTime = args[1]; 
        if(!muteTime) return message.channel.send("> Désolé, vous devez définir un temps.").then(m => m.delete(5000));
        membre.addRole(muteRole.id);
        message.channel.send(`> **${membre}** a été rendu muet pendant **${muteTime}** pour **__${tmReason}__** :white_check_mark:`)
        membre.send(`> 🔕 Vous avez été rendu muet pendant **${muteTime}** pour __**${tmReason}**__ 🔕`)
        //log
        setTimeout(function () {

            membre.removeRole(muteRole);

            message.channel.send(`> **${membre}** n'est plus muet :white_check_mark: !`)
        }, ms(muteTime));
        let embed = new Discord.RichEmbed()
         .setColor('GREEN')
         .setTitle(`🔕 TEMPMUTE 🔕`)
         .setAuthor(client.user.tag, client.user.displayAvatarURL)
         .setThumbnail(membre.user.displayAvatarURL)
         .setDescription(membre + ` a été rendu muet temporairement pendant **`  + muteTime + '**')
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', `**__ ${tmReason}__**`)
         .setFooter(`Log Modération`)
         .setTimestamp()
        const channel = client.channels.find('name', "🚫・sanctions")
        channel.send(embed)
        //
        let embedsend = new Discord.RichEmbed()
         .setColor('GREEN')
         .setTitle(`🔕 TEMPMUTE 🔕`)
         .setAuthor(client.user.tag, client.user.displayAvatarURL)
         .setThumbnail(membre.displayAvatarURL)
         .setDescription(` Vous avez été rendu muet temporairement pendant **`  + muteTime + '**')
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', `**__ ${tmReason}__*`)
         .setFooter(`Limen by Sckz`)
         .setTimestamp()
        member.send(embedsend)
    }
}
