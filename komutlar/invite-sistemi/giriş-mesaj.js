
module.exports = {
  name:"giriş-mesajı",
  code:`
  $setServerVar[gmesaj;$message]
  $wait[5s]
  $channelSendMessage[$channelID;{color:GREEN}{author: Başarıyla Giriş Mesaji Ayarlanmıştır}{description:
    Önceki Mesaj
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[gmesaj];-üyeİsmi-;$username;-1];-üyeID-;$authorID;-1];-üyeEtiket-;<@$authorID>;-1];-üyeFullİsim-;$username#$discriminator;-1];-davetçiİsim-;$username;-1];-davetçiID-;$authorID;-1];-davetçiEtiket-;<@$authorID>;-1];-davetçiFullİsim-;$username#$discriminator;-1];-davetSayısı-;$random[0;5000];-1];-toplamÜye-;$membersCount;-1];-davetKod-;$randomString[8];-1];-üyeKuruluşTarih-;$creationDate[$authorID;date];-1]

Şimdiki Mesaj
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;-üyeİsmi-;$username;-1];-üyeID-;$authorID;-1];-üyeEtiket-;<@$authorID>;-1];-üyeFullİsim-;$username#$discriminator;-1];-davetçiİsim-;$username;-1];-davetçiID-;$authorID;-1];-davetçiEtiket-;<@$authorID>;-1];-davetçiFullİsim-;$username#$discriminator;-1];-davetSayısı-;$random[0;5000];-1];-toplamÜye-;$membersCount;-1];-davetKod-;$randomString[8];-1];-üyeKuruluşTarih-;$creationDate[$authorID;date];-1]

}]
$onlyPerms[admin;Yetkiniz Yetmemektedir]
$onlyBotPerms[admin; Sunucuda Yönetici Yetkim Yok]`
}