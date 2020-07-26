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
    client.user.setActivity("Protect 🛡️ • /help", {
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
let phrase = [
`**Bienvenue à ${member.user} qui a rejoint le discord 💎.**`,
`**Oh! Un ${member.user} est apparu ! Vite il faut le capturer ! <:pokeball:737021679657681029>**`,
`**OMG! Il y a le fameux ${member.user} qui est la ! ✨**`
]
	let embed = new Discord.RichEmbed()
	 .setColor(16250871)
	 .setTitle("🛬・__**NOUVEL ARRIVANT !**__")
	 .setThumbnail(member.user.displayAvatarURL)
	 .setDescription(`${phrase[Math.floor(Math.random() * phrase.length)]}\n__**Amuse-toi bien ! 💘**__`)
	 .setImage("https://media.discordapp.net/attachments/615679279220523160/736957237884485702/1595424114075.jpg")
         .setFooter(`Smoked | Utilisateurs : ${member.guild.memberCount}`)

	let sender = member.guild.channels.get("727635906239922316")
	sender.send(embed)
	
    let r1 = member.guild.roles.find(role => role.name === '▬▬▬▬『 Rôles 』▬▬▬▬')
    let r2 = member.guild.roles.find(role => role.name === '▬▬▬『 Permissions 』▬▬▬')
    let r3 = member.guild.roles.find(role => role.name === '▬▬▬▬『 Sexe 』▬▬▬▬')
    let r4 = member.guild.roles.find(role => role.name === '▬▬▬『 Grades 』▬▬▬')
        let r5 = member.guild.roles.find(role => role.name === '▬▬▬『 Relation 』▬▬▬')
    let r6 = member.guild.roles.find(role => role.name === '▬▬▬『 Activités 』▬▬▬')
	let r7 = member.guild.roles.find(role => role.name === '▬▬▬▬『 Âge 』▬▬▬▬')
    let r8 = member.guild.roles.find(role => role.name === '▬▬▬『 Notifications 』▬▬▬')
    let r9 = member.guild.roles.find(role => role.name === '▬▬▬▬『 Ping 』▬▬▬▬')
    let r10 = member.guild.roles.find(role => role.name === '▬▬▬『 Orientation Sexuelle 』▬▬▬')
let r11 = member.guild.roles.find(role => role.name === '▬▬▬『 Protection 』▬▬▬')
    	member.addRole(r1)
    	member.addRole(r2)
    	member.addRole(r3)
	member.addRole(r4)
	member.addRole(r5)
	member.addRole(r6)
	member.addRole(r7)
	member.addRole(r8)
	member.addRole(r9)
member.addRole(r10)
member.addRole(r11)
	
	let sender1 = client.channels.find('name', "🛫・arrivés")
	sender1.send(`(${moment().format('MMMM Do YYYY, h:mm:ss a')}) | ${member.user} **a rejoint le serveur. ☑️**`)
	 
});
//Leave
client.on('guildMemberRemove', member => {
	let sender2 = client.channels.find('name', "🛫・arrivés")
	sender2.send(`(${moment().format('MMMM Do YYYY, h:mm:ss a')}) | **__${member.user.username}__ a quitté le serveur. ⛔**`)
});
client.on('message', message =>{
    if (message.author.bot) return;

    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id)
        let msgCount = userData.msgCount;
        var membre = message.guild.member(message.author);

         if(parseInt(msgCount) === 5) {
            message.channel.bulkDelete(parseInt(5))
        const role = msg.guild.roles.find(role => role.name === 'Muted')
            membre.addRole(role);
        msg.channel.send(`> ${membre} a été temporairement rendu muet pour __**Spam**__ pendant **5m** ! ☑️`)
            setTimeout(function () {

                membre.removeRole(role)
    
                msg.channel.send(`> **${membre}** n'est plus muet :white_check_mark: !`)
            }, ms("5m"));
           let embed = new Discord.RichEmbed()
            .setColor('GREEN')
            .setTitle(`🔕 ◆ MUTE TEMPORAIRE`)
            .setAuthor(client.user.username, client.user.displayAvatarURL)
            .setThumbnail(message.author.displayAvatarURL)
            .setDescription(membre + ` a été rendu muet temporairement pendant **5m**`)
            .addField(`📌 Modérateur: `, "**Automatique**")
            .addField('📄 Raison :', `**__Spam__**`)
            .setFooter(`Log Modération`)
            .setTimestamp()
        const channel = client.channels.find('name', "🚫・sanctions")
        channel.send(embed)
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
    if(message.author.bot) return;
    const channel = client.channels.find('name', "💬・messages")
    channel.send(`(${moment().format('MMMM Do YYYY, h:mm:ss a')}) - ${message.author.tag} ➜ ${message.content}`)
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {
       
//let embed = new Discord.RichEmbed()
          //  .setColor('GREEN')
          //  .setTitle(`☑️ ◆ JOIN CHANNEL`)
           // .setAuthor(client.user.username, client.user.displayAvatarURL)
	   // .setDescription(newUserChannel.user + ` a rejoint un salon vocal !`)
          //  .addField('📄 Channel :', `${message.member.voiceChannel.name}`)
           // .setFooter(`Log Modération`)
            //.setTimestamp()
	  
  } else if(newUserChannel === undefined){

   // let embed = new Discord.RichEmbed()
        //    .setColor('RED')
           // .setTitle(`⛔ ◆ LEAVE CHANNEL`)
          //  .setAuthor(client.user.username, client.user.displayAvatarURL)
           // .setDescription(newUserChannel.user + ` a rejoint un salon vocal !`)
           // .addField('📄 Channel :', `${oldMember.voiceChannel.name}`)
          //  .setFooter(`Log Modération`)
           // .setTimestamp()

  }
})
client.login(process.env.TOKEN);
