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
        .setAssetsLargeImage("https://cdn.discordapp.com/avatars/1054360093526855680/a_ba60e397ab487d6b554a12466ba3311a.gif?size=1024")
        .setAssetsLargeText("Chandu")
        .setAssetsSmallImage("https://discord.com/channels/907877138286391317/1104302917386764388/1211998032308998195")
        .setAssetsSmallText("Chandu")
        .addButton('Discord', "https://discord.com/invite/FGU7vhnmPK")
        .addButton('Join', "https://discord.com/invite/FGU7vhnmPK")
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("dnd")
};
module.exports = reloadPresence;
