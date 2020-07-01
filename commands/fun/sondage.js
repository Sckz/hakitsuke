const Discord = require("discord.js")
let anime = [
    "TokyoGhoul",
    "SNK",
    "SAO",
    "FairyTail",
    "DBZ",
    "Naruto",
    "HxH",
    "A. Classroom",
    "DeathNote",
    "Pokemon",
    "Jojo",
    "FAB",
    "Evangelion",
    "MHA",
    "OnePiece"
    ]
let perso = [
    "Kaneki Ken (TokyoGhoul)",
    "Touka (TokyoGhoul)",
    "Eto (TokyoGhoul)",
    "Eren Jäger (SNK)",
    "Livaï Ackerman (SNK)",
    "Mikasa Ackerman (SNK)",
    "Asuna (SAO)",
    "Kirito (SAO)",
    "Natsu Dragnir (FairyTail)",
    "Erza Scarlett (FairyTail)",
    "Grey Fullbuster (FairyTail)",
    "Son Goku (DBZ)",
    "Boo (DBZ)",
    "Trunks (DBZ)",
    "Vegeta (DBZ)",
    "Naruto Uzumaki(Naruto)",
    "Sasuke Uchiwa(Naruto)",
    "Jiraya (Naruto)",
    "Kirua Zoldyck(HxH)",
    "Gon Freecs (HxH)",
    "Hisoka (HxH)",
    "Koro-Sensei (A.C)",
    "Nagisa Shiota(A.C)",
    "Kaede Kayano (A.C)",
    "L (DeathNote)",
    "Kira (DeathNote)",
    "Ryuk (DeathNote)",
    "Sacha (PKMN)",
    "Pikachu (PKMN)",
    "Giorno Giovanna (Jojo)",
    "Edward Elric (FAB)",
    "Alphonse Elric (FAB)",
    "Deku (MHA)",
    "Shôto Todoroki (MHA)",
    "Monkey D. Luffy (OnePiece)",
    "Roronoa Zoro (OnePiece)",
    "Tony‑Tony Chopper (OnePiece)"
]
let jeux = [
    "Fortnite",
    "CS:GO",
    "DayZ",
    "Minecraft",
    "H1Z1",
    "FIFA",
    "Brawlhalla",
    "Paladins",
    "League Of Legend",
    "FNAF",
    "Les devoirs"
]
let animals = [
    "Chien",
    "Chat",
    "Loutre",
    "Poisson",
    "Lion",
    "Renard",
    "Ours",
    "Panda",
    "Hamster",
    "Tigre",
    "Lapin",
    "Lièvre",
    "Singe",
    "Ornithorynque",
    "Mouton",
    "Cochon",
    "Poule",
    "Hérisson",
    "Cochon-Dinde",
    "Autruche",
    "Pélikan",
    "Tortue",
    "Dophin",
    "Baleine",
    "Flamant Rose",
    "Hypopotame",
    "Hypocampe",
    "Truite",
    "Thon",
    "Raie",
    "Pigeon",
    "Canard",
    "Peroquet",
    "Saumon",
    "Hyène",
    "Paon",
]
let pkmn = [
    "Bulbizarre",
    "Herbizarrez",
    "Florizarre",
    "Salamèche",
    "Reptincel",
    "Dracaufeu",
    "Papilusion",
    "Dardagnan",
    "Zigzaton",
    "Déflaisan",
    "Roucarnage",
    "Ratatac",
    "Persian",
    "Archeduc",
    "Félinferno",
    "Oratoria",
    "Bazoucan",
    "Argouste",
    "Lucanon",
    "Symbios",
    "Lakmécygne",
    "Pashmilla",
    "Zoroark",
    "Mégapagos",
    "Baggaid",
    "Tranchodon",
    "Polagriffe",
    "Mewtwo",
    "Limaspeed",
    "Drakkarmin",
    "Scalproie"
]
module.exports = {
    name: "sondage",
    category: "fun",
    description: 'Créer un sondage',
    usage: "<anime / animals / pkmn / perso / jeux>",
    run: async (client, message, args) => {
        if (args[0].toLowerCase() === "anime") {
            let embed = new Discord.RichEmbed()
            .setTitle(" **SONDAGE** ")
            .setColor('RANDOM')
            .setDescription(`Vous préférez...\n 1️⃣ **${anime[Math.floor(Math.random() * anime.length)]}**\n 2️⃣ **${anime[Math.floor(Math.random() * anime.length)]}**`)
            .setFooter("Limen by Sckz")

            var embedSend = await message.channel.send(embed);
            embedSend.react("1️⃣");
            embedSend.react("2️⃣");
        }
        if (args[0].toLowerCase() === "perso") {
            let embed = new Discord.RichEmbed()
            .setTitle(" **SONDAGE** ")
            .setColor('RANDOM')
            .setDescription(`Vous préférez...\n 1️⃣ **${perso[Math.floor(Math.random() * perso.length)]}**\n 2️⃣ **${perso[Math.floor(Math.random() * perso.length)]}**`)
            .setFooter("Limen by Sckz")
            var embedSend = await message.channel.send(embed);
            embedSend.react("1️⃣");
            embedSend.react("2️⃣");
        }
        if (args[0].toLowerCase() === "jeux") {
            let embed = new Discord.RichEmbed()
            .setTitle(" **SONDAGE** ")
            .setColor('RANDOM')
            .setDescription(`Vous préférez...\n 1️⃣ **${jeux[Math.floor(Math.random() * jeux.length)]}**\n 2️⃣ **${jeux[Math.floor(Math.random() * jeux.length)]}**`)
            .setFooter("Limen by Sckz")
            var embedSend = await message.channel.send(embed);
            embedSend.react("1️⃣");
            embedSend.react("2️⃣");
        }
        if (args[0].toLowerCase() === "pkmn") {
            let embed = new Discord.RichEmbed()
            .setTitle(" **SONDAGE** ")
            .setColor('RANDOM')
            .setDescription(`Vous préférez...\n 1️⃣ **${pkmn[Math.floor(Math.random() * pkmn.length)]}**\n 2️⃣ **${pkmn[Math.floor(Math.random() * pkmn.length)]}**`)
            .setFooter("Limen by Sckz")
            var embedSend = await message.channel.send(embed);
            embedSend.react("1️⃣");
            embedSend.react("2️⃣");
        }
        if (args[0].toLowerCase() === "animals") {
            let embed = new Discord.RichEmbed()
            .setTitle(" **SONDAGE** ")
            .setColor('RANDOM')
            .setDescription(`Vous préférez...\n 1️⃣ **${animals[Math.floor(Math.random() * animals.length)]}**\n 2️⃣ **${animals[Math.floor(Math.random() * animals.length)]}**`)
            .setFooter("Limen by Sckz")
            var embedSend = await message.channel.send(embed);
            embedSend.react("1️⃣");
            embedSend.react("2️⃣");
        }
    }
}