const Discord = require("discord.js")

module.exports = {
    name: "autoclick",
    aliases: ["auto"],
    category: "fun",
    description: '..........',
    run: async (client, message, args) => {
        message.channel.send("**VBS-Autoclick** : Démarrage...").then(m => m.delete(5000));
        let loading = await message.channel.send("**VBS-Autoclick** : Loading **0%**")
        loading.edit("**VBS-Autoclick** : Loading **15%**")
        loading.edit("**VBS-Autoclick** : Loading **30%**")
        loading.edit("**VBS-Autoclick** : Loading **50%**")
        loading.edit("**VBS-Autoclick** : Loading **65%**")
        loading.edit("**VBS-Autoclick** : Loading **80%**")
        loading.edit("**VBS-Autoclick** : Loading **95%**")
        loading.edit("**VBS-Autoclick** : Loading **100%**")

        loading.edit(`**VBS-Autoclick** : **${message.author.username}** l'autoclick est maintenant sur votre "Pactify Launcher"`)
        
    }
}