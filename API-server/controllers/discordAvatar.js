import discord from "discord.js";

const client = new discord.Client();

const { displayAvatarURL } = await client.fetchUser('waikin#5279')
  .catch(console.error);

  console.log(displayAvatarURL);