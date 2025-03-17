const { SlashCommandBuilder } = require('discord.js');
const { deployCommands } = require('../../deploy-commands.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('redeploy')
		.setDescription('update all comands')
        .setDefaultMemberPermissions(0),
	async execute(interaction) {
        deployCommands(interaction.client)
		await interaction.reply('Redeployed commands in all servers!');
	},
};