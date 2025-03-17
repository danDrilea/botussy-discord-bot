const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("skips to the next song in the queue"),

    async execute(interaction) {
        const queue = interaction.client.distube.getQueue(interaction);

        if (!queue) {
            interaction.reply("❌ | There is nothing in the queue right now!");
            return;
        }

        const song = await queue.skip();
        interaction.reply(`☑️ | Skipped! Now playing:\n${song.name} - \`${song.formattedDuration}\``);
    
    }
}