module.exports = {
  name:"çıkış-mesajı",
  code:`
  $setServerVar[çmesaj;$message]
  $wait[5s]
  $channelSendMessage[$channelID;{color:RED}{author: Başarıyla Çıkış Mesaji Ayarlanmıştır}{description:
    Önceki Mesaj
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[çmesaj];-üyeİsmi-;$username;-1];-üyeID-;$authorID;-1];-üyeEtiket-;<@$authorID>;-1];-üyeFullİsim-;$username#$discriminator;-1];-davetçiİsim-;$username;-1];-davetçiID-;$authorID;-1];-davetçiEtiket-;<@$authorID>;-1];-davetçiFullİsim-;$username#$discriminator;-1];-davetSayısı-;$random[0;5000];-1];-toplamÜye-;$membersCount;-1];-davetKod-;$randomString[8];-1];-üyeKuruluşTarih-;$creationDate[$authorID;date];-1]

Şimdiki Mesaj
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;-üyeİsmi-;$username;-1];-üyeID-;$authorID;-1];-üyeEtiket-;<@$authorID>;-1];-üyeFullİsim-;$username#$discriminator;-1];-davetçiİsim-;$username;-1];-davetçiID-;$authorID;-1];-davetçiEtiket-;<@$authorID>;-1];-davetçiFullİsim-;$username#$discriminator;-1];-davetSayısı-;$random[0;5000];-1];-toplamÜye-;$membersCount;-1];-davetKod-;$randomString[8];-1];-üyeKuruluşTarih-;$creationDate[$authorID;date];-1]

}]

$onlyPerms[admin;Yetkiniz Yetmemektedir]
$onlyBotPerms[admin; Sunucuda Yönetici Yetkim Yok]`
}