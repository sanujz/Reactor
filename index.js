const { Client, ActivityType } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase().includes('<@1157648170159976479>')) {
    message.react('🇲');
    message.react('🇦');
    message.react('🇭');
  }
});

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase().includes('<@707111534689648760>')) {
    message.react('🇵');
    message.react('🇷');
    message.react('🇦');
    message.react('🇹');
  }
});

client.login(process.env.token);
