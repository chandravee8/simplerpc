const
  discord = require("discord.js-selfbot-v13");
 
function reloadPresence(client) {
    const activity = new discord.RichPresence()
      //more command https://discordjs-self-v13.netlify.app/#/docs/docs/main/class/RichPresence or https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/main/Document/RichPresence.md
        .setApplicationId("1187589793337581611") //You can replace with your own bot application id
        .setType("PLAYING") //PLAYING, STREAMING, LISTENING
        .setName("CHANDU ON TOP") //name of your activity
        .setDetails("NO REPLY = OFFLINE") //detail activity
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1104302917386764388/1278896413937500160/a_e4025f82b15ff91e521829d2a27e86b0.gif?ex=66d27899&is=66d12719&hm=0fb8fc286f249673eedb69ffdb72359c59573efec98582745afcb95873d265b2&")
        .setAssetsLargeText("Chandu")
        .setAssetsSmallImage("https://cdn.discordapp.com/attachments/1210929928862695457/1211999933398392843/image0.jpg?ex=65f03de5&is=65ddc8e5&hm=b113809debc6732fee38b1fbd7351610b158fa745c2e5194c1ac8dbfe6586cc7&")
        .setAssetsSmallText("Chandu")
        .addButton('Discord', "https://discord.com/invite/FGU7vhnmPK")
        .addButton('Join', "https://discord.com/invite/legalsmp")
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("dnd")
};
module.exports = reloadPresence;
