const aoijs = require('aoi.js');
var fs = require('fs');
const keep_alive = require("./keep_alive.js")

const bot = new aoijs.Bot({
token: process.env['token'], 
prefix: "o!",
  fetchInvites: true
})

bot.onMessage() //Allows to execute Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! $pingms` 
})

bot.loadCommands('./komutlar/');

bot.readyCommand({
    channel: "",
    code: `$log[ $userTag[$clientID] ismiyle giriş yaptım]` 
})


bot.status({
  type:"STREAMING",
  text:"Developers By Extrax,Shugo,Afet Hytres"
})


////////////////////////////////////////////////----------İnvite--Sistemi---------////////////////////////////////////////////////
bot.joinCommand({
        channel: "$getServerVar[gkanal]",
        code: `
        `
        })
bot.onJoined()

bot.leaveCommand({
        channel: "$getServerVar[çkanal]",
        code: ``
})
bot.onLeave()

bot.joinCommand({
  channel:"$getServerVar[gkanal]",
  code:`
  $suppressErrors[$username Özel Davet Olan $vanityURL İle Sunucuya Giriş Yaptı]
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[gmesaj];-üyeİsmi-;$username;-1];-üyeID-;$authorID;-1];-üyeEtiket-;<@$authorID>;-1];-üyeFullİsim-;$username#$discriminator;-1];-davetçiİsim-;$username[$userInfo[inviter]];-1];-davetçiID-;$userInfo[inviter];-1];-davetçiEtiket-;<@$userInfo[inviter]>;-1];-davetçiFullİsim-;$username[$userInfo[inviter]]#$discriminator[$userInfo[inviter]];-1];-davetSayısı-;$userInfo[real];-1];-toplamÜye-;$membersCount;-1];-davetKod-;$userInfo[code];-1];-üyeKuruluşTarih-;$creationDate[$authorID;date];-1]
$onlyIf[$isBot[$authorID]!=true;]
`
})

bot.leaveCommand({
  channel:"$getServerVar[çkanal]",
  code:`
  $suppressErrors[$username Özel Davet Olan $vanityURL İle Sunucuya Giriş Yapmıştı]
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[çmesaj];-üyeİsmi-;$username;-1];-üyeID-;$authorID;-1];-üyeEtiket-;<@$authorID>;-1];-üyeFullİsim-;$username#$discriminator;-1];-davetçiİsim-;$username[$userInfo[inviter]];-1];-davetçiID-;$userInfo[inviter];-1];-davetçiEtiket-;<@$userInfo[inviter]>;-1];-davetçiFullİsim-;$username[$userInfo[inviter]]#$discriminator[$userInfo[inviter]];-1];-davetSayısı-;$userInfo[real];-1];-toplamÜye-;$membersCount;-1];-davetKod-;$userInfo[code];-1];-üyeKuruluşTarih-;$creationDate[$authorID;date];-1]
$onlyIf[$isBot[$authorID]!=true;]
`
})


bot.command({
  name:"<@864794935471636530>",
  code:`$color[ff0000]
  $description[
  Sahibim: <@852735243818500138>
  Şu Anda Geliştirilem Aşamasındayım ]
  ` 
  })
  
bot.variables({
  gmesaj:"Hoşgeldin -üyeEtiket- ! Seni -davetçiEtiket- Davet Etti Toplam -davetSayısı- Daveti Oldu ",
  çmesaj:"Hoşçakal -üyeİsim- ! Seni -davetçiEtiket- Davet Etti Toplam -davetSayısı- Daveti Oldu",
  çkanal:"",
  gkanal:"",
  bonus:"0"
  })
////////////////////////////////////////////////-------Bot-Variables------------////////////////////////////////////////////////

bot.variables({
  kid:"",
  rid:"",
  mid:"",
  eid:""
  })

////////////////////////////////////////////////---------Admin--Komutları----------////////////////////////////////////////////////
bot.command({
name:"sil",
code:`
$deleteIn[5s]
$author[$userTag;$authorAvatar]
$description[$message[1] Tane Mesaj Silindi]
$color[GREEN]
$thumbnail[$authorAvatar]
$clear[$message[1]]
$onlyIf[$isNumber[$message[1]]==true;Lütfen Sayı Dışında Bir Karakter Girmeyiniz]
$onlyIf[$message[1]!=;Silinecek Mesaj Miktarini Girmelisin]
$onlyBotPerms[managemessages;Bunun için botun **Mesajları Yönet** izni olmalı]
$onlyPerms[managemessages;Bunun için **Mesajları Yönet** iznin olmalı]
`
})

