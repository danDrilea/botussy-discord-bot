const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const { customEmbedBuilder } = require("../../utils.js")
const { embedColorHex } = require("../../config.json")
const fs = require('node:fs');
const path = require('node:path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Lists the available commands!'),
    
  async execute(interaction) {

    let description = "";

    const foldersPath = path.join(__dirname,"../");
    const commandFolders = fs.readdirSync(foldersPath);
    
    for (const folder of commandFolders) {
      description += `*${folder} commands*\n`
      const commandsPath = path.join(foldersPath,folder);
      const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
      for (const file of commandFiles) {
        if(file.includes("redeploy"))
          continue;
        const filePath = path.join(commandsPath,file);
        const command = require(filePath);
        description += `- ${command.data.name} - ${command.data.description}\n`
      }
    }

    interaction.reply(customEmbedBuilder("Commands", description, embedColorHex));
  }
};

