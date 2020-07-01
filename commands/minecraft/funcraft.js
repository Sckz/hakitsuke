
const Discord = require("discord.js")
const funcraft = require("funcraft")


module.exports = {
    name: "funcraft",
    category: "funcraft",
    aliases: ["fc"],
    description: "Permet d'avoir les stats funcraft en rush d'un joueur",
    run: async (client, message, args) => {
        
        funcraft.fetchPlayerCounts().then((counts) => {
            let embed = new Discord.RichEmbed()
             .setTitle("**FunCraft**")
             .setColor("ORANGE")
             .setFooter("Vibes by Sckz")
             .setTimestamp()
             .setThumbnail("https://cdn.discordapp.com/attachments/553920712318910466/707695591227916288/fc.jpg")
             .setDescription(`\n\n**Connectés** : ${counts.totalOnline}\n**Freecube** : ${counts.freecube}\n**Rush** : ${counts.rush}\n**Hikabrain** : ${counts.hikabrain}\n**Skywars** : ${counts.skywars}\n**Infected** : ${counts.infecte}\n**Autre** : ${counts.others}`)
            message.channel.send(embed)
            /*
            {
                totalOnline: 2636,
                recordPlayerOnline: 18124,
                registeredPlayers: 1618964,
                premiumUsers: 702277,
                nonPremiumUsers: 916687,
                freecube: 478,
                rush: 428,
                hikabrain: 405,
                skywars: 304,
                infecte: 35,
                others: 986
            }
            */
        });
    }
}