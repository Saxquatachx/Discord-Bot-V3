module.exports = (Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, distube, path, got, express, http, YouTubeNotifier, rss, client, db, ldb, prefix, sahip, token, fot) => {
  client.on('ready', async (ready) =>{
    setInterval(async() => {
      let feed = await rss.toJson('https://www.youtube.com/feeds/videos.xml?channel_id='+'UCVhy-OaY8bCQsnrh9OAmzlg');
      if (ldb.has(`${feed.items[0].yt_videoId}`)) return;
      ldb.set(`${feed.items[0].yt_videoId}`, "atıldı");
      const embed = new Discord.MessageEmbed()
      .setColor("#ff4fa7")
      .setAuthor("Youtube Bildirimi", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Youtube%28amin%29.png")
      .addField("**Başlık**", feed.items[0].media_group.media_title)
      .addField("**Açıklama**", feed.items[0].media_group.media_description)
      .setImage(feed.items[0].media_group.media_thumbnail_url)
      .setTitle(`**${feed.author.name}** yeni video yükledi`)
      .setURL(`https://www.youtube.com/watch?v=${feed.items[0].yt_videoId}`)
      client.channels.cache.get("827517324121866253").send(embed)
    }, 60000);
  })
}
