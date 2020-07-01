const Discord = require("discord.js")

module.exports = {
    name: "close",
    aliases: ["close-ticket"],
    category: "moderation",
    description: "Fermer le ticket ouvert.",
    run: async (client, message, args) => {
        let category = message.guild.channels.find(c => c.name == "Ticket" && c.type == "category")
        if (message.channel.parent == category) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Cette commande doit être effectuée dans le ticket créé.");
 
    }
 
    var embedCloseTicket = new Discord.RichEmbed()
        .setTitle("Ticket de " + message.channel.name)
        .setDescription("Ce ticket est **fermé**.")
        .setFooter("Limen by Sckz");
 
    var logChannel = message.guild.channels.find("id", "622413477591515147");
    if (!logChannel) return message.channel.send("Le channel n'éxiste pas");
 
    logChannel.send(embedCloseTicket);
    }
}