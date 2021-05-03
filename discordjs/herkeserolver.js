const Discord = require("discord.js")

exports.run = async(client, message, args) => {
   if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanamak İçin Yeterli Yetkiniz Bulunmamaktadır!");

   var noberrol = message.mentions.roles.first()

  if(!noberrol) message.channel.send("Lütfen Herkese Vereceğim Rolü Belirtin.")
  
message.guild.members.cache.forEach(nober => nober.roles.add(rol.id))
  const noberxd = new Discord.MessageEmbed
    .setTitle("Nober Code")
    .setField("⚙️ Herkese <@${rol.id}> rolü veriliyor lütfen sabırlı olun biraz sürebilir.")
  return message.channel.send(noberxd)
}

exports.conf = {
enabled: true, 
guildOnly: false,
aliases: ["herkeserolver","toplurolver","toplu-rol-ver"],
permLevel: 0
};
exports.help = {
    name : "herkese-rol-ver"
    description: 'Herkese Rol Verir',
    usage: '<prefix>herkese-rol-ver'
};
