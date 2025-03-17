const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("join")
        .setDescription("bot enters your voice channel"),
        
    async execute(interaction) {
        let voiceChannel = interaction.member.voice.channel;

        if (!voiceChannel)
            return interaction.reply("❌ | You must be in a voice channel");

        interaction.client.distube.voices.join(voiceChannel);

        return interaction.reply("Bot connected succesfully!");
    }
}