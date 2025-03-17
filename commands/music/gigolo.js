const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gigolo")
        .setDescription("gigolo gigolo gigolo gigolo"),

    async execute(interaction) {
        if(!interaction.member.voice.channel) {
            interaction.reply("❌ | You must be in a voice channel to use this command");
            return;
        }
        const oldQueue = interaction.client.distube.getQueue(interaction);

        if(oldQueue)
            oldQueue.stop();

        const str = 'https://www.youtube.com/watch?v=alG7Yd_bTuM';

        interaction.reply(`Searching for GIGOLO!`);
        
        await interaction.client.distube.play(interaction.member.voice.channel,str,{
            textChannel: interaction.channel,
            member: interaction.member,
            interaction
        });

        const queue = interaction.client.distube.getQueue(interaction);
        queue.setVolume(100);
        queue.setRepeatMode(1); //1 - song
        queue.seek(20);
        interaction.editReply(`Playing ${queue.songs[queue.songs.length - 1].url}`);
        
    }
}