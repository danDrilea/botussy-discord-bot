const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("autoplay")
        .setDescription("continues playing what is in the queue"),
    
    async execute(interaction) {
        const queue = interaction.client.distube.getQueue(interaction);
        if (!queue) {
            interaction.reply("❌ | There is nothing in the queue right now!");
            return;
        }
        const autoplay = queue.toggleAutoplay();
        interaction.reply(`☑️ | AutoPlay: \`${autoplay ? 'On' : 'Off'}\``);
    }
}
