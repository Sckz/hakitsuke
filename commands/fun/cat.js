const Discord = require("discord.js")
const request = require("request")

module.exports = {
    name: "cat",
    aliases: ["chat"],
    category: "fun",
    description: "Afficher des images de chats.",
    run: async (client, message, args) => {
        request("https://aws.random.cat/meow", (error, res, body) => {
        if (error) { return message.channel.send("Error-API").then(m => m.delete(5000)); }
        if (res.statusCode !== 200) { 
          return message.channel.send(`Error: ${res.statusCode}`).then(m => m.delete(5000)); 
        }
         var body = JSON.parse(body);
        message.channel.send({
            embed: {
                color: 0xd6ff00,
                image: { url: body.file }
            }
        })
    });
    }
}