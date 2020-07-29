const Discord = require("discord.js")

module.exports = {
    name: "clear",
    category: "moderation",
    description: "Supprimer des messages.",
    usage: "<nombre de message(s)>",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("> Vous n'avez pas la permission !").then(m => m.delete(5000));
        let count = args[0]
        if (!count) return message.channel.send("> Veuillez indiquer un nombre de messages à supprimer !").then(m => m.delete(5000));
        if (isNaN(count)) return message.channel.send("> Veuillez indiquer un nombre valide").then(m => m.delete(5000));
        if (count < 1 || count > 100) return message.channel.send("> Veuillez indiquer un nombre entre 1 et 80").then(m => m.delete(5000));
        message.channel.send("> ``" + count + '`` Messages supprimés !')
        let send = new Discord.RichEmbed()
         .setAuthor("Commande effectuée", 'https://emoji.gg/assets/emoji/2990_yes.png')
         .setDescription("``" + count + "`` **messages ont été supprimés**")
        message.channel.bulkDelete(parseInt(count) + 2)
    }
}
