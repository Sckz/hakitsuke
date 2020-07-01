const Discord = require("discord.js")

module.exports = {
    name: "sobject",
    aliases: ["serverobject", "serverobjectif"],
    category: "moderation",
    description: 'Définir un canal personnalisé',
    usage: "<message>",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("> Vous n'avez pas la permission").then(m => m.delete(5000));
        let obj = args.slice(1).join(' ')
        message.guild.createChannel(obj, "voice").then((createdChan) => {
 
            createdChan.setParent().then((settedParent) => { 
     
                settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "CONNECT": false });
            })
        })
    }
}