botussy-discord-bot
A Discord bot powered by DisTube for music playback and Ollama LLM for AI interaction, featuring support for Spotify, SoundCloud, YouTube streaming, and customizable responses powered by a local language model.

Features
Play music from YouTube, Spotify, and SoundCloud.
Control music playback with various commands (play, pause, skip, etc.).
Customizable bot settings, including cookie management for YouTube playback.
Interact with an Ollama-powered language model to enhance bot responses and AI capabilities.
Requirements
Node.js (v16 or higher)
Discord.js v14 or higher
DisTube v4.x or higher
Spotify, SoundCloud, and YouTube API keys (for respective plugins)
Ollama (for integrating a custom language model)
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/botussy-discord-bot.git
Navigate to the project directory:

bash
Copy
Edit
cd botussy-discord-bot
Install the dependencies:

bash
Copy
Edit
npm install
Ollama Setup: To integrate Ollama’s LLM functionality, follow these steps:

Pull the desired Llama model (e.g., llama2-uncensored):

bash
Copy
Edit
ollama pull llama2-uncensored
Create a new Ollama model for the bot using the pulled model:

bash
Copy
Edit
ollama create botussy --modelFile llama2-uncensored
Create a config.json file in the root of the project with your bot's configuration:

json
Copy
Edit
{
  "loginToken": "YOUR_DISCORD_BOT_TOKEN",
  "clientId": "YOUR_CLIENT_ID",
  "guilds": ["GUILD_ID_1", "GUILD_ID_2", "GUILD_ID_3"],
  "embedColorHex": "#FCE3EA",
  "COOKIE": "YOUR_YOUTUBE_COOKIE"
}
Deploy the bot commands to Discord:

bash
Copy
Edit
node deploy-commands.js
Run the bot: You can run the bot using the following script. Create a .bat file with the following content:

bat
Copy
Edit
start cmd /k "ollama serve"
node index.js
PAUSE
PAUSE
This will start both the Ollama server and the bot simultaneously.

Run the .bat file: Double-click the .bat file to start the bot.

Usage
Once the bot is running, you can interact with it using slash commands in your Discord server. Some common commands include:

/play <song name or URL>: Play a song.
/pause: Pause the current song.
/skip: Skip to the next song in the queue.
/stop: Stop the music and clear the queue.
/ai <query>: Interact with the Ollama-powered language model for AI-based responses.
Configuration
loginToken: Your bot's Discord token (available from the Discord Developer Portal).
clientId: The client ID of your Discord bot.
guilds: List of guilds (Discord servers) where the bot will be active.
embedColorHex: The color for embedded messages sent by the bot.
COOKIE: A YouTube cookie for video streaming (can be retrieved from your browser).