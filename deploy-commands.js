const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest')
const { clientId, loginToken } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');


module.exports = {
	deployCommands(client) {
		const foldersPath = path.join(__dirname,'commands');
		const commandFolders = fs.readdirSync(foldersPath);
		
		for (const folder of commandFolders) {
			const commandsPath = path.join(foldersPath,folder);
			const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
			for (const file of commandFiles) {
				const filePath = path.join(commandsPath,file);
				delete require.cache[filePath];
				const command = require(filePath);
				client.commands.set(command.data.name,command);
			}
		}

		client.guilds.cache.each( guild => {
			//console.log(`Deploying into ${guild.id}`)
			const commands = [];
			// Grab all the command files from the commands directory you created earlier
			
			const foldersPath = path.join(__dirname, 'commands');
			const commandFolders = fs.readdirSync(foldersPath);
			
			for (const folder of commandFolders) {
				// Grab all the command files from the commands directory you created earlier
				const commandsPath = path.join(foldersPath, folder);
				const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
				// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
				for (const file of commandFiles) {
					if(file.includes("redeploy") && guild.id != "1118334460463685733")
						continue;
					const filePath = path.join(commandsPath, file);
					const command = require(filePath);
					if ('data' in command && 'execute' in command) {
						commands.push(command.data.toJSON());
					} else {
						console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
					}
				}
			}
			
			// Construct and prepare an instance of the REST module
			const rest = new REST().setToken(loginToken);
			
			// and deploy your commands!
			(async () => {
				try {
					// The put method is used to fully refresh all commands in the guild with the current set
					const data = await rest.put(
						Routes.applicationGuildCommands(clientId, guild.id),
						{ body: commands },
					);
				} catch (error) {
					// catch and log any errors!
					console.error(error);
				}
			})();
		});
		console.log("Redeployed commands in all servers!")
	}
}


	

