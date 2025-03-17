# 🎵 Botussy Discord Bot

A powerful Discord bot powered by DisTube for music playback and Ollama LLM for AI interaction, featuring support for Spotify, SoundCloud, YouTube streaming, and customizable responses powered by a local language model.

<div align="center">
  
![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)
![SoundCloud](https://img.shields.io/badge/SoundCloud-FF3300?style=for-the-badge&logo=soundcloud&logoColor=white)

</div>

## ✨ Features

- 🎵 Play music from YouTube, Spotify, and SoundCloud
- 🎮 Control music playback with various commands (play, pause, skip, etc.)
- ⚙️ Customizable bot settings, including cookie management for YouTube playback
- 🤖 Interact with an Ollama-powered language model for enhanced AI capabilities
- 🔊 High-quality audio streaming with customizable settings

## 📋 Requirements

- Node.js (v16 or higher)
- Discord.js v14 or higher
- DisTube v4.x or higher
- Spotify, SoundCloud, and YouTube API keys (for respective plugins)
- Ollama (for integrating a custom language model)

## 🚀 Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/botussy-discord-bot.git
```

### 2. Navigate to the project directory:

```bash
cd botussy-discord-bot
```

### 3. Install the dependencies:

```bash
npm install
```

### 4. Ollama Setup:

To integrate Ollama's LLM functionality, follow these steps:

- Pull the desired Llama model:

```bash
ollama pull llama2-uncensored
```

- Create a new Ollama model for the bot:

```bash
ollama create botussy --modelFile llama2-uncensored
```

### 5. Create Configuration File:

Create a `config.json` file in the root of the project:

```json
{
  "loginToken": "YOUR_DISCORD_BOT_TOKEN",
  "clientId": "YOUR_CLIENT_ID",
  "guilds": ["GUILD_ID_1", "GUILD_ID_2", "GUILD_ID_3"],
  "embedColorHex": "#FCE3EA",
  "COOKIE": "YOUR_YOUTUBE_COOKIE"
}
```

### 7. Run the bot:

Double-click the `.bat` file to start both the Ollama server and the bot simultaneously.

## 🎮 Usage

Once the bot is running, you can interact with it using slash commands in your Discord server.

### 🎵 Music Commands

| Command | Description |
|---------|-------------|
| `/play` | Loads songs from YouTube |
| `/pause` | Pauses the song currently playing |
| `/autoplay` | Continues playing what is in the queue |
| `/filter` | Adds filter to songs |
| `/filterhelp` | Lists the filters you can apply |
| `/join` | Bot enters your voice channel |
| `/leave` | Bot leaves :( |
| `/queue` | Shows the current queue |
| `/repeat` | Sets the mode of the repeat behavior |
| `/seek` | Seeks ahead or behind by x seconds |
| `/shuffle` | Shuffles the songs in the queue |
| `/skip` | Skips to the next song in the queue |
| `/stop` | Stops the queue |
| `/volume` | Sets the volume of the bot |

### 🤖 LLM Commands

| Command | Description |
|---------|-------------|
| `/chatussy` | Generate text using the llama2-uncensored model |

### 🔧 Other Commands

| Command | Description |
|---------|-------------|
| `/help` | Lists the available commands! |
| `/ping` | Replies with Pong! |

## ⚙️ Configuration

- `loginToken`: Your bot's Discord token (available from the Discord Developer Portal)
- `clientId`: The client ID of your Discord bot
- `guilds`: List of guilds (Discord servers) where the bot will be active
- `embedColorHex`: The color for embedded messages sent by the bot
- `COOKIE`: A YouTube cookie for video streaming (can be retrieved from your browser)


## 🙏 Acknowledgements

- [DisTube](https://distube.js.org/) for the music streaming functionality
- [Discord.js](https://discord.js.org/) for the Discord API wrapper
- [Ollama](https://ollama.ai/) for the local language model integration

---

<div align="center">
  <sub>Built  by danDrilea</sub>
</div>
