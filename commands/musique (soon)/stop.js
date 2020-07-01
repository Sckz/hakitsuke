const Discord = require("discord.js")
const ytdl = require("ytdl-core")

module.exports = {
    name: "stop",
    category: "musique",
    description: "Arrêter la musique en cours",
    run: async (client, message, args) => {
    if(!message.member.voiceChannel) return message.channel.send("> Vous devez être connecter a un channel.")
    if(!message.guild.me.voiceChannel) return message.channel.send("> Le bot n'est pas connecter a ce channel.")
    if(!message.guimd.me.voiceChannelID != message.member.voiceChannelID) return message.channel.send("> Vous devez être dans le même channel que le bot.")
    message.guild.me.voiceChannel.leave()
    message.channel.send("> 『🎵』Lecture arrêté : ⏹ **Déconnexion du BOT**")

    }
}