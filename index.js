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
//cmd
client.on('message', msg => {
const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	if (args[0] === "sendm") {
		let m1 = new Discord.RichEmbed()
		.setTitle("**▬ 🪐 Vérification 🪐 ▬**")
		.setDescription(`__Bienvenue sur **${msg.guild.name}**__\n\n**Pour avoir accès a ce serveur, Veuillez réagir a ce message. ✅**\n\n*__Attention__* ⚠️: : \n*Ce serveur n'insiste en aucun cas a la consommation de tabac ou autres produits pouvant mener a une addiction.*`)
		.setImage("https://cdn.discordapp.com/attachments/728659758793621566/735439027133743144/tenor_2_1.gif")
		.setFooter("by SCKZ.")
		
		let sender = msg.guild.channels.get("727931482127204522")
		//sender.send(m1)
		//
		let m0 = new Discord.RichEmbed()
		.setTitle("**▬ 📜 Reglement 📜 ▬**")
		.setDescription(`<:SMdot:737340714500751400> **Pas d'harcèlement envers d'autres joueurs.** Racisme, sexisme, xénophobie, transphobie, homophobie, misogynie, etc. n'est autorisé.\n <:SMdot:737340714500751400> **Gardez toute discussion civile** et dans les bons canaux. Nous pouvons vous demander de déplacer votre conversation.\n <:SMdot:737340714500751400> **Pas de langage inapproprié.** Restez respectueux envers autrui.\n <:SMdot:737340714500751400> **Pas de spam ou d'inondation des salons avec des messages.** Il est également interdit d'encourager les autres à envoyer du spam.\n <:SMdot:737340714500751400> **Aucun nom d'utilisateur**, statut ou photo de profil inapproprié ou offensant n'est permis. Il peut vous être demandé de les modifier.\n <:SMdot:737340714500751400> **Pas de politique.** Il n'est pas permis de parler de problèmes graves impliquant des représentants du gouvernement, des partis politiques, des religions ou des désaccords géopolitiques. Même si ces sujets sont abordés de manière civile, ce n'est pas le bon espace pour ces conversations.\n <:SMdot:737340714500751400> **Pas d'autopromotion**, de sollicitation ou de publicité dans les salles de discussion ou générales. Cela inclut également les DM d'un utilisateur.\n <:SMdot:737340714500751400> **Les modérateurs ont le dernier mot.** Écoutez et respectez les bénévoles qui font fonctionner ce serveur.\n <:SMdot:737340714500751400> **Respectez les conditions d'utilisation et les directives de Discord.**\n<:SMFleche:737340683618222210> https://discord.com/terms \n <:SMFleche:737340683618222210> https://discord.com/guidelines`)
		.setFooter(`${msg.guild.name}`)
let sender2 = msg.guild.channels.get("727897833688268990")
//sender2.send(m0)
		//
		let m2 = new Discord.RichEmbed()
		.setTitle("**▬ 🌙 Présentation 🌙 ▬**")
		.setDescription("")
		.setImage("https://cdn.discordapp.com/attachments/728659758793621566/735439027133743144/tenor_2_1.gif")
		.setFooter(`${msg.guild.name}`)
		//
		let m3 = new Discord.RichEmbed()
		.setTitle("**▬ 🌈 Aide-nous ! 🌈 ▬**")
		.setDescription(`__**Tu veux nous soutenir et avoir le rôle <@&728554632120369172> ?**__\n\n**Tu as juste à mettre le lien du discord en statut et le tour est joué :SM6385_christmaspartyparrot: **\n**Lien du discord  : https://discord.gg/rV5R2Ge **\n**_PS: pour le recevoir il te suffit de contacter un <@&727635160375492628> _**`)
		.setFooter(`${msg.guild.name}`)
		let sender3 = msg.guild.channels.get("735947525634261053")
		//sender3.send(m3)
		//
		let m4 = new Discord.RichEmbed()
		.setTitle("**▬ 🦑 Grades 🦑 ▬**")
		.setDescription(`𝟱 ➠ <@&727878363464859750> \n𝟭𝟬 ➠ <@&727879022599733338> \n𝟭𝟱 ➠ <@&727659531022237786> \n𝟮𝟬 ➠ <@&727896528076668948> \n𝟮𝟱 ➠ <@&727901183209111582> \n𝟯𝟬 ➠ <@&727901433466191942> \n𝟯𝟱 ➠ <@&727901885364830218> \n𝟰𝟬 ➠ <@&727902523104690267> \n𝟰𝟱 ➠ <@&727905648137994270> \n𝟱𝟬 ➠  <@&727906598370148402> \n𝟱𝟱 ➠ <@&727907532089065543> \n𝟲𝟬 ➠ <@&727908327442481183>`)
		.setFooter(`${msg.guild.name}`)
		.setImage("https://cdn.discordapp.com/attachments/697812739359244308/736949465428131910/giphy.gif")
		let sender4 = msg.guild.channels.get("728354770678710414")
		//sender4.send(m4)
		//
		let m5 = new Discord.RichEmbed()
		.setDescription(`**Heyy !!** <:SMRainbow_heart:728668608712147013> \n\n**Merci pour ton boost BG/BLG** <:SMnitro:728668780414107789> \n**Pour activer ton grade personnalisé il te suffit de ping un créateur et d'attendre ça réponse !** <:yellowverif:718819562560159754> \n\n*__(le spam de ping est INTERDIT ,vous risquez d'etre sanctionné si c'est le cas)__* ⚠️\n <@&727959571737608252>`)
		.setFooter(`${msg.guild.name}`)
		let sender5 = msg.guild.channels.get("736663000454266940")
		sender5.send(m5)
		
	}
})
//Join
client.on('guildMemberAdd', member => {
let phrase = [
`**Bienvenue à ${member.user} qui a rejoint le discord 💎.**`,
`**Oh! Un ${member.user} est apparu ! Vite il faut le capturer ! <:pokeball:737021679657681029>**`,
`**OMG! Il y a le fameux ${member.user} qui est la ! ✨**`,
`**${member.user} a rejoint la partie !** ☑️`,
`**${member.user} est bien arrivé(e) a destination. 🚀`
]
	let embed = new Discord.RichEmbed()
	 .setColor(16250871)
	 .setTitle("🛬・__**NOUVEL ARRIVANT !**__")
	 .setThumbnail(member.user.displayAvatarURL)
	 .setDescription(`${phrase[Math.floor(Math.random() * phrase.length)]}\n\n__**Amuse-toi bien ! 💘**__`)
	 .setImage("https://cdn.discordapp.com/attachments/615679279220523160/737321556430159922/srdte-erfe_5.gif")
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
        const role = message.guild.roles.find(role => role.name === 'Muted')
            membre.addRole(role);
        message.channel.send(`> ${membre} a été temporairement rendu muet pour __**Spam**__ pendant **5m** ! ☑️`)
            setTimeout(function () {

                membre.removeRole(role)
    
                message.channel.send(`> **${membre}** n'est plus muet :white_check_mark: !`)
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
		 //
	let sanction = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle(`⛔ ◆ Sanction`)
            .setAuthor(client.user.username, client.user.displayAvatarURL)
            .setThumbnail(membre.user.displayAvatarURL)
            .setDescription(`**Vous avez été sanctionné !**/n/n*Durée:* __**5m**__`)
            .addField(`📌 Type: `, `**__Réduction au silence__**`)
            .addField('📄 Raison :', `**__Spam (Automatique)__**`)
            .setFooter(`Smoked" 🚬`)
            .setTimestamp()
        membre.send(sanction)
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
