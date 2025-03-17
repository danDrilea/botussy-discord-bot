const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("repeat")
        .setDescription("sets the mode of the repeat behaviour")
        .addStringOption(option =>
          option.setName('mode')
            .setDescription('queue behaviour mode')
            .setRequired(true)
            .addChoices(
              { name: 'off', value: 'off' },
              { name: 'song', value: 'song' },
              { name: 'queue', value: 'queue' },
            )),

    async execute(interaction) {
        const repeatmode = interaction.options.getString('mode');
        const queue = interaction.client.distube.getQueue(interaction);
        if (!queue) {
          interaction.reply("❌ | There is nothing playing!");
          return;
        }
        
        queue.setRepeatMode(repeatmode.value)
        interaction.reply(`🔁 | Set repeat mode to \`${repeatmode}\``);
    }
}

