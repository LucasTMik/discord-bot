"use strict";

var _discord = require("discord.js");

var _ytdlCore = _interopRequireDefault(require("ytdl-core"));

var _ytSearch = _interopRequireDefault(require("yt-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var client = new _discord.Client();
client.on('ready', function () {
  return console.log("Im readie");
});
client.on('message', function (message) {
  var args = message.content.split(' ');

  if (args && args.length && args[0] === 'solta') {
    message.member.voice.channel.join().then(function (connection) {
      (0, _ytSearch["default"])(args[1].trim(), function (err, r) {
        if (err) return;
        var videos = r.videos;
        console.log(videos);
        connection.play((0, _ytdlCore["default"])(videos[0].url));
      });
      var msg = new _discord.MessageEmbed().setColor('#0099ff').setURL(args[0]).setTitle("Soltando");
    });
  }
});
client.login(process.env.TOKEN);
"use strict";
//# sourceMappingURL=all.js.map
