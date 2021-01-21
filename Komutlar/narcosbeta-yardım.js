const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "!";
  let yardım = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setColor("RANDOM")
    .addField(
      "Yardım",
      `
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

 
   **<:771730904325816350:782622833221304331> ${prefix}guardyardım** Guard Menüsünü açar
**<:771730904325816350:782622833221304331> ${prefix}aboneyardım** Ayarlamalı Abone yardım menüsünü açar
**<:771730904325816350:782622833221304331> ${prefix}sunucukur** sunucu kur yardım menüsünü açar (yakında...) 

   
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬
**<:771730904325816350:782622833221304331> ${prefix}davet __Botu Davet Edebilirsiniz!__**
**<:771730904325816350:782622833221304331> ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**  `
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL
    )
    .setThumbnail(client.user.avatarURL);
  message.channel.send(yardım);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
exports.help = {
  name: "yardım"
};
