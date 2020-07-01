const Discord = require("discord.js")

module.exports = {
    name: "server",
    aliases: ["server-info"],
    category: "info",
    description: "Toutes les informations sur le serveur discord.",
    run: async (client, message, args) => {
        let embed = new Discord.RichEmbed()
         .setColor('RED')
         .setTitle("Server Informations")
         .setThumbnail(message.guild.iconURL)
         .addField("Nom :", `${message.guild.name} (${message.guild.nameAcronym})`, true)
         .addField('Créateur du serveur :', message.guild.owner.user.tag, true)
         .addField("Serveur créé le :", message.guild.createdAt, true)
         .addField("Nombre de joueurs :", message.guild.memberCount, true)
         .setFooter("Limen by Sckz")
         .setTimestamp()
        message.channel.send(embed)
    }
}