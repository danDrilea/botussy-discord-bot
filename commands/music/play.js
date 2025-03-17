const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("play")
        .setDescription("loads songs from youtube")
        .addStringOption(option => option.setName("string").setDescription("The url to the song").setRequired(true)),

    async execute(interaction) {
        if(!interaction.member.voice.channel) {
            interaction.reply("❌ | You must be in a voice channel to use this command");
            return;
        }

        const str = interaction.options.getString('string');
        //const str = 'https://www.youtube.com/watch?v=alG7Yd_bTuM';

        if (!str || (str.includes("www.") && !str.includes("youtu"))) {
            interaction.reply("❌ | Please enter a song url or query to search");
            return;
        }

        interaction.reply(`Searching for ${str}!`);
        
        await interaction.client.distube.play(interaction.member.voice.channel,str,{
            textChannel: interaction.channel,
            member: interaction.member,
            interaction
        });

        const queue = interaction.client.distube.getQueue(interaction);

        interaction.editReply(`Playing ${queue.songs[queue.songs.length - 1].url}`);
        
    }
}