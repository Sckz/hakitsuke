const Discord = require("discord.js")
const ytdl = require("ytdl-core")

module.exports = {
    name: "queue",
    category: "musique",
    description: "Liste d'attente des musiques",
    run: async (client, message, args, ops) => {
        var guildIDDData = ops.active.get(message.guild.id)

        if(!guildIDDData) return message.channel.send("> Il n'y a pas de musique en ce moment.");
        var queue = guildIDData.queue;
        var nowPlaying = queue[0];
        var response = `> 『🎵』Lecture en cours : ▶️ ${nowPlaying.songTitle} || Demandé par: ${nowPlaying.requester}\n\nQueue: \n`;
        for (var i = 0; i < queue.length; i++) {
 
            response += `> ${i}, ${queue[i].songTitle} | Demandé par: ${queue[i].requester}\n`;
 
        }
        message.channel.send(response);
    }
}