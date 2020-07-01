const Discord = require("discord.js")
const ytdl = require("ytdl-core")

module.exports = {
    name: "unpause",
    category: "musique",
    description: "Démaré une musique en pause",
    run: async (client, message, args, ops) => {
        var guildIDData = ops.active.get(message.guild.id);
        if (!guildIDData) return message.channel.send("> Il n'y a aucune chanson en cours de lecture pour le moment.");
        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("> Vous devez être dans le même channel que le bot.");
        if (isNaN(args[0]) || args[0] > 150 || args[0] < 0) return message.channel.send("> Veuillez saisir un nombre compris entre 0 et 150.");
        guildIDData.dispatcher.setVolume(args[0] / 100);
        message.channel.send(`> 『🎵』Le volume a été changé : 🔊 de __**${guildIDData.queue[0].songTitle}**__ à __**${args[0]}**__`);
    }
}