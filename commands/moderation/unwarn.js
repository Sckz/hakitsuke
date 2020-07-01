const Discord = require("discord.js")
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync('./warns.json'))

module.exports = {
    name: "unwarn",
    category: "moderation",
    description: "Enlever le dernier avertissement d'un utilisateur",
    usage: "<utilisateur>",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
        let member = message.mentions.members.first()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("> Vous n'avez pas la permission d'utiliser cette commande.").then(m => m.delete(5000));
        if(!member) return message.channel.send("> Membre introuvable")
        if(!warns[member.id] || !warns[member.id].length) return message.channel.send("> Ce membre n'a actuellement aucun warn.").then(m => m.delete(5000));
        warns[member.id].shift()
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send("> Le dernier avertissement de " + member + " a été retiré :white_check_mark:")
    }
}
