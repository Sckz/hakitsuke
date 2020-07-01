const Discord = require("discord.js")
const request = require("request")

module.exports = {
    name: "dog",
    aliases: ["chien"],
    category: "fun",
    description: "Afficher des images de chiens.",
    run: async (client, message, args) => {
        request("https://dog.ceo/api/breeds/image/random", (error, res, body) => {
        if (error) { return message.channel.send("Error-API"); }
        if (res.statusCode !== 200) { 
          return message.channel.send(`Error: ${res.statusCode}`); 
        }
        var body = JSON.parse(body);
        message.channel.send({
            embed: {
                color: 0xd6ff00,
                image: { url: body.message }
            }
        })
    });
    }
}