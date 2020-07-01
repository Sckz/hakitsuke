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
});
//Leave
client.on('guildMemberRemove', member => {
    let vibes = member.guild.channels.get('707293025457406054')
    let cvibes = member.guild.channels.get('710134894231158891')
    let vibesftn = member.guild.channels.get('710076673818755103')
    let cvibesftn = member.guild.channels.get('710129814815768627')
});
client.on("message", async message => {
    console.log(`(${moment().format('MMMM Do YYYY, h:mm:ss a')}) - ${message.author.username}: ${message.content}`)
});
client.login(process.env.TOKEN);
