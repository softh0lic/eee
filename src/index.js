require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is running.`);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'embed') {
      const embed = new EmbedBuilder().setTitle("Embed Title")
      .setDescription('This is an embed description')
      .setColor(0xd7fffe)
      .addFields({ name: 'Field title', value: 'Some random value' });

      interaction.reply({ embeds: [embed] });
    }

});

client.login(process.env.TOKEN);
