const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const Enmap = require("enmap")
const canvacord = require("canvacord")
client.points = new Enmap({ name: "points" });
client.on("ready", ()=>console.log("READY"));
const ranking = require("./ranking");
ranking(client);
client.login(config.TOKEN);