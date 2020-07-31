const Discord = require("discord.js")
const ms = require('ms')
const moment = require("moment")
//var returned_endate = moment(startdate).add(2, 'hours')

module.exports = {
    name: "giveaway",
    aliases: ["gv", "giveway"],
    category: "fun",
    description: 'Créer un tirage au sort.',
    usage: "<gagnants> <temps(s/m/h)> <lot>",
    run: async (client, message, args) => {
         if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("> Vous n'avez pas la permission").then(m => m.delete(5000));
     var giveawayEmbed = new Discord.RichEmbed()
         .setTitle(`**${item}**`)
         .setColor(16639033)
         .setDescription(`*Veuillez réagir avec 🎉 pour participer.*\n__**Fin dans:**__ ${time}\n__**Hôte**__ : ${message.author.username}`)
         .setAuthor("🎉 GIVEAWAY 🎉", client.user.displayAvatarURL)
         .setFooter("Smoked", client.user.displayAvatarURL)
         .setTimestamp("")
        
        var embedSend = await message.channel.send(giveawayEmbed);
        var item = "";
        var time;
        var winnerCount;
     
    
        if (!args[0]) return message.channel.send("> Veuillez spécifier le nombre de gagnant(s).")
        if (!args[1]) return message.channel.send("> Veuillez spécifier le temps que va durer le concours.")
        if (!args[2]) return message.channel.send("> Veuillez spécifier le lot a gagner.")
     
        winnerCount = args[0];
        time = args[1];
        item = args.splice(2, args.length).join(' ');
     
        message.delete();
     
        var date = new Date().getTime();
        var dateTime = new Date(date + (time * 1000));

        embedSend.react("🎉");
     
        setTimeout(function () {
     
            var random = 0;
            var winners = [];
            var inList = false;
     
            var peopleReacted = embedSend.reactions.get("🎉").users.array()
     

            for (var i = 0; i < peopleReacted.length; i++) {
                if (peopleReacted[i].id == client.user.id) {
                    peopleReacted.splice(i, 1);
                    continue;
                }
            }
     
            if (peopleReacted.length == 0) {
                return message.channel.send("> Il n'y a pas assez de participant").then(m => m.delete(5000));
            }
     
            if (peopleReacted.length < winnerCount) {
                return message.channel.send("> Il y a trop peu de personnes qui ont participé.").then(m => m.delete(5000));
            }
     
            for (var i = 0; i < winnerCount; i++) {
     
                inList = false;
     
           
               random = Math.floor(Math.random() * peopleReacted.length);
                for (var y = 0; y < winners.length; y++) {
                    if (winners[y] == peopleReacted[random]) {
                        i--;
                        inList = true;
                        break;
                    }
                }
     
                if (!inList) {
                    winners.push(peopleReacted[random]);
                }
     
            }
     
            for (var i = 0; i < winners.length; i++) {
               var embedwin = new Discord.RichEmbed()
                .setTitle(`**${item}**`)
                .setColor(16639033)
                .setDescription(`**__Gagnant:__** ${winners[i]}\n\n__**Durée:**__ Terminé.\n__**Hôte:**__ ${message.author.username}`)
                .setAuthor("🎉 GIVEAWAY 🎉", client.user.displayAvatarURL)
                .setFooter("Smoked | Fin dans ${}", client.user.displayAvatarURL)
                .setTimestamp("")
                message.channel.send(`> Félicitation à ${winners[i]}. Tu as gagné : **${item}**.`)
                giveawayEmbed.edit(embedwin)
                    }
     
        }, ms(time));
    }
}
