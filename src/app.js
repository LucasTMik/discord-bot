require('dotenv').config();
import { Client, Message, MessageEmbed } from 'discord.js';
import ytdl from 'ytdl-core';
import ytSearch from 'yt-search';

const client = new Client();

client.on('ready', () => console.log("Im readie"));

client.on('message', message => {
    const args = message.content.split(' ');
    if(args && args.length && args[0] === 'solta') {
        message.member.voice.channel.join()
            .then((connection) => {
                ytSearch(args[1].trim(), (err, r) => {
                    if(err) return;
                    const videos = r.videos;
                    console.log(videos);
                    connection.play(ytdl(videos[0].url));
                })
                const msg = new MessageEmbed()
                    .setColor('#0099ff')
                    .setURL(args[0])
                    .setTitle("Soltando");
                
            });
    }
})

client.login(process.env.TOKEN);