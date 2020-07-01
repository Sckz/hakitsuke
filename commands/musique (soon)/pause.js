const Discord = require("discord.js")
const ytdl = require("ytdl-core")

module.exports = {
    name: "pause",
    category: "musique",
    description: "Mettre en pause une musique en cours",
    run: async (client, message, args, ops) => {
        var guildIDData = ops.active.get(message.guild.id);
        if (!guildIDData) return message.channel.send("> Il n'y a aucune chanson en cours de lecture pour le moment.");
        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("> Vous devez être dans le même channel que le bot.");
        if (guildIDData.dispatcher.paused) return message.channel.send("> La musique est déjà en pause.");
        guildIDData.dispatcher.pause();
        message.channel.send(`> 『🎵』Lecture en pause : ⏸ ${guildIDData.queue[0].songTitle}.`);
    }
}