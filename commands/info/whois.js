const Discord = require("discord.js");
const moment = require("moment")


module.exports = {
    name: "user",
    aliases: ["whois", "user-info"],
    category: "info",
    description: "Toutes les informations sur un utilisateur",
    usage: "<utilisateur>",
    run: async (client, message, args) => {
        let membre = message.mentions.members.first()
        if (!membre) return message.channel.send("> Membre introuvable.").then(m => m.delete(5000));
        let embed = new Discord.RichEmbed()
         .setColor("ORANGE")
         .setTitle("User Informations")
         .setThumbnail(membre.user.displayAvatarURL)
         .addField("Pseudo :", membre)
         .addField("Tag :", membre.user.tag)
         .addField("A rejoint le serveur le :", `${moment.utc(membre.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
         .addField("Compte créé le :", `${moment.utc(membre.user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
         .addField("Status :", membre.presence.status, true)
         .addField("Jeu :", `${membre.presence.game ? membre.presence.game.name : 'Aucun'}`, true)
         .addField("Rôles:", membre.roles.map(roles => `${roles}`).join(', '), true)
         .setFooter("Limen by Sckz")
         .setTimestamp()
        message.channel.send(embed)
    }
}