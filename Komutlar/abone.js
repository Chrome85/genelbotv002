const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Yardım',`
**LÜTFEN ABONE KOMUTU HARİÇ DİĞER KOMUTU YETKİLİ KANALLARINDA YAPINIZ.**
 
<a:yildizz:768859233382694982>**.abonelog** : Abone Logunu Ayarlarsınız
<a:yildizz:768859233382694982>>**.abonerol** : Abone Rolünü Ayarlarsınız (YETKİLİ KANALINDA YAPMANIZ TAVSİTE EDİLİR)
<a:yildizz:768859233382694982>**.aboneyrol** : Abone Rolünü verecek Yetkili rolünü ayarlarsınız
<a:yildizz:768859233382694982>**.abone** : Abone Rolü Verirsiniz`)
.setImage("https://media.discordapp.net/attachments/769281758977458176/783299061012234260/standard_21.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
 message.channel.send(yardım) 
}
exports.conf ={
aliases:[]
};
exports.help={
name:'aboneyardım'
};