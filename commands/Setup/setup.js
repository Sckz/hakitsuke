const Discord = require("discord.js")


module.exports = {
    name: "setup",
    aliases: ["s"],
    category: "moderation",
    description: "Permet de creer tous les besoins du bot au serveur.",
    run: async (client, message, args) => {
        let argument = args[0]
        if (!argument) return message.channel.send("> Veuillez définir un role.")
        let role = message.guild.roles.find("name", `${argument}`);
        message.guild.createChannel("verification").then((createdChan) => {
 
            createdChan.setParent().then((settedParent) => { 
     
                settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": true });
            })
        });
        let channel = message.guild.channels.find("name", "verification")
        let embed = new Discord.RichEmbed()
         .setAuthor(client.user.username, client.user.displayAvatarURL)
         .setColor("GREEN")
         .setDescription("**Veuillez réagir avec :white_check_mark: pour être vérifié.**")
         .setFooter("Safety by Sckz")
         .setTimestamp()
         var embedSend = await channel.send(embed)
         embedSend.react("🎉");
         var membre = message.guild.member(embedSend.reactions.get("🎉").users.array())
         if (message.guild.member(embedSend.reactions.get("🎉"))) return membre.addRole(role.id)
    }
}