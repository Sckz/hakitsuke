const Discord = require("discord.js")
const ytdl = require("ytdl-core")

module.exports = {
    name: "unpause",
    category: "musique",
    description: "Démaré une musique en pause",
    run: async (client, message, args, ops) => {
        var guildIDData = ops.active.get(message.guild.id);
        if (!guildIDData) return message.channel.send("> Il n'y a aucune chanson en cours de lecture pour le moment.");
        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("> Vous devez être dans le même channel que le bot");
        if (!guildIDData.dispatcher.paused) return message.channel.send("> La musique n'est pas en pause");
        guildIDData.dispatcher.resume();
        message.channel.send(`> 『🎵』Lecture en cours : ▶️ **__${guildIDData.queue[0].songTitle}__**.`);

    }
}