///////////--Emoji-Rol-Sistemi//////////////

bot.reactionAddCommand({ 
  channel: "$getServerVar[kid]", 
  code: ` $onlyIf[$emojiToString==$getServerVar[eid];] $giveRoles[$authorID;$getServerVar[rid]] $onlyIf[$messageID==$getServerVar[mid];]` }) 
bot.onReactionAdd() 
bot.reactionRemoveCommand({ 
  channel: "$getServerVar[kid]", 
  code: ` $onlyIf[$emojiToString==$getServerVar[eid];] $takeRoles[$authorID;$getServerVar[rid]] $onlyIf[$messageID==$getServerVar[mid];]` }) 
bot.onReactionRemove() 
bot.command({ 
  name:"emojirol",
  code:` Seçilen Kanal <#$mentionedChannels[1]> Mesaj ID ise $getMessage[$mentionedChannels[1];$message[3]] Ordaki $message[4] Emojisine Tıklayana Anında = <@&$mentionedRoles[1]> Vereceğim ! $setServerVar[kid;$mentionedChannels[1]] $setServerVar[rid;$mentionedRoles[1]] $setServerVar[mid;$message[3]] $setServerVar[eid;$message[4]] $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin Yönetici Yetkiniz Olmalıdır !] $onlyIf[$message[4]!=;Kullanım !emojirol #kanal @rol mesajid emojiismi] ` }) 
bot.command({ 
  name:"emojirol-kapat", 
  code:` $resetServerVar[kid] $resetServerVar[rid] $resetServerVar[mid] $resetServerVar[eid] Emoji Rol Sistemi Kapatılmıştır. Bütün Değişkenler Sıfırlandı. $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin Yönetici Yetkiniz Olmalıdır !] ` })

//////////////////Sayaç-Sistemi///////////////////////////


bot.command({
  name:"sayaç-ayarla",
  code:`
  Sayaç Kanalı <#$mentionedChannels[1]> Olarak Ayalarlandı; Hedef Sayısı İse $message[2] Olarak Ayarlandı
  $setServerVar[skanal;$mentionedChannels[1]]
  $setServerVar[hedef;$message[2]]
  $argsCheck[1>;Lütfen Bir Kanal Etiketle]
  $argsCheck[2>;Lütfen Bir Hedef Sayı Gir]
  $suppressErrors[Doğru Kullanımı
  o!sayaç-ayarla #sayac-kanalı hedef
   ]
  $onlyPerms[managechannels;Kanalları Yönet Yetkin Bulunmuyor!!!]
  
  
  `
  
})

bot.variables({
  skanal:"",
  hedef:"0"
})


bot.joinCommand({
  channel:"$getServerVar[skanal]",
  code:`
  $thumbnail[$userAvatar]
  $color[RANDOM]
  $description[
<a:blob_join:861501133569654814> 
 Sunucuya <@$authorID> Adlı Kullanıcı Giriş Yaptı
 
 <a:uctum:787227632264937532> Sunucu Böylece $membersCount Kişiye Ulaştı Hedefimize İse $sub[$getServerVar[hedef]$membersCount] Kullanıcı Kaldı
  
  


]
  `
})


bot.leaveCommand({
  channel:"$getServerVar[skanal]",
  code:`
  $thumbnail[$userAvatar]
  $color[RANDOM]
  $description[
<a:blob_join:861501133569654814> 
 Sunucudan <@$authorID> Adlı Kullanıcı Çıkiş Yaptı
 
 <a:uctum:787227632264937532> Sunucu Böylece $membersCount Kişiye Ulaştı Hedefimize İse $sub[$getServerVar[hedef];$membersCount;1] Kullanıcı Kaldı
  
  


]
  `
})

//////////////////Uptime///////////////////////////




const kontrol = require("node-fetch");
setInterval(() => {
  kontrol(`https://Orion-1.orhii.repl.co`);
  console.log(`Ping gönderildi!`);
}, 600000);


//////////////////Uptime///////////////////////////

bot.command({
  name:"avatar",
  code:`
  $author[$username[$mentioned[1;yes]] Kişisinin Avatarı;$userAvatar[$mentioned[1;yes]]]
  $image[$userAvatar[$mentioned[1;yes]]?size=2048]
  $footer[İsteyen Kişi $username;$authorAvatar]
  `
})