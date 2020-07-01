const Discord = require("discord.js")
const ytdl = require("ytdl-core")

module.exports = {
    name: "play",
    category: "musique",
    description: "Lancer une musique a partir d'une URL",
    usage: "<URL>",
    run: async (client, message, args, ops) => {
        if(!message.member.voiceChannel) return message.channel.send("> Veuillez être connecter dans un channel.")
        if (message.guild.me.voiceChannel) return message.channel.send("> Désolé le bot ne peut pas se connecter à ce channel.")
        if (!args[0]) return message.channel.send("> Veuillez insérer l'URL d'une vidéo youtube.")

        var validate = await ytdl.validateURL(args[0]);
        if(!validate) return message.channel.send("> L'URL n'est pas valide.")

        var info = await ytdl.getInfo(args[0]);
        const streamOptions = { seek: 0, volume: 1 };
 
    let voiceConnection = message.member.voiceChannel.join()
        .then(voiceConnection => {
            const stream = ytdl(args[0], { filter: 'audioonly' });
            const streamDispatcher = voiceConnection.playStream(stream, streamOptions);
        })
        .catch(console.error);
 
    message.channel.send(`Nu aan het spelen ${info.title}`);
    }
}