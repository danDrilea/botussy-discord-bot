const { SlashCommandBuilder } = require('discord.js');
const { default: ollama } = require('ollama'); // CJS

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chatussy')
        .setDescription('Generate text using the llama2-uncensored model')
        .addStringOption(option => option.setName('prompt').setDescription('Prompt').setRequired(true)),
    
    async execute(interaction) {
        interaction.deferReply()
        let str = interaction.options.getString('prompt');
        const response = await ollama.chat({
            model: 'botussy',
            messages: [{ role: 'user', content: str }],
        });
        
        console.log('USER:' + str);  
        console.log('BOTUSSY:' + response.message.content);
        let concatenatedResponse = "<@"
        concatenatedResponse += interaction.member.id;
        concatenatedResponse += ">: ";
        concatenatedResponse += str;
        concatenatedResponse += "\n\n";
        concatenatedResponse += response.message.content;
        interaction.editReply(concatenatedResponse);

    },
};
