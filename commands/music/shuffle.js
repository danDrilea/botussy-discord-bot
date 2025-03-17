const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("shuffle")
        .setDescription("shuffles the songs in the queue"),
        
    async execute(interaction) {
        const queue = interaction.client.distube.getQueue(interaction);
        
        if (!queue) {
            interaction.reply("❌ | There is nothing in the queue right now!");
            return;
        }
        
        queue.shuffle();
        interaction.reply("Shuffled songs in the queue");
    }
}