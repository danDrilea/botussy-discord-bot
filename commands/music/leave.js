const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("leave")
        .setDescription("bot leaves :("),
        
    async execute(interaction) {
        interaction.client.distube.voices.leave(interaction);
        interaction.reply("bot disconnected succesfully!");
    }
}