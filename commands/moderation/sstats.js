const Discord = require("discord.js")

module.exports = {
    name: "sstats",
    aliases: ["serverstats"],
    category: "moderation",
    description: 'Définir un "membercount"',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("> Vous n'avez pas la permission").then(m => m.delete(5000));
        message.guild.createChannel("Membres : " + message.guild.memberCount, "voice").then((createdChan) => {
 
            createdChan.setParent().then((settedParent) => { 
     
                settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "CONNECT": false });
            })
        })
    }
}