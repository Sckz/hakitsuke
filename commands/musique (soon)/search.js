const search = require('yt-search');

module.exports = {
    name: "search",
    category: "musique",
    description: "Rechercher une vidéo YouTube.",
    run: async (client, message, args, ops) => {

        search(args.join(' '), function (err, res) {
            if (err) return message.channel.send("> Erreur : Plugin-HS."); //Plugin hors service
            var videos = res.videos.slice(0, 10);
            var response = '';
            for (var i in videos) {
                response += `**[${parseInt(i) + 1}]:** ${videos[i].title} \r\n`;
            }
            response += `Choisissez un nombre entre 1 et ${videos.length}.`;
            message.channel.send(response);
            const filter = music => !isNaN(music.content) && music.content < videos.length + 1 && music.content > 0;
            const collection = message.channel.createMessageCollector(filter);
            collection.videos = videos;
            collection.once('collect', function (music) {
                var commandFile = require('./play.js');
                commandFile.run(client, message, [this.videos[parseInt(music.content) - 1].url], ops);
            })
        })

    }
}