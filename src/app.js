import { Client, Message } from 'discord.js';

const client = new Client();

client.on('ready', () => console.log("Im ready"));

client.on('message', msg => {
    const newMsg = new Message();

    if(msg.author === "Antoniio Jr") {
        newMsg.content = "Esse mlk é o q da ré, certeza"
        msg.channel.send(newMsg);
    }

    if(msg.author && msg.author.username === "LukinhaDaGalera") {
        newMsg.content = "good";
        msg.channel.send(newMsg);
    }
    
    if(msg.author.username === "Allan") {
        newMsg.content = "Gay";
        msg.channel.send(newMsg);
    }
});

client.login(process.env.TOKEN);