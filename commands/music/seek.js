const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("seek")
        .setDescription("seeks ahead or behind by x seconds")
        .addIntegerOption(option => option.setName("seconds").setDescription("how many seconds to seek (negative values seek backwards)").setRequired(true)),

    async execute(interaction) {
        const seconds = interaction.options.getInteger("seconds");

        const queue = interaction.client.distube.getQueue(interaction);
        if (!queue) {
            interaction.reply("❌ | There is nothing in the queue right now!");
            return;
        }        

        if((queue.currentTime + seconds) < 0) {
            queue.seek(0);
            interaction.reply("Rewinded the song to the beginning!");
            return;
        }

        if((queue.currentTime + seconds) >= queue.duration) {
            queue.seek(queue.duration);
            interaction.reply("Forwarded to the end of the song!");
            return;
        }

        if(seconds >= 0) {
            queue.seek((queue.currentTime + seconds));
            interaction.reply(`Forwarded the song by ${seconds} seconds!`);
        }
        else {
            queue.seek((queue.currentTime + seconds));
            interaction.reply(`Rewinded the song by ${-1 * seconds} seconds!`);
        }
    }
}

