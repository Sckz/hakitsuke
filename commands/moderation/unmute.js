const Discord = require("discord.js")

module.exports = {
    name: "unmute",
    category: "moderation",
    description: "Rendre la possibilité de parler a un utilisateur.",
    usage: "<utilisateur>",
    run: async (client, message, args) => {
        message.channel.bulkDelete(parseInt(1))
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("> Vous n'avez pas la permission d'utiliser cette commande.").then(m => m.delete(5000));
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("> Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("> Vous ne pouvez pas unmute ce membre.").then(m => m.delete(5000));
        if(!member.manageable) return message.channel.send("> Je ne pas unmute ce membre.").then(m => m.delete(5000));
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send("> " + member + `n'est plus muet :white_check_mark: `)
        let embed = new Discord.RichEmbed()
             .setColor('AQUA')
             .setTitle(`🔕 UNMUTE 🔕`)
             .setAuthor(client.user, client.user.displayAvatarURL)
             .setThumbnail(member.user.displayAvatarURL)
             .setDescription(member.user + ` n'est plus muet 🔕!`)
             .addField(`📌 Modérateur: `, message.author)
             .setFooter(`Log Modération`)
             .setTimestamp()
            const channel = client.channels.find('name', "🚫・sanctions")
            channel.send(embed) 
    }
}
