const Discord = require("discord.js")
    let startTime = Date.now();
   var speedTest = require('speedtest-net');
   var speed = speedTest();




module.exports = {
    name: "ping",
    category: "info",
    description: "Latence des messages et du BOT",
    run: async (client, message, args) => {
        message.channel.send("Calcul en cours ...").then((msg) => {
            speed.on('data',async data => {  
              let embed = new Discord.RichEmbed()
               .setColor(0x5d6d7E)
               .setDescription('⏲  Ping du bot ***' + ((new Date() - message.createdTimestamp)/200).toFixed(0) + ' ms***\n💓 Ping de l\'API***' + Math.round(client.ping).toFixed(0) + '  ms***\n🖥Ping du serveur: ***'+data.server.ping+'***')
               .setFooter(`Upload: ${data.speeds.upload} Download: ${data.speeds.download}`)
               msg.edit("Ping en général",embed)
             }) ;
          })
    }
}
