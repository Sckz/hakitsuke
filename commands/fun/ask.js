const Discord = require("discord.js")

module.exports = {
    name: "ask",
    aliases: ["question"],
    category: "fun",
    description: 'Poser une question au BOT',
    usage: "<question>",
    run: async (client, message, args) => {
        if (!args[1]) return message.channel.send("> Veuillez poser une question.").then(m => m.delete(5000));
        let answers = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument 😇", "Tié un fou 🤯", "La raclette était bonne 🥰"]
        let question = args.slice(1).join(" ")
        message.channel.send(`**${answers[Math.floor(Math.random() * answers.length)]}**`)
    }
}