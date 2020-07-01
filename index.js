const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync('./warns.json'))
var date = new Date().getTime();
const moment = require("moment")
const ms = require("ms")
const prefix = "/"
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
    let r0 = member.guild.roles.find(role => role.name === '___________________')
    let r1 = member.guild.roles.find(role => role.name === '___________________')
    let r2 = member.guild.roles.find(role => role.name === '___________________')
    let r3 = member.guild.roles.find(role => role.name === '___________________')
    member.addRole(r0)
    member.addRole(r1)
    member.addRole(r2)
    member.addRole(r3)
});
//Leave
client.on('guildMemberRemove', member => {
});
client.on('message', message =>{
    if (message.author.bot) return;

    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id)
        let msgCount = userData.msgCount;
        var membre = message.guild.member(message.author);

         if(parseInt(msgCount) === 5) {
            message.channel.bulkDelete(parseInt(5))
            message.channel.send(`> ${membre} vos messages ont été supprimés pour **__Spam__**. :white_check_mark:`)
        } else {
            msgCount++;
            userData.msgCount = msgCount; 
            usersMap.set(message.author.id, userData);
        }
    }
    else {
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage: message,
            timer: null
        })
        setTimeout(() => {
            usersMap.delete(message.author.id)
        }, 5000);
    }
})

client.on("message", async message => {
    console.log(`(${moment().format('MMMM Do YYYY, h:mm:ss a')}) - ${message.author.username}: ${message.content}`)
    if(message.author.bot) return;
    const channel = client.channels.find('name', "💬messages")
    channel.send(`(${moment().format('MMMM Do YYYY, h:mm:ss a')}) - ${message.author.username}: ${message.content}`)
});
client.login(process.env.TOKEN);
