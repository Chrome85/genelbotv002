const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Narcos BOT Komut Sistemleri')
.setTimestamp()
.addField('» !adamol', 'adam olursun')
.addField('» !ağla', 'Botu ağlatırsın')
.addField('» !atatürk', 'Atatürkün fotorafını atar')
.addField('» !hapishane', 'hapse girersin')
.addField('» !havadurumu', 'Havadurumunu gösterir')
.addField('» !hediye-ver', 'hediye verirsin')
.addField('» !ilginçbilgi', 'İlginç bilgi verir')
.addField('» !intihar-et', ' intihar edersin')
.addField('» !kahve', 'kahve içersin')
.addField('» !polisiara', 'polisi ararsın')
.addField('» !renkara', 'renk ararsın')
.addField('» !şanslısayım', 'şanslı sayını tahmin eder')
.addField('» !songörülme', 'etiketledin kişinin son mesaj tarihini söyler')
.addField('» !sorusor', 'bota istedin soruyu sorarsın')
.addField('» !taksimdayı', 'taksim dayının fotosunu atar')
.addField('» !tersyaz', 'yazdın yazıyı ters yazar')
.addField('» !yazı-yaz', 'bota yazı yazdırırsın')
.addField('» !zarat', 'zar atarsın')
.setFooter('© 2020 Narcos Bot', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};