const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stop")
        .setDescription("stops the queue"),

    async execute(interaction) {
        const queue = interaction.client.distube.getQueue(interaction);
        
        if (!queue) {
            interaction.reply("❌ | There is nothing in the queue right now!");
            return;
        }
        
        queue.stop();
        interaction.reply("☑️ | Stopped!");
    }
}