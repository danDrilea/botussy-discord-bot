const { SlashCommandBuilder } = require("@discordjs/builders");
const { customEmbedBuilder } = require("../../utils.js");
const { embedColorHex } = require("../../config.json");

const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("filterhelp")
        .setDescription("lists the filters you can apply"),
    
    async execute(interaction) {
        let description = "";
        for (const key in interaction.client.distube.filters)
            description += `${key}\n`

        interaction.reply(customEmbedBuilder("Filters",description,embedColorHex));
    }
}













