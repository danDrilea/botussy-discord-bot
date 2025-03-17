const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription("pauses the song currently playing"),
    

    async execute(interaction) {
        const queue = interaction.client.distube.getQueue(interaction);
        if (!queue) {
            interaction.reply("❌ | There is nothing in the queue right now!");
            return;
        }
        
        if (queue.paused) {
            queue.resume();
            return interaction.reply('Resumed the song for you :)');
        }
        queue.pause();
        interaction.reply('Paused the song for you :)');
    }
}
