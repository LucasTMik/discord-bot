"use strict";

var _discord = require("discord.js");

require('dotenv').config();

var client = new _discord.Client();
client.on('ready', function () {
  return console.log("Im ready");
});
client.on('message', function (msg) {
  var newMsg = new _discord.Message();

  if (msg.author === "Antoniio Jr") {
    newMsg.content = "Esse mlk é o q da ré, certeza";
    msg.channel.send(newMsg);
  }

  if (msg.author && msg.author.username === "LukinhaDaGalera") {
    newMsg.content = "good";
    msg.channel.send(newMsg);
  }

  if (msg.author.username === "Allan") {
    newMsg.content = "Gay";
    msg.channel.send(newMsg);
  }
});
client.login(process.env.TOKEN);
//# sourceMappingURL=all.js.map
