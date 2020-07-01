const Discord = require("discord.js")
const randomPuppy = require('random-puppy');

module.exports = {
    name: "memes",
    category: "fun",
    description: 'Afficher une image memes',
    run: async (client, message, args) => {
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]
    
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
    
        randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            })
    }).catch(err => console.error(err));
    }
}