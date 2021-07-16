const Discord = require('discord.js');

const bot = new Discord.Client();
const prefix = '*';

bot.once('ready', () => {
console.log('Quacka is here boi');
});

bot.on("message", message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const argument = message.content.slice(prefix.length).split(/ +/);
    const command = argument.shift().toLowerCase();
    if(command === "ping"){
    message.channel.send("Yes?");
    } else if (command === "youtube"){
    message.channel.send("https://www.youtube.com");
    } else if (command === "spotify"){
    message.channel.send("https://www.spotify.com");
    } else if (command === "help"){
    message.channel.send("`*spotify` sends spotify link. `*youtube` sends a youtube link. `*steam` sends a steam link.");

    } else if (command === "steam"){
    message.channel.send("https://store.steampowered.com");
    }
});



bot.login('ODY1NzAyMzIyNzM0NDk3ODIz.YPH2HQ.68KpeoX1DfRS_a8nNKH2gDTrQ7M');

