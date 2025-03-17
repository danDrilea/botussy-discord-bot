const { loginToken, emoji, COOKIE } = require("./config.json");
const { Client, Events, GatewayIntentBits, Collection, VoiceState,EmbedBuilder } = require("discord.js");
const fs = require('node:fs');
const path = require('node:path');

const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { YtDlpPlugin } = require('@distube/yt-dlp');
const { deployCommands } = require("./deploy-commands.js");
const { setTimeout } = require("node:timers");


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildModeration, 
    ]
});

client.commands = new Collection();
client.distube = new DisTube(client, {
    leaveOnStop: false,
    nsfw: true,
    youtubeCookie: COOKIE,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    plugins: [
      new SpotifyPlugin({
        emitEventsAfterFetching: true
      }),
      new SoundCloudPlugin(),
      new YtDlpPlugin()
    ]
});

client.on("ready", () => {
    deployCommands(client)
    console.log("Logged in");
});


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) 
        return;

    const command = interaction.client.commands.get(interaction.commandName);

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred)
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        else
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }

});


client.login(loginToken)

