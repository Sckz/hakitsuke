const Discord = require("discord.js")
const ms = require('ms')

module.exports = {
    name: "tempmute",
    category: "moderation",
    description: "Rendre temporairement muet un utilisateur.",
    usage: "<utilisateur> <temps(s/m/h)> [raison]",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
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
         let send2 = new Discord.RichEmbed()
            .setAuthor("Sanction appliquée", 'https://emoji.gg/assets/emoji/2990_yes.png')
            .setDescription(`**${membre}** a été reduit au silence pendant _**${muteTime}s**_. Raison: **__${tmReason}__**`)
            message.channel.send(send2)
        //log
        setTimeout(function () {

            membre.removeRole(muteRole);

            let send = new Discord.RichEmbed()
            .setAuthor("Sanction terminée", 'https://emoji.gg/assets/emoji/2990_yes.png')
            .setDescription(`**${membre}** n'est plus muet !`)
            message.channel.send(send)
        }, ms(muteTime));
        let embed = new Discord.RichEmbed()
         .setColor('GREEN')
         .setTitle(`🔕 ◆ MUTE TEMPORAIRE`)
         .setAuthor(client.user.username, client.user.displayAvatarURL)
         .setThumbnail(membre.user.displayAvatarURL)
         .setDescription(membre + ` a été rendu muet temporairement pendant **`  + muteTime + '**')
         .addField(`📌 Modérateur: `, message.author.tag)
         .addField('📄 Raison :', `**__ ${tmReason}__**`)
         .setFooter(`Log Modération`)
         .setTimestamp()
        const channel = client.channels.find('name', "🚫・sanctions")
        channel.send(embed)
        //
        let sanction = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle(`⛔ ◆ Sanction`)
            .setAuthor(client.user.username, client.user.displayAvatarURL)
            .setThumbnail(membre.user.displayAvatarURL)
            .setDescription(`**Vous avez été sanctionné !**/n/n*Durée:* __**${muteTime}**__`)
            .addField(`📌 Type: `, `**__Réduction au silence__**`)
            .addField('📄 Raison :', `**${tmReason}**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
        membre.send(sanction)
    }
}
