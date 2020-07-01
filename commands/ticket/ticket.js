const Discord = require("discord.js")

module.exports = {
    name: "ticket",
    category: "moderation",
    description: "Créer un ticket pour de l'aide.",
    run: async (client, message, args) => {
    let category = message.guild.channels.find(c => c.name == "Ticket" && c.type == "category")
    if (!message.guild.channels.find(c => c.name == "Ticket" && c.type == "category")) return message.channel.send("> Vous devez d'abord utiliser la commande de Setup ou créer la catégorie Ticket manuellement.")
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;
 
    var bool = false;
    message.guild.channels.forEach((channel) => {
 
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("Vous avez déjà créé un ticket");
 
            bool = true;
 
        }
 
    });
    if (bool == true) return;

 
    message.channel.send(`Bonjour, ${message.author}, votre ticket a été ouvert :white_check_mark: .
    ⛔️ Pour le fermer, utilises !!close ⛔️
    ID du Ticket : ${userDiscriminator}`);
 
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {
 
        createdChan.setParent(category).then((settedParent) => { 
 
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
        })
    });
    }
}
