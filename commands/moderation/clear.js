const Discord = require("discord.js")

module.exports = {
    name: "clear",
    category: "moderation",
    description: "Supprimer des messages.",
    usage: "<nombre de message(s)>",
    run: async (client, message, args) => {
        let erreur1 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Vous n'avez la permission !**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(erreur1).then(m => m.delete(5000));
        let count = args[0]
        let erreur2 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Veuillez indiquer un nombre de message à supprimer !**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (!count) return message.channel.send(erreur2).then(m => m.delete(5000));
        let erreur3 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Veuillez indiquer un nombre valide !**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (isNaN(count)) return message.channel.send(erreur3).then(m => m.delete(5000));
        let erreur4 = new Discord.RichEmbed()
         .setAuthor("Une erreur est survenue", 'https://emoji.gg/assets/emoji/7685_no.png')
         .setDescription(`**Veuillez indiquer un nombre entre 1 et 80 !**`)
         .setFooter('Ce message se supprime automatiquement.')
        if (count < 1 || count > 100) return message.channel.send(erreur4).then(m => m.delete(5000));
        let send = new Discord.RichEmbed()
         .setAuthor("Commande effectuée", 'https://emoji.gg/assets/emoji/2990_yes.png')
         .setDescription("``" + count + "`` **messages ont été supprimés**")
         .setFooter('Ce message se supprime automatiquement.')
        message.channel.bulkDelete(parseInt(count) + 1)
        message.channel.send(send).then(m => m.delete(10000));
    }
}
