const Discord = require("discord.js")




module.exports = {
    name: "ping",
    category: "info",
    description: "Latence du BOT",
    run: async (client, message, args) => {
        message.channel.send("Calcul en cours ...").then((msg) => {
            var ping = (msg.createdTimestamp - message.createdTimestamp)/20;
              let embed = new Discord.RichEmbed()
               .setColor(0x5d6d7E)
               .setDescription('⏲  Ping : **__' + ping  + ' ms__**\n')
               .setFooter(`Ping`)
               msg.edit("<:ping:752238805993521202> **__Ping__** <:ping:752238805993521202>",embed)
          })
    }
}
