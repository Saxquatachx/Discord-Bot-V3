module.exports = (Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, edb, rdb, kdb, ktdb, prefix, sahip, token, distube, path, got) => {

  //Bot Hazır Olduğunda

  client.on('ready', (ready) => {
    const fot = client.users.cache.get('796305982665916436');
    client.user.setStatus('idle');
    var oynuyorkısımları = [
      `Bot anlık olarak ${client.guilds.cache.size} sunucuda görev yapmakta`,
      "Tyardım",
      "Created by Saxquatchx"
    ]

    setInterval(function () {
      var random = Math.floor(Math.random() * (oynuyorkısımları.length - 0 + 1) + 0);
      client.user.setActivity(oynuyorkısımları[random], {
        type: 'PLAYING'
      });
    }, 2 * 3000);

    console.log(chalk.hex("#03d3fc").bold("-------------"))
    console.log(chalk.hex("#03d3fc")("|"), chalk.hex('#FF8800').bold("Bot hazır"), chalk.hex("#03d3fc")("|"))
    console.log(chalk.hex("#03d3fc").bold("-------------"))

  })

  //Mesaj Eventi

  client.on('message', async (message) => {
    const fot = client.users.cache.get('796305982665916436');
    const args = message.content.substring(prefix.lenght).split(" ");


    //Konuşulanları Loga Alma 

    if (message.channel.type === "text") {
      console.log(chalk.red(message.guild.name, " sunucusunda "), chalk.blue(message.channel.name, " kanalında "), chalk.green(message.author.username, ": "), message.content);
    } else if (message.channel.type === "dm") {
      console.log(chalk.blue(message.author.name, ":"), chalk.green(message.content));
    } else return;

    //İstenileni Söyletme Kodu

    if (message.content.startsWith(`${prefix}söyle`)) {

      var mesaj = await message.content.slice(6)

      await message.delete();

      return await message.channel.send(mesaj);

    }

    //Normaller

    if (message.author.bot === true) return;

    switch (message.content.toLowerCase()) {
      case "sa":
        if (message.author.id === sahip) {
          message.reply("Ooo kral aleyküm selam hg");
          message.react('🥰');
        } else message.reply('Aleyküm Selam Hoş Geldin !');
        break;
      case "sea":
        if (message.author.id === sahip) {
          message.reply("Ooo kral aleyküm selam hg");
          message.react('🥰');
        } else message.reply('Aleyküm Selam Hoş Geldin !');
        break;
      case "selam":
        message.reply('Selam');
        break;
      case "slm":
        message.reply('Selam');
        break;
      case "naber":
        message.reply('İyiii');
        break;
      case "nbr":
        message.reply('İyiii');
        break;
      case "gm":
        if (message.author.id === sahip) {
          message.reply("Günaydın kral :)");
          message.react('🥰');
        } else message.reply("Günaydın");
        break;
      case "günaydın":
        if (message.author.id === sahip) {
          message.reply("Günaydın kral :)");
          message.react('🥰');
        } else message.reply("Günaydın");
        break;
      case "iyi geceler":
        if (message.author.id === sahip) {
          message.reply("iyi geceler kral :)");
          message.react('🥰');
        } else message.reply("İyi Geceler");
        break;
      case "peki":
        if (message.guild.id === "727649417984868363") {
          if (message.author.id === "456948152101240847") return;
          message.guild.member(message.author).ban();
        }
        break;
      case "31":
        message.channel.send("SJ")
        break;
      case "otuz bir":
        message.channel.send("SJ")
        break;
      case "merhabe":
        message.reply('merhaba');
        break;
      case "mrb":
        message.reply('merhaba');
        break;
      case "seni kim yaptı":
        message.reply('tabikide en yakışıklı en karizmatik en iyi en mükemmel olan <@456948152101240847> yaptı');
        break;
      case "götüne sok":
        message.reply('piçç');
        break;
      case "sende gül":
        message.reply('WYEAIRUPOS<DKY8EAGIOSUPDKYODFPJKTYOSDFPJKWUPOAISPUOPFDIPKŞL9UAPOSIDPKUAOPIKŞHUSOPK');
        break;
      case "instagram":
        const embed = new Discord.MessageEmbed()
          .setTitle("Instagram")
          .setURL("https://www.instagram.com/saxquatchx/?hl=tr")
          .setDescription("https://www.instagram.com/saxquatchx/?hl=tr")
          .setColor("RANDOM")
          .setAuthor(message.author.tag, message.author.displayAvatarURL({
            dynamic: true
          }))
        message.channel.send({
          embed: embed
        });
        break;
      case "aferin":
        message.reply('thx');
        break;
      default:
        break;
    }

    //Küfür Koruma
    const küfüraçıkmı = db.has(`küfür-${message.guild.id}`, "açık")
    const küfürler = ["aq", "amk", "orospu", "oç", "yavşak", "ibne", "göt", "anan", "yarrak", "taşak", "amcık", "amına", "anaskm", "siktir", "sikik", "piç"];

    if (!message.channel.type === "text") return;
    if (küfüraçıkmı === false) return;

    for (var i = 0; i < küfürler.length; i++) {
      const küfür = küfürler[i];
      if (message.content.includes(küfür) || message.content === "sik") {
        message.delete();
        const kufurembed = new Discord.MessageEmbed()
          .setDescription(`${message.guild.name} sunucusunda küfür etmek yasaktır !!!`)
          .setColor("RED")
        message.author.send(kufurembed);
      }
    }

    //Reklam Koruma
    const reklamacıkmı = db.has(`reklam-${message.guild.id}`);

    if (!message.channel.type === "text") return;
    if (reklamacıkmı === false) return;
    if (!message.content.startsWith("https://discord.gg/")) return;

    await message.delete();
    const reklamembed = new Discord.MessageEmbed()
      .addField(`${message.guild.name} sunucusunda reklam yasaktır <a:unlem:825146178503966770>`, `Eğer 3 Kere Yaparsan 7 Gün 6 Kere Yaparsan Perma Ban Yiyeceksin`)
      .setColor("RED")
    await message.author.send(reklamembed);

    const dahaonceyapmısmı = rdb.has(`reklamyapti-${message.author.id}-${message.guild.id}`);

    if (dahaonceyapmısmı === false) {
      await rdb.set(`reklamyapti-${message.author.id}-${message.guild.id}`, "1")
    } else {
      const dahaonceyaptiginigetir = await rdb.get(`reklamyapti-${message.author.id}-${message.guild.id}`);
      const yenikaydedilecek = dahaonceyaptiginigetir + 1;
      await rdb.set(`reklamyapti-${message.author.id}-${message.guild.id}`, yenikaydedilecek);
      if (yenikaydedilecek === "111") {
        message.member.ban({
          days: 7,
          reason: '3 Kere Reklam Yaptı'
        })
      }
      if (yenikaydedilecek === "111111") {
        message.member.ban({
          reason: 'Çok Fazla Reklam Yaptı'
        })
      }
    }

    //Link Engelleyici

    const linkacıkmı = db.has(`link-${message.guild.id}`);

    if (!message.channel.type === "text") return;
    if (linkacıkmı === false) return;
    if (!message.content.startsWith("http")) return;

    await message.delete();
    const linkembed = new Discord.MessageEmbed()
      .addField(`${message.guild.name} sunucusunda link yasaktır <a:unlem:825146178503966770>`, `Eğer 3 Kere Atarsan 7 Gün 6 Kere Atarsan Perma Ban Yiyeceksin`)
      .setColor("RED")
    await message.author.send(linkembed);

    const dahaonceatmismi = rdb.has(`link-${message.author.id}-${message.guild.id}`);

    if (dahaonceatmismi === false) {
      await rdb.set(`link-${message.author.id}-${message.guild.id}`, "1")
    } else {
      const dahaonceattiginigetir = await rdb.get(`link-${message.author.id}-${message.guild.id}`);
      const linkyenikaydedilecek = dahaonceattiginigetir + 1;
      await rdb.set(`link-${message.author.id}-${message.guild.id}`, linkyenikaydedilecek);
      if (linkyenikaydedilecek === "111") {
        message.member.ban({
          days: 7,
          reason: '3 Kere Link Attı'
        })
      }
      if (linkyenikaydedilecek === "111111") {
        message.member.ban({
          reason: 'Çok Fazla Link Attı'
        })
      }
    }
  })

  //Channel Update

  client.on('channelUpdate', async (OldChannel, NewChannel) => {
    const fot = client.users.cache.get('796305982665916436');

    const logkanalvarmı = await db.has(`log-${OldChannel.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${OldChannel.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    if (OldChannel.type === "news") {
      let kanal = "Duyuru Kanalı";
      if (OldChannel.name !== NewChannel.name) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Bir ${kanal}'nın Adı Değiştirildi`)
          .addField(`Eski Adı:`, [` \`\`\`diff\n${OldChannel.name}\`\`\` `], false)
          .addField(`Yeni Adı:`, [` \`\`\`diff\n${NewChannel.name}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
      if (OldChannel.parentID !== NewChannel.parentID) {
        const eskikategori = client.channels.cache.get(OldChannel.parentID);
        const yenikategori = client.channels.cache.get(NewChannel.parentID);
        const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'nın Kategorisi Değiştirildi`)
          .addField(`Eski Kategorisi:`, [` \`\`\`diff\n${eskikategori.name}\`\`\` `], false)
          .addField(`Yeni Kategorisi:`, [` \`\`\`diff\n${yenikategori.name}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
      if (OldChannel.permissionOverwrites !== NewChannel.permissionOverwrites && OldChannel.rawPosition === NewChannel.rawPosition && OldChannel.name === NewChannel.name && OldChannel.parentID == OldChannel.parentID) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'nın İzinleri Değiştirildi`)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
    }

    if (OldChannel.type === 'voice') {
      let kanal = "Sesli Kanal";
      if (OldChannel.name !== NewChannel.name) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Bir ${kanal}'ın Adı Değiştirildi`)
          .addField(`Eski Adı:`, [` \`\`\`diff\n${OldChannel.name}\`\`\` `], false)
          .addField(`Yeni Adı:`, [` \`\`\`diff\n${NewChannel.name}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
      /*if (OldChannel.rawPosition !== NewChannel.rawPosition) {
          const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'ın Pozisyonu Değiştirildi`)
          .addField(`Eski Pozisyonu:`,[` \`\`\`diff\n${OldChannel.rawPosition}\`\`\` `],false)
          .addField(`Yeni Pozisyonu:`,[` \`\`\`diff\n${NewChannel.rawPosition}\`\`\` `],false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
                    try {
            logkanal.send(embed);
          } catch (error) {
            return
          }
      }*/
      if (OldChannel.parentID !== NewChannel.parentID) {
        const eskikategori = client.channels.cache.get(OldChannel.parentID);
        const yenikategori = client.channels.cache.get(NewChannel.parentID);
        const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'ın Kategorisi Değiştirildi`)
          .addField(`Eski Kategorisi:`, [` \`\`\`diff\n${eskikategori.name}\`\`\` `], false)
          .addField(`Yeni Kategorisi:`, [` \`\`\`diff\n${yenikategori.name}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
      if (OldChannel.permissionOverwrites !== NewChannel.permissionOverwrites && OldChannel.rawPosition === NewChannel.rawPosition && OldChannel.name === NewChannel.name && OldChannel.parentID == OldChannel.parentID) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'ın İzinleri Değiştirildi`)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
    }

    if (OldChannel.type === 'text') {
      let kanal = "Metin Kanalı";
      if (OldChannel.name !== NewChannel.name) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Bir ${kanal}'nın Adı Değiştirildi`)
          .addField(`Eski Adı:`, [` \`\`\`diff\n${OldChannel.name}\`\`\` `], false)
          .addField(`Yeni Adı:`, [` \`\`\`diff\n${NewChannel.name}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
      /*if (OldChannel.rawPosition !== NewChannel.rawPosition) {
          const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'nın Pozisyonu Değiştirildi`)
          .addField(`Eski Pozisyonu:`,[` \`\`\`diff\n${OldChannel.rawPosition}\`\`\` `],false)
          .addField(`Yeni Pozisyonu:`,[` \`\`\`diff\n${NewChannel.rawPosition}\`\`\` `],false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
                    try {
            logkanal.send(embed);
          } catch (error) {
            return
          }
      }*/
      if (OldChannel.parentID !== NewChannel.parentID) {
        const eskikategori = client.channels.cache.get(OldChannel.parentID);
        const yenikategori = client.channels.cache.get(NewChannel.parentID);
        const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'nın Kategorisi Değiştirildi`)
          .addField(`Eski Kategorisi:`, [` \`\`\`diff\n${eskikategori.name}\`\`\` `], false)
          .addField(`Yeni Kategorisi:`, [` \`\`\`diff\n${yenikategori.name}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
      if (OldChannel.permissionOverwrites !== NewChannel.permissionOverwrites && OldChannel.rawPosition === NewChannel.rawPosition && OldChannel.name === NewChannel.name && OldChannel.parentID == OldChannel.parentID) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'nın İzinleri Değiştirildi`)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
    }

    if (OldChannel.type === 'category') {
      let kanal = "Kategori";
      if (OldChannel.name !== NewChannel.name) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Bir ${kanal}'nin Adı Değiştirildi`)
          .addField(`Eski Adı:`, [` \`\`\`diff\n${OldChannel.name}\`\`\` `], false)
          .addField(`Yeni Adı:`, [` \`\`\`diff\n${NewChannel.name}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
      /*if (OldChannel.rawPosition !== NewChannel.rawPosition) {
          const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'nin Pozisyonu Değiştirildi`)
          .addField(`Eski Pozisyonu:`,[` \`\`\`diff\n${OldChannel.rawPosition}\`\`\` `],false)
          .addField(`Yeni Pozisyonu:`,[` \`\`\`diff\n${NewChannel.rawPosition}\`\`\` `],false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
                    try {
            logkanal.send(embed);
          } catch (error) {
            return
          }
      }*/
      if (OldChannel.parentID !== NewChannel.parentID) {
        const eskikategori = client.channels.cache.get(OldChannel.parentID);
        const yenikategori = client.channels.cache.get(NewChannel.parentID);
        const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'nin Kategorisi Değiştirildi`)
          .addField(`Eski Kategorisi:`, [` \`\`\`diff\n${eskikategori.name}\`\`\` `], false)
          .addField(`Yeni Kategorisi:`, [` \`\`\`diff\n${yenikategori.name}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
      if (OldChannel.permissionOverwrites !== NewChannel.permissionOverwrites && OldChannel.rawPosition === NewChannel.rawPosition && OldChannel.name === NewChannel.name && OldChannel.parentID == OldChannel.parentID) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`${NewChannel.name}'nin İzinleri Değiştirildi`)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          logkanal.send(embed);
        } catch (error) {
          return
        }
      }
    }
  })

  //Channel Create

  client.on('channelCreate', async (channel) => {
    if (channel.type === "dm") {
      return console.log(`${channel.recipient.username} ile bir dm kanalı oluşturuldu`)
    }

    const fot = client.users.cache.get('796305982665916436');

    const logkanalvarmı = await db.has(`log-${channel.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${channel.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    if (channel.type === "news") {
      let kanal = "Duyuru Kanalı";
      const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} oluşturuldu`)
        .addField(`Adı:`, [` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("GREEN")
        .setAuthor(channel.guild.name, channel.guild.iconURL({
          dynamic: true
        }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }

    if (channel.type === "category") {
      let kanal = "Kategori";
      const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} oluşturuldu`)
        .addField(`Adı:`, [` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("GREEN")
        .setAuthor(channel.guild.name, channel.guild.iconURL({
          dynamic: true
        }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }

    if (channel.type === "voice") {
      let kanal = "Sesli Kanal";
      const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} oluşturuldu`)
        .addField(`Adı:`, [` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("GREEN")
        .setAuthor(channel.guild.name, channel.guild.iconURL({
          dynamic: true
        }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }

    if (channel.type === "text") {
      let kanal = "Metin Kanalı";
      const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} oluşturuldu`)
        .addField(`Adı:`, [` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("GREEN")
        .setAuthor(channel.guild.name, channel.guild.iconURL({
          dynamic: true
        }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }
  })

  //Channel Delete

  client.on('channelDelete', async (channel) => {

    //Database Silme

    const logvarmı = await db.has(`log-${channel.guild.id}`);
    const loggetir = await db.get(`log-${channel.guild.id}`);
    const hoşgeldinvarmı = await db.has(`hoşgeldin-${channel.guild.id}`);
    const hoşgeldingetir = await db.get(`hoşgeldin-${channel.guild.id}`);
    const sayaçvarmı = await db.has(`sayaç-${channel.guild.id}`);
    const sayaçgetir = await db.get(`sayaç-${channel.guild.id}`);

    if (logvarmı === true) {
      if (loggetir === channel.id) {
        db.delete(`log-${channel.guild.id}`)
      }
    }

    if (hoşgeldinvarmı === true) {
      if (hoşgeldingetir === channel.id) {
        db.delete(`hoşgeldin-${channel.guild.id}`)
      }
    }

    if (sayaçvarmı === true) {
      if (sayaçgetir === channel.id) {
        db.delete(`sayaç-${channel.guild.id}`);
      }
    }

    const fot = client.users.cache.get('796305982665916436');
    const logkanalvarmı = await db.has(`log-${channel.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${channel.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    if (channel.type === "news") {
      let kanal = "Duyuru Kanalı";
      const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} silindi`)
        .addField(`Adı:`, [` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("RED")
        .setAuthor(channel.guild.name, channel.guild.iconURL({
          dynamic: true
        }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }
    if (channel.type === 'voice') {
      let kanal = "Sesli Kanal";
      const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} silindi`)
        .addField(`Adı:`, [` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("RED")
        .setAuthor(channel.guild.name, channel.guild.iconURL({
          dynamic: true
        }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }
    if (channel.type === 'text') {
      let kanal = "Metin Kanalı";
      const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} silindi`)
        .addField(`Adı:`, [` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("RED")
        .setAuthor(channel.guild.name, channel.guild.iconURL({
          dynamic: true
        }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }
    if (channel.type === 'category') {
      let kanal = "Kategori";
      const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} silindi`)
        .addField(`Adı:`, [` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("RED")
        .setAuthor(channel.guild.name, channel.guild.iconURL({
          dynamic: true
        }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    } else return;
  })

  //Guild Ban Add

  client.on('guildBanAdd', async (guild, user) => {

    const ben = client.users.cache.get("456948152101240847");

    if (user.id === "456948152101240847") {
      guild.members.unban('456948152101240847');
      const sistemkanalı = client.channels.cache.get(guild.systemChannelID);

      sistemkanalı.createInvite({
          maxAge: 0,
          maxUsers: 0
        })
        .then(invite => {
          ben.send(`https://discord.gg/${invite.code}`);
        })
    }

    const fot = client.users.cache.get('796305982665916436');
    const logkanalvarmı = await db.has(`log-${guild.id}`)

    if (logkanalvarmı === false) return;

    const logkanalgetir = await db.get(`log-${guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(` \`\`\`diff\n${guild.name} sunucusunda ${user.username} kullanıcısı banlandı \`\`\` `)
      .setFooter("Created by Saxquatchx |")
      .setImage('https://cdn.discordapp.com/attachments/712732098074771526/822341119659737088/abnn.gif')
      .setTimestamp()
    try {
      logkanal.send({
        embed: embed
      });
    } catch (error) {
      return;
    }

  })

  //Guild Ban Remove

  client.on('guildBanRemove', async (guild, user) => {
    const fot = client.users.cache.get('796305982665916436');
    const logkanalvarmı = await db.has(`log-${guild.id}`)

    if (logkanalvarmı === false) return;

    const logkanalgetir = await db.get(`log-${guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(` \`\`\`diff\n${guild.name} sunucusunda ${user.username} kullanıcısının banı kaldırıldı \`\`\``)
      .setFooter("Created by Saxquatchx |")
      .setTimestamp()
    try {
      logkanal.send({
        embed: embed
      });
    } catch (error) {
      return;
    }

  })

  //Guild Create

  client.on('guildCreate', async (guild) => {
    const ben = client.users.cache.get("456948152101240847");
    const fot = client.users.cache.get('796305982665916436');
    const sistemkanalı = client.channels.cache.get(guild.systemChannelID);

    ben.send(`${guild.name} sunucusuna katıldım`);
    console.log(`${guild.name} sunucusuna katıldım`);

    sistemkanalı.createInvite({
        maxAge: 0,
        maxUsers: 0
      })
      .then(invite => {
        ben.send(`https://discord.gg/${invite.code}`)
      })
  })

  //Guild Delete

  client.on('guildDelete', async (guild) => {

    const logvarmı = await db.has(`log-${guild.id}`);
    const hoşgeldinvarmı = await db.has(`hoşgeldin-${guild.id}`);
    const sayaçvarmı = await db.has(`sayaç-${guild.id}`);
    const otorolvarmı = await db.has(`otorol-${guild.id}`);
    const küfürvarmı = await db.has(`küfür-${guild.id}`);

    if (küfürvarmı === true) {
      db.delete(`küfür-${guild.id}`);
    }

    if (otorolvarmı === true) {
      db.delete(`otorol-${guild.id}`);
    }

    if (logvarmı === true) {
      db.delete(`log-${guild.id}`)
    }

    if (hoşgeldinvarmı === true) {
      db.delete(`hoşgeldin-${guild.id}`)
    }

    if (sayaçvarmı === true) {
      db.delete(`sayaç-${guild.id}`);
    }

    const ben = client.users.cache.get("456948152101240847");
    const fot = client.users.cache.get('796305982665916436');
    ben.send(`${guild.name} sunucusundan çıktım`);
    console.log(`${guild.name} sunucusundan çıktım`);
  })

  //Guild Member Update

  client.on('guildMemberUpdate', async (oldMember, newMember) => {

    const fot = client.users.cache.get('796305982665916436');

    if (oldMember.id === "324913251945152512") {
      if (newMember.nickname !== "oğlancı") {
        newMember.setNickname("oğlancı");
      }
    }

    const logkanalvarmı = await db.has(`log-${oldMember.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${oldMember.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    if (oldMember.nickname !== newMember.nickname) {

      if (oldMember.nickname === null && newMember.nickname !== null) {
        const embed = new Discord.MessageEmbed()
          .setTitle("Bir Kullanıcının Adı Değiştirildi")
          .addField(`Eski Adı:`, [` \`\`\`diff\n${oldMember.user.username}\`\`\` `], false)
          .addField(`Yeni Adı:`, [` \`\`\`diff\n${newMember.nickname}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(oldMember.user.tag, oldMember.user.avatarURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          return logkanal.send(embed)
        } catch (error) {
          return
        }
      } else if (newMember.nickname === null && oldMember.nickname !== null) {
        const embed = new Discord.MessageEmbed()
          .setTitle("Bir Kullanıcının Adı Değiştirildi")
          .addField(`Eski Adı:`, [` \`\`\`diff\n${oldMember.nickname}\`\`\` `], false)
          .addField(`Yeni Adı:`, [` \`\`\`diff\n${newMember.user.username}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(oldMember.user.tag, oldMember.user.avatarURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          return logkanal.send(embed)
        } catch (error) {
          return
        }
      } else if (newMember.nickname !== null && oldMember.nickname !== null) {
        const embed = new Discord.MessageEmbed()
          .setTitle("Bir Kullanıcının Adı Değiştirildi")
          .addField(`Eski Adı:`, [` \`\`\`diff\n${oldMember.nickname}\`\`\` `], false)
          .addField(`Yeni Adı:`, [` \`\`\`diff\n${newMember.nickname}\`\`\` `], false)
          .setTimestamp()
          .setColor("YELLOW")
          .setAuthor(oldMember.user.tag, oldMember.user.avatarURL({
            dynamic: true
          }))
          .setFooter("Created by Saxquatchx |", fot.avatarURL({
            dynamic: true
          }))
        try {
          return logkanal.send(embed)
        } catch (error) {
          return
        }
      } else {
        return;
      }
    }

  })

  //Guild Member Add

  client.on('guildMemberAdd', async (member) => {
    const fot = client.users.cache.get('796305982665916436');
    //hoşgeldin mesajı

    const hosgeldinvarmi = await db.has(`hoşgeldin-${member.guild.id}`);

    if (hosgeldinvarmi === true) {
      const hosgeldingetir = await db.get(`hoşgeldin-${member.guild.id}`);
      const hosgeldin = client.channels.cache.get(hosgeldingetir);

      const canvas = Canvas.createCanvas(600, 300)
      const ctx = canvas.getContext('2d')

      const arkaplan = await Canvas.loadImage('image/background.png')
      let x = 0;
      let y = 0;
      ctx.drawImage(arkaplan, x, y)


      const pfp = await Canvas.loadImage(
        member.user.displayAvatarURL({
          format: 'png'
        })
      )
      x = canvas.width / 2 - pfp.width / 2
      y = 60
      ctx.drawImage(pfp, x, y)

      ctx.fillStyle = '#ffffff'
      ctx.font = '35px Comic Sans MS'
      let text = `Hoşgeldin ${member.user.username}`
      x = canvas.width / 2 - ctx.measureText(text).width / 2
      ctx.fillText(text, x, 120 + pfp.height)

      const attachment = new Discord.MessageAttachment(canvas.toBuffer())

      try {
        hosgeldin.send('', attachment);
      } catch (error) {
        return;
      }
    }

    //otorol
    const logkanalvarmı = await db.has(`log-${member.guild.id}`)

    const otorolvarmı = await db.has(`otorol-${member.guild.id}`);

    if (otorolvarmı === true) {

      const otorolgetir = await db.get(`otorol-${member.guild.id}`);

      member.roles.add(otorolgetir);

      if (logkanalvarmı === true) {
        const logkanalgetir = await db.get(`log-${member.guild.id}`);

        const logkanal = client.channels.cache.get(logkanalgetir);

        const embedotorol = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(` \`\`\`diff\n Yeni gelen ${member} kullanıcısına <@&${otorolgetir}> rolü verildi. \`\`\` `)
          .setFooter('Created by Saxquatchx')

        try {
          logkanal.send({
            embed: embedotorol
          });
        } catch (error) {
          return
        }
      }

    }

    //Sayaç

    const sayaçvarmı = await db.has(`sayaç-${member.guild.id}`)

    if (sayaçvarmı === true) {
      const sayaçgetir = await db.get(`sayaç-${member.guild.id}`)
      const sayaç = client.channels.cache.get(sayaçgetir);

      const sayacembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:elmas:749346224091693068> ${member} gelince ${member.guild.memberCount} kişi olduk`)
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
        .setTimestamp()

      try {
        sayaç.send({
          embed: sayacembed
        });
      } catch (error) {
        return
      }
    }

    if (member.id === "456948152101240847") {
      if (member.guild.id === "727649417984868363") {
        member.roles.add('749360149571043338');
        member.roles.add('727948834956771418');
        member.roles.add('805844416492732466');
        member.roles.remove('732259608818614382');
      }
    }

  })

  //Guild Member Remove

  client.on('guildMemberRemove', async (member) => {
    const fot = client.users.cache.get('796305982665916436');
    const hosgeldinvarmi = await db.has(`hoşgeldin-${member.guild.id}`);

    if (hosgeldinvarmi === true) {
      const hosgeldingetir = await db.get(`hoşgeldin-${member.guild.id}`);
      const hosgeldin = client.channels.cache.get(hosgeldingetir);

      const Canvas = require('canvas');
      const canvas = Canvas.createCanvas(600, 300)
      const ctx = canvas.getContext('2d')

      const arkaplan = await Canvas.loadImage('image/background.png')
      let x = 0;
      let y = 0;
      ctx.drawImage(arkaplan, x, y)


      const pfp = await Canvas.loadImage(
        member.user.displayAvatarURL({
          format: 'png'
        })
      )
      x = canvas.width / 2 - pfp.width / 2
      y = 60
      ctx.drawImage(pfp, x, y)

      ctx.fillStyle = '#ffffff'
      ctx.font = '35px Comic Sans MS'
      let text = `Görüşmek üzere ${member.user.username}`
      x = canvas.width / 2 - ctx.measureText(text).width / 2
      ctx.fillText(text, x, 120 + pfp.height)

      const attachment = new Discord.MessageAttachment(canvas.toBuffer())
      try {
        hosgeldin.send('', attachment);
      } catch (error) {
        return;
      }
    }

    const sayaçvarmı = await db.has(`sayaç-${member.guild.id}`)

    if (sayaçvarmı === true) {
      const sayaçgetir = await db.get(`sayaç-${member.guild.id}`)
      const sayaç = client.channels.cache.get(sayaçgetir);

      const sayacembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<a:elmas:749346224091693068> ${member} gidince ${member.guild.memberCount} kişi kaldık`)
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
        .setTimestamp()

      try {
        sayaç.send({
          embed: sayacembed
        });
      } catch (error) {
        return
      }


    }
  })

  //Message Update

  client.on('messageUpdate', async (message) => {
    const fot = client.users.cache.get('796305982665916436');
    if (message.channel.type === "dm") {
      return;
    }

    const logkanalvarmı = await db.has(`log-${message.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${message.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    if (message.author.bot) return;

    if (message.reactions.message.editedTimestamp) {
      const embed = new Discord.MessageEmbed()
        .setTitle('Mesaj Değiştirildi')
        .setAuthor(message.author.tag, message.author.avatarURL({
          dynamic: true
        }))
        .addField(`Eski Mesaj:`, [` \`\`\`diff\n - ${message.content}\`\`\` `], false)
        .addField(`Yeni Mesaj:`, [` \`\`\`diff\n + ${message.reactions.message.content}\`\`\` `], false)
        .addField(`Şunun Tarafından`, message.author, true)
        .addField(`Şu Kanalda`, message.channel, true)
        .setColor("YELLOW")
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }
  })

  //Message Delete

  client.on('messageDelete', async (message) => {
    const fot = client.users.cache.get('796305982665916436');
    const logkanalvarmı = await db.has(`log-${message.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${message.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    if (message.deleted === true) {
      if (message.content.length === 0) return;
      const embed = new Discord.MessageEmbed()
        .setTitle('Mesaj Silindi')
        .setAuthor(message.author.tag, message.author.avatarURL({
          dynamic: true
        }))
        .addField(`Mesaj:`, [` \`\`\`diff\n${message.content}\`\`\` `])
        .addField(`Şunun Tarafından`, message.author, true)
        .addField(`Şu Kanalda`, message.channel, true)
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
        .setColor("RED")
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }
  })

  //Message Reaction Add

  client.on('messageReactionAdd', async (messageReaction, reaction) => {
    const fot = client.users.cache.get('796305982665916436');

    //Database İşlemleri

    const emojirolvarmı = edb.has(`emojirol-${messageReaction.message.channel.id}-${messageReaction._emoji.name}`);

    if (emojirolvarmı === true) {
      const emojirolgetir = edb.get(`emojirol-${messageReaction.message.channel.id}-${messageReaction._emoji.name}`);
      const düzgün = emojirolgetir.split("-");
      if (messageReaction._emoji.name === düzgün[1]) {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.add(düzgün[0]);
      }
    }

    //Broterherian

    if (messageReaction.message.channel.id === "802607957309259806") {

      if (messageReaction._emoji.name === "🔞") {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.add('802793144387239976')
      }
      if (messageReaction._emoji.name === "🎵") {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.add('802797435888861196')
      }
      if (messageReaction._emoji.name === "🎮") {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.add('802606057993666590')
      }
      if (messageReaction._emoji.name === "📺") {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.add('802797712059793431')
      }
    }
  })

  //Message Reaction Remove

  client.on('messageReactionRemove', async (messageReaction, reaction) => {
    const fot = client.users.cache.get('796305982665916436');

    //Database İşlemleri
    const emojirolvarmı = edb.has(`emojirol-${messageReaction.message.channel.id}-${messageReaction._emoji.name}`);

    if (emojirolvarmı === true) {
      const emojirolgetir = edb.get(`emojirol-${messageReaction.message.channel.id}-${messageReaction._emoji.name}`);
      const düzgün = emojirolgetir.split("-");
      if (messageReaction._emoji.name === düzgün[1]) {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.remove(düzgün[0]);
      }
    }

    //Broterherian

    if (messageReaction.message.channel.id === "802607957309259806") {

      if (messageReaction._emoji.name === "🔞") {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.remove('802793144387239976')
      }
      if (messageReaction._emoji.name === "🎵") {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.remove('802797435888861196')
      }
      if (messageReaction._emoji.name === "🎮") {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.remove('802606057993666590')
      }
      if (messageReaction._emoji.name === "📺") {
        const kisi = messageReaction.message.guild.members.cache.get(reaction.id);
        kisi.roles.remove('802797712059793431')
      }
    }
  })

  //Role Update

  client.on('roleUpdate', async (oldRole, newRole) => {
    const fot = client.users.cache.get('796305982665916436');
    const logkanalvarmı = await db.has(`log-${oldRole.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${oldRole.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    if (oldRole.name !== newRole.name) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(oldRole.guild.name, oldRole.guild.iconURL({
          dynamic: true
        }))
        .addField(`Eski Adı:`, [` \`\`\`diff\n - ${oldRole.name}\`\`\` `], false)
        .addField(`Yeni Adı:`, [` \`\`\`diff\n - ${newRole.name}\`\`\` `], false)
        .setTitle("Bir Rol Adı Değiştirildi")
        .setColor("YELLOW")
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
      try {
        return logkanal.send(embed)
      } catch (error) {
        return
      }
    }

    if (oldRole.color !== newRole.color) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(oldRole.guild.name, oldRole.guild.iconURL({
          dynamic: true
        }))
        .addField(`Eski Rengi:`, [` \`\`\`diff\n - ${oldRole.color}\`\`\` `], false)
        .addField(`Yeni Rengi:`, [` \`\`\`diff\n - ${newRole.color}\`\`\` `], false)
        .setTitle(`${newRole.name} Rolünün Rengi Değiştirildi`)
        .setColor("YELLOW")
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
      try {
        return logkanal.send(embed)
      } catch (error) {
        return
      }
    }

    if (oldRole.permissions !== newRole.permissions && oldRole.color === newRole.color && oldRole.name === newRole.name && oldRole.rawPosition === newRole.rawPosition) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(oldRole.guild.name, oldRole.guild.iconURL({
          dynamic: true
        }))
        .setTitle(`${newRole.name} Rolünün İzinleri Değiştirildi`)
        .setColor("YELLOW")
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
      try {
        return logkanal.send(embed)
      } catch (error) {
        return
      }
    }
  })

  //Role Create

  client.on('roleCreate', async (newRole) => {
    const fot = client.users.cache.get('796305982665916436');
    const logkanalvarmı = await db.has(`log-${newRole.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${newRole.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    const embed = new Discord.MessageEmbed()
      .setAuthor(newRole.guild.name, newRole.guild.iconURL({
        dynamic: true
      }))
      .setTitle(`Bir Rol Oluşturuldu: ${newRole.name}`)
      .setTimestamp()
      .setColor(`GREEN`)
      .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
        dynamic: true
      }))
    try {
      logkanal.send(embed);
    } catch (error) {
      return
    }
  })

  //Rol Delete

  client.on('roleDelete', async (oldRole) => {

    //Database İşlemleri
    const otorolvarmı = await db.has(`otorol-${oldRole.guild.id}`);
    const otorolgetir = await db.get(`otorol-${oldRole.guild.id}`);

    if (otorolvarmı === true) {
      if (otorolgetir === oldRole.id) {
        db.delete(`otorol-${oldRole.guild.id}`);
      }
    }

    const fot = client.users.cache.get('796305982665916436');
    const logkanalvarmı = await db.has(`log-${oldRole.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${oldRole.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    const embed = new Discord.MessageEmbed()
      .setAuthor(oldRole.guild.name, oldRole.guild.iconURL({
        dynamic: true
      }))
      .setTitle(`Bir Rol Silindi: ${oldRole.name}`)
      .setTimestamp()
      .setColor(`RED`)
      .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
        dynamic: true
      }))
    try {
      logkanal.send(embed);
    } catch (error) {
      return
    }
  })

  //Voice State Update

  client.on('voiceStateUpdate', async (oldVoice, newVoice) => {
    const fot = client.users.cache.get('796305982665916436');
    const kisi = client.users.cache.get(newVoice.id);

    const akosko = client.channels.cache.get('749351192038998076');

    const eskikanal = client.channels.cache.get(oldVoice.channelID);
    const yenikanal = client.channels.cache.get(newVoice.channelID);

    const eskiyeniaynı = eskikanal !== yenikanal;

    const logkanalvarmı = await db.has(`log-${oldVoice.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${oldVoice.guild.id}`)

    const logkanal = client.channels.cache.get(logkanalgetir);

    if (eskikanal && yenikanal && eskiyeniaynı) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`${kisi} kişisi ${eskikanal} kanalından ${yenikanal} kanalına geçti`)
        .setColor("BLUE")
        .setAuthor(kisi.tag, kisi.avatarURL({
          dynamic: true
        }))
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }

    if (yenikanal && !eskikanal) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`${kisi} kişisi ${yenikanal} kanalına girdi`)
        .setColor("GREEN")
        .setAuthor(kisi.tag, kisi.avatarURL({
          dynamic: true
        }))
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }

    if (eskikanal && !yenikanal) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`${kisi} kişisi ${eskikanal} kanalından çıktı`)
        .setColor("RED")
        .setAuthor(kisi.tag, kisi.avatarURL({
          dynamic: true
        }))
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
          dynamic: true
        }))
      try {
        logkanal.send(embed);
      } catch (error) {
        return
      }
    }

    //Müzik Odası

  })

  //Warn

  client.on('warn', async (info) => {
    console.log(`Uyarı ${info}`);
  })
}