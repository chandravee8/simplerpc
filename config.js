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
        .setAssetsLargeImage("https://cdn.discordapp.com/avatars/1054360093526855680/a_ba60e397ab487d6b554a12466ba3311a.gif")
        .setAssetsLargeText("Chandu")
        .setAssetsSmallImage("https://cdn.discordapp.com/attachments/1210929928862695457/1211999933398392843/image0.jpg?ex=65f03de5&is=65ddc8e5&hm=b113809debc6732fee38b1fbd7351610b158fa745c2e5194c1ac8dbfe6586cc7&")
        .setAssetsSmallText("Chandu")
        .addButton('Discord', "https://discord.com/invite/FGU7vhnmPK")
        .addButton('Join', "https://discord.com/invite/FGU7vhnmPK")
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("dnd")
};
module.exports = reloadPresence;
