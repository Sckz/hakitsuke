const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Informations & liste des commandes a utilisées sur le serveur",
    usage: "[commande | alias]",
    run: async (client, message, args) => {
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
    const embed = new RichEmbed()
        .setColor("AQUA")

    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `- \`${cmd.name}\``)
            .join(" | ");
    }

    const info = client.categories.map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`).reduce((string, category) => string + "\n" + category);

    return message.author.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new RichEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    
    let info = `La commande **${input.toLowerCase()}** est indisponible ou n'éxiste pas`;

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info));
    }

    if (cmd.name) info = `**Nom de la commande**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    //if (cmd.colaborations) info += `\n **Colaborations**: ${cmd.colaborations}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter(`Syntax: <> = obligatoire, [] = optionnel`);
    }

    return message.channel.send(embed.setColor("GREEN").setDescription(info));
}