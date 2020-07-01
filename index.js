const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync('./warns.json'))
var date = new Date().getTime();
const moment = require("moment")
const ms = require("ms")
const prefix = "!!"
const usersMap = new Map();

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
//𝓋. 𝟏.𝟎 ◆ 🍀
client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setActivity("Hakitsuke ✨" , {
        type: "STREAMING",
        url: "https://www.twitch.tv/monstercat"
      });
});

client.on("message", async message => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);

});
//Join
client.on('guildMemberAdd', member => {
    let vibes = member.guild.channels.get('707293025457406054')
    let cvibes = member.guild.channels.get('710134894231158891')
    let vibesftn = member.guild.channels.get('710076673818755103')
    let cvibesftn = member.guild.channels.get('710129814815768627')
    let embed = new Discord.RichEmbed()
     .setColor("GREEN")
     .setThumbnail(member.user.displayAvatarURL)
     .setDescription("𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐮𝐞 𝗮̀ " + member.user + " :tada::hugging:! 𝐓𝐮 𝐞𝐬 𝐚𝐜𝐭𝐮𝐞𝐥𝐥𝐞𝐦𝐞𝐧𝐭 𝐬𝐮𝐫 𝐥𝐞 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 **" + member.guild.name + "** ! 𝐍𝐨𝐮𝐬 𝐭𝐞 𝐬𝐨𝐮𝐡𝐚𝐢𝐭𝐨𝐧𝐬 𝐮𝐧 𝐛𝐨𝐧 𝐝𝐢𝐯𝐞𝐫𝐭𝐢𝐬𝐬𝐞𝐦𝐞𝐧𝐭 𝐬𝐮𝐫 𝐜𝐞 𝐬𝐞𝐫𝐯𝐞𝐮𝐫.")
     .addField("__Nombre d'utilisateur de ce serveur :__", `**${member.guild.memberCount}**`)
     .setFooter("Vibes by Sckz")
    console.log(`${member.guild.name} : [+1]`)
});
//Leave
client.on('guildMemberRemove', member => {
    let vibes = member.guild.channels.get('707293025457406054')
    let cvibes = member.guild.channels.get('710134894231158891')
    let vibesftn = member.guild.channels.get('710076673818755103')
    let cvibesftn = member.guild.channels.get('710129814815768627')
    let embed = new Discord.RichEmbed()
     .setColor("RED")
     .setThumbnail(member.user.displayAvatarURL)
     .setDescription(member.user.tag + " 𝐞𝐬𝐭 𝐩𝐚𝐫𝐭𝐢(𝐞) 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 :no_entry: !")
     .addField("__Nombre d'utilisateur de ce serveur :__", `**${member.guild.memberCount}**`)
     .setFooter("Vibes by Sckz")
    console.log(`${member.guild.name} : [-1]`)
});
client.on("message", async message => {
    console.log(`(${moment().format('MMMM Do YYYY, h:mm:ss a')}) - ${message.author.username}: ${message.content}`)
});
client.login(process.env.TOKEN);
