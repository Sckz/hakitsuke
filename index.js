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
    client.user.setActivity("Hakitsuke ✨ - /help" , {
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
client.on('messageReactionAdd', async (reaction, user) => {
    let membered = reaction.message.guild.member(user)
    let r0 = member.guild.roles.find(role => role.name === '🎮・Geek')
    let r1 = member.guild.roles.find(role => role.name === '✏️・Dessinateur')
    let r2 = member.guild.roles.find(role => role.name === '㊙️・Otaku')
    let r3 = member.guild.roles.find(role => role.name === '🎵・Musicien')
    let r4 = member.guild.roles.find(role => role.name === '🚬・+18')
    let r5 = member.guild.roles.find(role => role.name === '🔞・-18')
    let r6 = member.guild.roles.find(role => role.name === "🌐・Notif' Partenariat")
    let r7 = member.guild.roles.find(role => role.name === "🤡・Notif' Animation")
    let r8 = member.guild.roles.find(role => role.name === "🎉・Notif' Giveaway")
    let r9 = member.guild.roles.find(role => role.name === "🔕・No ping")
    let r10 = member.guild.roles.find(role => role.name === "🔔・Ping")

    if (reaction.emoji.name === '🎮') {
			membered.addRole(r0)
		} 
    if (reaction.emoji.name === '✏️') {
			membered.addRole(r1)
		}
    if (reaction.emoji.name === '㊙️') {
			membered.addRole(r2)
		}
    if (reaction.emoji.name === '🎵') {
			membered.addRole(r3)
		}
    if (reaction.emoji.name === '🚬') {
			membered.addRole(r4)
		}
    if (reaction.emoji.name === '🔞') {
			membered.addRole(r5)
		}
    if (reaction.emoji.name === '🌐') {
			membered.addRole(r6)
		}
    if (reaction.emoji.name === '🤡') {
			membered.addRole(r7)
		}
    if (reaction.emoji.name === '🎉') {
			membered.addRole(r5)
		}
    if (reaction.emoji.name === '🔔') {
			membered.addRole(r10)
		}
    if (reaction.emoji.name === '🔕') {
			membered.addRole(r9)
		}
})
client.on("message", async message => {
    if(message.author.bot) return;
    const channel = client.channels.find('name', "💬・messages")
    channel.send(`(${moment().format('MMMM Do YYYY, h:mm:ss a')}) - ${message.author.tag} ➜ ${message.content}`)
});
client.login(process.env.TOKEN);
