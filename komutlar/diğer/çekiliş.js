module.exports = {
 name: "çekiliş",
 code: `
$editMessage[$getServerVar[cekilis];{title:Çekiliş Bitti 🎉}{description:Çekiliş açıklaması: \`$sliceMessage[1]\` 🎉
Yapan Kişi: **$userTag[$authorID]**
Kazanan: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Kazanan olmadı.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş bitti📣:$authorAvatar}]
$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Tepkiye basan olmadı];false;Çekiliş: \`$messageSlice[1]\` Kazanan: <@$randomText[$joinSplitText[;]]> 🎉]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[cekilis];🎉;id];$clientID,;];,]
$wait[$message[1]]
$setServerVar[cekilis;$sendMessage[{title: "🎉" tepkisine tıklayarak çekilişe katıl}{description:Çekiliş açıklaması: \`$messageSlice[1]\` 🎉
Yapan Kişi: **$userTag[$authorID]**
Çekiliş süresi: **$message[1]**}{timestamp}{color:RED}{reactions:🎉};yes]]
$onlyIf[$messageSlice[1]!=;{title:HATA}{description:Çekiliş için bir açıklama girin: 
\`\`\`
ca+çekiliş <süre> <ödül>\`\`\`
}{color:RED}]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title:HATA}{description:Lütfen örnekteki gibi zaman ayarı yapın:
\`\`\`
1s 1 saniye 
1m 1 dakika
1h 1 saat
1d 1 saat
\`\`\`}{color:RED}]

$onlyPerms[admin;{title:HATA}{description:Bu komutu kullanabilmek için \`Yönetici\` Yetkisine sahip olman gerek}{color:RED}]
`
}

bot.variables({
  cekilis:""
})