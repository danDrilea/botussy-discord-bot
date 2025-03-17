const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("filter")
        .setDescription("adds filter to songs")
        .addStringOption(option => option.setName("string").setDescription("filter name").setRequired(true)),

    async execute(interaction) {
        const string = interaction.options.getString('string');

        const stringList = string.split(" ");

        const queue = interaction.client.distube.getQueue(interaction);

        let wrongFilterCount = 0;

        if (!queue) {
            interaction.reply(`❌ | There is nothing in the queue right now!`);
            return;
        }

        stringList.forEach(element => {
            const filter = element;

            if (filter === 'off' && queue.filters.size) 
                queue.filters.clear();

            else if (Object.keys(interaction.client.distube.filters).includes(filter)) {
                if (queue.filters.has(filter)) 
                    queue.filters.remove(filter);
                else 
                    queue.filters.add(filter);
            }
            else
                wrongFilterCount = wrongFilterCount + 1;
        });
            
        var response = "";

        if(wrongFilterCount)
            response = response + `Found ${wrongFilterCount} wrong filters, applying the other ${stringList.length - wrongFilterCount}!\n`;
        response = response + `Current Queue Filter: \`${queue.filters.names.join(', ') || 'Off'}\``;

        interaction.reply(response);
    }
}









