const Discord = require("discord.js")

module.exports = {
    name: "test1",
    category: "test",
    description: "test",
    run: async (client, message, args) => {
        message.channel.send("test :noir:")
    }
}