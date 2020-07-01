const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!rMember)
            return message.reply("> Cet utilisateur est introuvable").then(m => m.delete(5000));

        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("> Il est impossible de report cet utilisateur.").then(m => m.delete(5000));

        if (!args[1])
            return message.channel.send("> Veuillez spécifiez une raison.").then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === "reports")
            
        if (!channel)
            return message.channel.send("> Le channel `#reports` est introuvable ou inexistant.").then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("#ffffff")
            .setTimestamp()
            .setFooter("Limen by Sckz")
            .setAuthor("Membre rapporté", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**- Membre:** ${rMember} (${rMember.user.id})
            **- Rapporté par:** ${message.member}
            **- Rapporté dans:** ${message.channel}
            **- Raison:** ${args.slice(1).join(" ")}
            **- Serveur: ** ${member.guild.name}`);

        return channel.send(embed);
    }
}