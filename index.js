const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`${client.user.usarname} is online.`)
});

client.login(config.token);