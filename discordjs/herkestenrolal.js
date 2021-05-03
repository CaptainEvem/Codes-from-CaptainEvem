const Discord = require("discord.js")
exports.run = async(client, message, args) => {
   if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanamak İçin Yeterli Yetkiniz Bulunmamaktadır!");

   var noberrol = message.mentions.roles.first()

  if(!noberrol) message.channel.send("Lütfen Herkesten Alacağım Rolü Belirtin.")
  
message.guild.members.cache.forEach(nober => nober.roles.remove(rol.id))
  const noberxd = new Discord.MessageEmbed
    .setTitle("Nober Code")
    .setField("⚙️ Herkesten <@${rol.id}> rolü alınıyorlütfen sabırlı olun biraz sürebilir.")
  return message.channel.send(noberxd)
}

exports.conf = {
enabled: true, 
guildOnly: false,
aliases: ["herkestenrolal","toplurolal","toplu-rol-al"],
permLevel: 0
};

exports.help = {
    name : "herkesten-rol-al"
};
