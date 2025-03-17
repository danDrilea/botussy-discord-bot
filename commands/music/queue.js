const { SlashCommandBuilder } = require("@discordjs/builders");
const { customEmbedBuilder } = require("../../utils.js")
const { embedColorHex } = require("../../config.json")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("queue")
        .setDescription("shows the queue"),
    

    async execute(interaction) {
        const queue = interaction.client.distube.getQueue(interaction);
        if (!queue) {
            interaction.reply("❌ | There is nothing playing!");
            return;
        }
        
        const q = queue.songs
        .map((song, i) => `${`${i+1}.`} ${song.name} - \`${song.formattedDuration}\``)
        .join('\n');

        interaction.reply(customEmbedBuilder("Queue",`📄 | **Server Queue**\n${q}`, embedColorHex));
    }
}