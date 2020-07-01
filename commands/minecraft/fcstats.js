
const Discord = require("discord.js")
const funcraft = require("funcraft")


module.exports = {
    name: "fcplayer",
    category: "funcraft",
    description: "Permet d'avoir les stats funcraft en rush d'un joueur",
    usage: "<pseudo>",
    run: async (client, message, args) => {
        let pseudo = args[0]
        if(!pseudo) return message.channel.send('> Veuillez définir un pseudo.').then(m => m.delete(1500))
        funcraft.fetchPlayer(pseudo).then((player) => {
            let embed = new Discord.RichEmbed()
             .setAuthor(client.user.username, client.user.displayAvatarURL)
             .setThumbnail(`${player.avatar}`)
             .setColor("ORANGE")
             .setFooter("Vibes by Sckz")
             .setTimestamp()
             .setDescription(`**Pseudo** : ${player.username}\n**Dernière Connexion** : ${player.lastConnection}\n**Bannissement** : ${player.banned}\n\n __**Rush**__\n**Points** : ${player.rush.points}\n**Victoires** : ${player.rush.victoryCount}\n**Défaites** : ${player.rush.defeatCount}\n**Kills** : ${player.rush.killCount}\n**Morts** : ${player.rush.deathCount}\n**K/D** : ${player.rush.kd}`)
            message.channel.send(embed)
        })
        .catch(err => {
            console.error(err)
            message.channel.send("> Utilisateur invalide.")
        })
        

        
    }
}