const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("volume")
        .setDescription("sets the volume of the bot")
        .addIntegerOption(option => option.setName("volume").setDescription("volume percentage").setRequired(true)),

    async execute(interaction) {
        const volume = parseInt(interaction.options.getInteger("volume"));
        const queue = interaction.client.distube.getQueue(interaction);

        if (!queue) {
            interaction.reply(`❌ | There is nothing in the queue right now!`);
            return;
        }
    
        if (isNaN(volume) || volume < 0) {
            interaction.reply(`❌ | Please enter a valid positive integer!`);
            return;
        }
            
        queue.setVolume(volume);
        interaction.reply(`☑️ | Volume set to \`${volume}\``);
    }
}