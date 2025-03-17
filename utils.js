Discord = require("discord.js")

module.exports = {
    customEmbedBuilder(title,description,color) {
        return {
            embeds: [
                new Discord.EmbedBuilder()
                .setTitle(title)
                .setDescription(description)
                .setColor(color)
            ]
        }
    },
    
    
}