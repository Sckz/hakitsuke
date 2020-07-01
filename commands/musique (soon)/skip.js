const Discord = require("discord.js")
const ytdl = require("ytdl-core")

module.exports = {
    name: "skip",
    category: "musique",
    description: "Lancer la musique suivante de la queue",
    run: async (client, message, args, ops) => {
        var guildIDData = ops.active.get(message.guild.id);
        if (!guildIDData) return message.channel.send("> Il n'y a pas de musique en ce moment.");
        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("> Vous devez être dans le même channel que le bot.");
        var amountUsers = message.member.voiceChannel.members.size;
        var amountSkip = Math.ceil(amountUsers / 2);
        if (!guildIDData.queue[0].voteSkips) guildIDData.queue[0].voteSkips = [];
        if (guildIDData.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`> Lecture déjà skip. ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);
        guildIDData.queue[0].voteSkips.push(message.member.id);
        ops.active.set(message.guild.id, guildIDData);
        if (guildIDData.queue[0].voteSkips.length >= amountSkip) {
            message.channel.send("> Chargement de la prochaine lecture...");
            return guildIDData.dispatcher.emit("end");
        }
        message.channel.send(`> 『🎵』Changement de lecture: ⏭  **__${guildIDData.queue[0].voteSkips.length}_** / **__${amountSkip}__**`);
    }
}