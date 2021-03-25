module.exports = (Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, prefix, sahip, token, distube, path,  got) => {

    client.on('ready', (ready) =>{
      const fot = client.users.cache.get('743579595860607086');
      client.user.setStatus('idle');

      var oynuyorkısımları = [
          "Prefix: S",
          "Syardım",
          "Created by Saxquatchx"
          ]
  
  
          setInterval(function() {
  
                  var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
                 client.user.setActivity(oynuyorkısımları[random], { type: 'LISTENING' });
               }, 2 * 3000);
      console.log(chalk.hex("#03d3fc").bold("-------------"))
      console.log(chalk.hex("#03d3fc")("|"), chalk.hex('#FF8800').bold("Bot hazır"), chalk.hex("#03d3fc")("|"))
      console.log(chalk.hex("#03d3fc").bold("-------------"))
    })

    client.on('message', async (message) => {
      const fot = client.users.cache.get('743579595860607086');
        const args = message.content.substring(prefix.lenght).split(" ");
        
      
        //Konuşulanları Loga Alma 
      
        if (message.channel.type === "text") {
          console.log(chalk.red(message.guild.name," sunucusunda "),chalk.blue(message.channel.name," kanalında "),chalk.green(message.author.username,": "),message.content);
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
              }
              else message.reply('Aleyküm Selam Hoş Geldin !');
              break;
            case "sea":
              if (message.author.id === sahip) {
                message.reply("Ooo kral aleyküm selam hg");
                message.react('🥰');
              }
              else message.reply('Aleyküm Selam Hoş Geldin !');
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
              }
              else message.reply("Günaydın");
              break;
            case "günaydın":
              if (message.author.id === sahip) {
                message.reply("Günaydın kral :)");
                message.react('🥰');
              }
              else message.reply("Günaydın");
              break;
            case "iyi geceler":
              if (message.author.id === sahip) {
                message.reply("iyi geceler kral :)");
                message.react('🥰');
              }
              else  message.reply("İyi Geceler");
              break;
            case "peki":
              if (message.guild.id === "727649417984868363") {
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
              .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
              break;
            case "aferin":
              message.reply('thx');
              break;
            default:
              break;
          }

          //Küfür Koruma

          const küfürkanal = message.channel.type;

          if (küfürkanal === "text") {
        
        
          const küfüraçıkmı = db.has(`küfür-${message.guild.id}`,"açık")
        
          const küfürler = ["aq", "amk", "orospu", "oç", "yavşak", "ibne", "göt", "anan", "yarrak", "taşak", "amcık", "amına", "anaskm", "siktir", "sikik"];
        
          for (var i = 0; i < küfürler.length; i++) {
            const küfür = küfürler[i];
        
            if (küfüraçıkmı === true) {
              if (message.content.includes(küfür) ||message.content === "sik") {
                message.delete();
                const kufurembed = new Discord.MessageEmbed()
                .setDescription(`${message.guild.name} sunucusunda küfür etmek yasaktır !!!`)
                .setColor("RANDOM")
                message.author.send(kufurembed);
        
              }
            }
          }
        }
    })

  //Channel Update

    client.on('channelUpdate', async (OldChannel, NewChannel) => {
      const fot = client.users.cache.get('743579595860607086');

      const logkanalvarmı = await db.has(`log-${OldChannel.guild.id}`)
      if (logkanalvarmı === false) return;
      const logkanalgetir = await db.get(`log-${OldChannel.guild.id}`)
    
      const logkanal = client.channels.cache.get(logkanalgetir);
    
      if (OldChannel.type === "news") {
        let kanal = "Duyuru Kanalı";
        if (OldChannel.name !== NewChannel.name) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bir ${kanal}'nın Adı Değiştirildi`)
            .addField(`Eski Adı:`,[` \`\`\`diff\n${OldChannel.name}\`\`\` `],false)
            .addField(`Yeni Adı:`,[` \`\`\`diff\n${NewChannel.name}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.parentID !== NewChannel.parentID) {
            const eskikategori = client.channels.cache.get(OldChannel.parentID);
            const yenikategori = client.channels.cache.get(NewChannel.parentID);
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'nın Kategorisi Değiştirildi`)
            .addField(`Eski Kategorisi:`,[` \`\`\`diff\n${eskikategori.name}\`\`\` `],false)
            .addField(`Yeni Kategorisi:`,[` \`\`\`diff\n${yenikategori.name}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.permissionOverwrites !== NewChannel.permissionOverwrites && OldChannel.rawPosition === NewChannel.rawPosition && OldChannel.name === NewChannel.name && OldChannel.parentID == OldChannel.parentID) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'nın İzinleri Değiştirildi`)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
      }
    
      if (OldChannel.type === 'voice') {
        let kanal = "Sesli Kanal";
        if (OldChannel.name !== NewChannel.name) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bir ${kanal}'ın Adı Değiştirildi`)
            .addField(`Eski Adı:`,[` \`\`\`diff\n${OldChannel.name}\`\`\` `],false)
            .addField(`Yeni Adı:`,[` \`\`\`diff\n${NewChannel.name}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.rawPosition !== NewChannel.rawPosition) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'ın Pozisyonu Değiştirildi`)
            .addField(`Eski Pozisyonu:`,[` \`\`\`diff\n${OldChannel.rawPosition}\`\`\` `],false)
            .addField(`Yeni Pozisyonu:`,[` \`\`\`diff\n${NewChannel.rawPosition}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.parentID !== NewChannel.parentID) {
            const eskikategori = client.channels.cache.get(OldChannel.parentID);
            const yenikategori = client.channels.cache.get(NewChannel.parentID);
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'ın Kategorisi Değiştirildi`)
            .addField(`Eski Kategorisi:`,[` \`\`\`diff\n${eskikategori.name}\`\`\` `],false)
            .addField(`Yeni Kategorisi:`,[` \`\`\`diff\n${yenikategori.name}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.permissionOverwrites !== NewChannel.permissionOverwrites && OldChannel.rawPosition === NewChannel.rawPosition && OldChannel.name === NewChannel.name && OldChannel.parentID == OldChannel.parentID) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'ın İzinleri Değiştirildi`)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
      }
    
      if (OldChannel.type === 'text') {
        let kanal = "Metin Kanalı";
        if (OldChannel.name !== NewChannel.name) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bir ${kanal}'nın Adı Değiştirildi`)
            .addField(`Eski Adı:`,[` \`\`\`diff\n${OldChannel.name}\`\`\` `],false)
            .addField(`Yeni Adı:`,[` \`\`\`diff\n${NewChannel.name}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.rawPosition !== NewChannel.rawPosition) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'nın Pozisyonu Değiştirildi`)
            .addField(`Eski Pozisyonu:`,[` \`\`\`diff\n${OldChannel.rawPosition}\`\`\` `],false)
            .addField(`Yeni Pozisyonu:`,[` \`\`\`diff\n${NewChannel.rawPosition}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.parentID !== NewChannel.parentID) {
            const eskikategori = client.channels.cache.get(OldChannel.parentID);
            const yenikategori = client.channels.cache.get(NewChannel.parentID);
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'nın Kategorisi Değiştirildi`)
            .addField(`Eski Kategorisi:`,[` \`\`\`diff\n${eskikategori.name}\`\`\` `],false)
            .addField(`Yeni Kategorisi:`,[` \`\`\`diff\n${yenikategori.name}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.permissionOverwrites !== NewChannel.permissionOverwrites && OldChannel.rawPosition === NewChannel.rawPosition && OldChannel.name === NewChannel.name && OldChannel.parentID == OldChannel.parentID) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'nın İzinleri Değiştirildi`)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
      }
    
      if (OldChannel.type === 'category') {
        let kanal = "Kategori";
        if (OldChannel.name !== NewChannel.name) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bir ${kanal}'nin Adı Değiştirildi`)
            .addField(`Eski Adı:`,[` \`\`\`diff\n${OldChannel.name}\`\`\` `],false)
            .addField(`Yeni Adı:`,[` \`\`\`diff\n${NewChannel.name}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.rawPosition !== NewChannel.rawPosition) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'nin Pozisyonu Değiştirildi`)
            .addField(`Eski Pozisyonu:`,[` \`\`\`diff\n${OldChannel.rawPosition}\`\`\` `],false)
            .addField(`Yeni Pozisyonu:`,[` \`\`\`diff\n${NewChannel.rawPosition}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.parentID !== NewChannel.parentID) {
            const eskikategori = client.channels.cache.get(OldChannel.parentID);
            const yenikategori = client.channels.cache.get(NewChannel.parentID);
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'nin Kategorisi Değiştirildi`)
            .addField(`Eski Kategorisi:`,[` \`\`\`diff\n${eskikategori.name}\`\`\` `],false)
            .addField(`Yeni Kategorisi:`,[` \`\`\`diff\n${yenikategori.name}\`\`\` `],false)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
        }
        if (OldChannel.permissionOverwrites !== NewChannel.permissionOverwrites && OldChannel.rawPosition === NewChannel.rawPosition && OldChannel.name === NewChannel.name && OldChannel.parentID == OldChannel.parentID) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${NewChannel.name}'nin İzinleri Değiştirildi`)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(OldChannel.guild.name, OldChannel.guild.iconURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            logkanal.send(embed);
          }
        }
    })

  //Channel Create

    client.on('channelCreate', async (channel) =>{
      if (channel.type=== "dm") {
        return console.log(`${channel.recipient.username} ile bir dm kanalı oluşturuldu`)
      }
    
      const fot = client.users.cache.get('743579595860607086');
    
      const logkanalvarmı = await db.has(`log-${channel.guild.id}`)
      if (logkanalvarmı === false) return;
      const logkanalgetir = await db.get(`log-${channel.guild.id}`)
    
      const logkanal = client.channels.cache.get(logkanalgetir);
    
      if (channel.type === "news") {
        let kanal = "Duyuru Kanalı";
        const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} oluşturuldu`)
        .addField(`Adı:`,[` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("RANDOM")
        .setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic:true }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
        logkanal.send(embed);
      }
    
      if (channel.type === "category") {
        let kanal = "Kategori";
        const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} oluşturuldu`)
        .addField(`Adı:`,[` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("RANDOM")
        .setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic:true }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
        logkanal.send(embed);
      }
    
      if (channel.type === "voice") {
        let kanal = "Sesli Kanal";
        const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} oluşturuldu`)
        .addField(`Adı:`,[` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("RANDOM")
        .setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic:true }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
        logkanal.send(embed);
      }
    
      if (channel.type === "text") {
        let kanal = "Metin Kanalı";
        const embed = new Discord.MessageEmbed()
        .setTitle(`Bir ${kanal} oluşturuldu`)
        .addField(`Adı:`,[` \`\`\`diff\n${channel.name}\`\`\` `])
        .setTimestamp()
        .setColor("RANDOM")
        .setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic:true }))
        .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
        logkanal.send(embed);
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

    const fot = client.users.cache.get('743579595860607086');
    const logkanalvarmı = await db.has(`log-${channel.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${channel.guild.id}`)
  
    const logkanal = client.channels.cache.get(logkanalgetir);
  
    if (channel.type === "news") {
      let kanal = "Duyuru Kanalı";
      const embed = new Discord.MessageEmbed()
      .setTitle(`Bir ${kanal} silindi`)
      .addField(`Adı:`,[` \`\`\`diff\n${channel.name}\`\`\` `])
      .setTimestamp()
      .setColor("RANDOM")
      .setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic:true }))
      .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
      logkanal.send(embed);
    }
    if (channel.type === 'voice') {
      let kanal = "Sesli Kanal";
      const embed = new Discord.MessageEmbed()
      .setTitle(`Bir ${kanal} silindi`)
      .addField(`Adı:`,[` \`\`\`diff\n${channel.name}\`\`\` `])
      .setTimestamp()
      .setColor("RANDOM")
      .setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic:true }))
      .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
      logkanal.send(embed);
    }
    if (channel.type === 'text') {
      let kanal = "Metin Kanalı";
      const embed = new Discord.MessageEmbed()
      .setTitle(`Bir ${kanal} silindi`)
      .addField(`Adı:`,[` \`\`\`diff\n${channel.name}\`\`\` `])
      .setTimestamp()
      .setColor("RANDOM")
      .setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic:true }))
      .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
      logkanal.send(embed);
    }
    if (channel.type === 'category') {
      let kanal = "Kategori";
      const embed = new Discord.MessageEmbed()
      .setTitle(`Bir ${kanal} silindi`)
      .addField(`Adı:`,[` \`\`\`diff\n${channel.name}\`\`\` `])
      .setTimestamp()
      .setColor("RANDOM")
      .setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic:true }))
      .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
      logkanal.send(embed);
    }
    else return;
  })

  //Guild Ban Add

  client.on('guildBanAdd', async (guild, user) => {
    const fot = client.users.cache.get('743579595860607086');
    const logkanalvarmı = await db.has(`log-${guild.id}`)

    if (logkanalvarmı === false) return;
  
      const logkanalgetir = await db.get(`log-${guild.id}`)
    
      const logkanal = client.channels.cache.get(logkanalgetir);
    
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(` \`\`\`diff\n${guild.name} sunucusunda ${user.username} kullanıcısı banlandı \`\`\` `)
      .setFooter("Created by Saxquatchx |")
      .setImage('https://cdn.discordapp.com/attachments/712732098074771526/822341119659737088/abnn.gif')
      .setTimestamp()
      logkanal.send({embed:embed});

  })

  //Guild Ban Remove

  client.on('guildBanRemove', async (guild, user) => {
    const fot = client.users.cache.get('743579595860607086');
    const logkanalvarmı = await db.has(`log-${guild.id}`)

    if (logkanalvarmı === false) return;
  
      const logkanalgetir = await db.get(`log-${guild.id}`)
    
      const logkanal = client.channels.cache.get(logkanalgetir);
    
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(` \`\`\`diff\n${guild.name} sunucusunda ${user.username} kullanıcısının banı kaldırıldı \`\`\``)
      .setFooter("Created by Saxquatchx |")
      .setTimestamp()
      logkanal.send({embed:embed});
  
  })

  //Guild Create

  client.on('guildCreate', async (guild) => {
    const ben = client.users.cache.get("456948152101240847");
    const fot = client.users.cache.get('743579595860607086');
    const sistemkanalı = client.channels.cache.get(guild.systemChannelID);

    ben.send(`${guild.name} sunucusuna katıldım`);
    console.log(`${guild.name} sunucusuna katıldım`);

    sistemkanalı.createInvite({unique:true})
    .then(invite =>{
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
    const fot = client.users.cache.get('743579595860607086');
    ben.send(`${guild.name} sunucusundan çıktım`);
    console.log(`${guild.name} sunucusundan çıktım`);
  })

  //Guild Member Update

  client.on('guildMemberUpdate', async (oldMember, newMember) => {
    
    const fot = client.users.cache.get('743579595860607086');
    const logkanalvarmı = await db.has(`log-${oldMember.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${oldMember.guild.id}`)
  
    const logkanal = client.channels.cache.get(logkanalgetir);
  
      if (oldMember.nickname !== newMember.nickname) {
  
          if (oldMember.nickname === null && newMember.nickname !== null) {
              const embed = new Discord.MessageEmbed()
              .setTitle("Bir Kullanıcının Adı Değiştirildi")
              .addField(`Eski Adı:`,[` \`\`\`diff\n${oldMember.user.username}\`\`\` `],false)
              .addField(`Yeni Adı:`,[` \`\`\`diff\n${newMember.nickname}\`\`\` `],false)
              .setTimestamp()
              .setColor("RANDOM")
              .setAuthor(oldMember.user.tag, oldMember.user.avatarURL({ dynamic:true }))
              .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
              return logkanal.send(embed)
          }
  
          else if (newMember.nickname === null && oldMember.nickname !== null) {
              const embed = new Discord.MessageEmbed()
              .setTitle("Bir Kullanıcının Adı Değiştirildi")
              .addField(`Eski Adı:`,[` \`\`\`diff\n${oldMember.nickname}\`\`\` `],false)
              .addField(`Yeni Adı:`,[` \`\`\`diff\n${newMember.user.username}\`\`\` `],false)
              .setTimestamp()
              .setColor("RANDOM")
              .setAuthor(oldMember.user.tag, oldMember.user.avatarURL({ dynamic:true }))
              .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
              return logkanal.send(embed)
          }
          
          else if (newMember.nickname !== null && oldMember.nickname !== null ) {
              const embed = new Discord.MessageEmbed()
              .setTitle("Bir Kullanıcının Adı Değiştirildi")
              .addField(`Eski Adı:`,[` \`\`\`diff\n${oldMember.nickname}\`\`\` `],false)
              .addField(`Yeni Adı:`,[` \`\`\`diff\n${newMember.nickname}\`\`\` `],false)
              .setTimestamp()
              .setColor("RANDOM")
              .setAuthor(oldMember.user.tag, oldMember.user.avatarURL({ dynamic:true }))
              .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
              return logkanal.send(embed)
          }
  
          else{
              return;
          }
      }    

      function arr_diff (a1, a2) {

        var a = [], diff = [];
    
        for (var i = 0; i < a1.length; i++) {
            a[a1[i]] = true;
        }
    
        for (var i = 0; i < a2.length; i++) {
            if (a[a2[i]]) {
                delete a[a2[i]];
            } else {
                a[a2[i]] = true;
            }
        }
    
        for (var k in a) {
            diff.push(k);
        }
    
        return diff;
    }
  
      if (oldMember._roles !== newMember._roles) { 
          const buyukmukucukmu = newMember._roles > oldMember._roles;      
          const karşılaştır = arr_diff(oldMember._roles, newMember._roles);
          if (buyukmukucukmu === true) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Bir Kullanıcıya Rol Verildi")
            .addField("Verilen Rol:", `<@&${karşılaştır}>`)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(oldMember.user.tag, oldMember.user.avatarURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            return logkanal.send(embed)
          }
  
          if (buyukmukucukmu === false) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Bir Kullanıcıdan Rol Alındı")
            .addField(`Alınan Rol:`, `<@&${karşılaştır}>`)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(oldMember.user.tag, oldMember.user.avatarURL({ dynamic:true }))
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            return logkanal.send(embed)
          }
  
      }
  
  })

  //Guild Member Add

  client.on('guildMemberAdd', async (member) => {
    const fot = client.users.cache.get('743579595860607086');
    //hoşgeldin mesajı
    
    const hosgeldinvarmi = await db.has(`hoşgeldin-${member.guild.id}`);
    
    if (hosgeldinvarmi === true) {
      const hosgeldingetir = await db.get(`hoşgeldin-${member.guild.id}`);
      const hosgeldin = client.channels.cache.get(hosgeldingetir);
    
      const canvas = Canvas.createCanvas(600,300)
      const ctx = canvas.getContext('2d')
    
      const arkaplan = await Canvas.loadImage('image/background.png')
      let x = 0;
      let y = 0;
      ctx.drawImage(arkaplan, x, y)
    
    
      const pfp = await Canvas.loadImage(
        member.user.displayAvatarURL({
        format:'png'
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
      hosgeldin.send('', attachment);
    
    } else	return;
    
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
        .setColor("RANDOM")
         .setDescription(` \`\`\`diff\n Yeni gelen ${member} kullanıcısına <@&${otorolgetir}> rolü verildi. \`\`\` `)
         .setFooter('Created by Saxquatchx')
         logkanal.send({embed:embedotorol});
    
      } else return;
    
    } else return;
    
    //Sayaç
    
    const sayaçvarmı = await db.has(`sayaç-${member.guild.id}`)
    
    if (sayaçvarmı === true) {
      const sayaçgetir = await db.get(`sayaç-${member.guild.id}`)
    
      const sayaç = client.channels.cache.get(sayaçgetir);
    
          const sayacembed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(` \`\`\`diff\n ${member} ile birlikte ${member.guild.memberCount} kişi olduk ! \`\`\` `)
          .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
          sayaç.send({embed:sayacembed});
    
    
    } else return;
    
    if (member.id === "456948152101240847" && member.guild.id === "727649417984868363") {
      const mert = client.users.cache.get('456948152101240847');
      const itachi = member.guild.roles.cache.get('727948834956771418')
      member.roles.add(itachi);
    }

  })

  //Guild Member Remove

  client.on('guildMemberRemove', async (member) => {
    const fot = client.users.cache.get('743579595860607086');
    const hosgeldinvarmi = await db.has(`hoşgeldin-${member.guild.id}`);

    if (hosgeldinvarmi === true) {
      const hosgeldingetir = await db.get(`hoşgeldin-${member.guild.id}`);
      const hosgeldin = client.channels.cache.get(hosgeldingetir);
    
      const Canvas = require('canvas');
      const canvas = Canvas.createCanvas(600,300)
      const ctx = canvas.getContext('2d')
    
      const arkaplan = await Canvas.loadImage('image/background.png')
      let x = 0;
      let y = 0;
      ctx.drawImage(arkaplan, x, y)
    
    
      const pfp = await Canvas.loadImage(
        member.user.displayAvatarURL({
        format:'png'
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
      hosgeldin.send('', attachment);
    
    
    } else return;
    
    const sayaçvarmı = await db.has(`sayaç-${member.guild.id}`)
    
    if (sayaçvarmı === true) {
      const sayaçgetir = await db.get(`sayaç-${member.guild.id}`)
    
      const sayaç = client.channels.cache.get(sayaçgetir);
    
          const sayacembed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`${member} gidince ${member.guild.memberCount} kişi kaldık`)
          .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
          .setTimestamp()
          sayaç.send({embed:sayacembed});
    
    
    } else return;
  })

  //Message Update

  client.on('messageUpdate', async (message) => {
    const fot = client.users.cache.get('743579595860607086');
    if (message.channel.type === "dm") {
      return;
    }
  
    const logkanalvarmı = await db.has(`log-${message.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${message.guild.id}`)
  
    const logkanal = client.channels.cache.get(logkanalgetir);
  
    if(message.author.bot) return;
  
    if (message.reactions.message.editedTimestamp) {
      const embed = new Discord.MessageEmbed()
      .setTitle('Mesaj Değiştirildi')
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic:true }))
      .addField(`Eski Mesaj:`, [` \`\`\`diff\n - ${message.content}\`\`\` `], false)
      .addField(`Yeni Mesaj:`, [` \`\`\`diff\n + ${message.reactions.message.content}\`\`\` `], false)
      .addField(`Şunun Tarafından`, message.author, true)
      .addField(`Şu Kanalda`, message.channel, true)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
      logkanal.send(embed);
    }
  })

  //Message Delete

  client.on('messageDelete', async (message) => {
    const fot = client.users.cache.get('743579595860607086');
    const logkanalvarmı = await db.has(`log-${message.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${message.guild.id}`)
  
    const logkanal = client.channels.cache.get(logkanalgetir);
  
    if (message.deleted === true) {
      if (message.content.length === 0) return;
      const embed = new Discord.MessageEmbed()
      .setTitle('Mesaj Silindi')
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic:true }))
      .addField(`Mesaj:`, [` \`\`\`diff\n${message.content}\`\`\` `])
      .addField(`Şunun Tarafından`, message.author, true)
      .addField(`Şu Kanalda`, message.channel, true)
      .setTimestamp()
      .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
      logkanal.send(embed);
    }
  })

  //Message Reaction Add

  client.on('messageReactionAdd', async (messageReaction, reaction) => {
    const fot = client.users.cache.get('743579595860607086');

    //Database İşlemleri

    const emojirolvarmı = db.has(`emojirol-${messageReaction.message.channel.id}-${messageReaction._emoji.name}`);

    if (emojirolvarmı === true) {
      const emojirolgetir = db.get(`emojirol-${messageReaction.message.channel.id}-${messageReaction._emoji.name}`);
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
    const fot = client.users.cache.get('743579595860607086');

    //Database İşlemleri
    const emojirolvarmı = db.has(`emojirol-${messageReaction.message.channel.id}-${messageReaction._emoji.name}`);

    if (emojirolvarmı === true) {
      const emojirolgetir = db.get(`emojirol-${messageReaction.message.channel.id}-${messageReaction._emoji.name}`);
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
    const fot = client.users.cache.get('743579595860607086');
    const logkanalvarmı = await db.has(`log-${oldRole.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${oldRole.guild.id}`)
  
    const logkanal = client.channels.cache.get(logkanalgetir);
  
    if (oldRole.name !== newRole.name) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(oldRole.guild.name, oldRole.guild.iconURL({ dynamic:true }))
        .addField(`Eski Adı:`, [` \`\`\`diff\n - ${oldRole.name}\`\`\` `], false)
        .addField(`Yeni Adı:`, [` \`\`\`diff\n - ${newRole.name}\`\`\` `], false)
        .setTitle("Bir Rol Adı Değiştirildi")
        .setColor(newRole.color)
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
        return logkanal.send(embed)
    }
  
    if (oldRole.color !== newRole.color) {
      const embed = new Discord.MessageEmbed()
      .setAuthor(oldRole.guild.name, oldRole.guild.iconURL({ dynamic:true }))
      .addField(`Eski Rengi:`, [` \`\`\`diff\n - ${oldRole.color}\`\`\` `], false)
      .addField(`Yeni Rengi:`, [` \`\`\`diff\n - ${newRole.color}\`\`\` `], false)
      .setTitle(`${newRole.name} Rolünün Rengi Değiştirildi`)
      .setColor(newRole.color)
      .setTimestamp()
      .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
      return logkanal.send(embed)
    }
  
    if (oldRole.permissions !== newRole.permissions) {
      const embed = new Discord.MessageEmbed()
      .setAuthor(oldRole.guild.name, oldRole.guild.iconURL({ dynamic:true }))
      .setTitle(`${newRole.name} Rolünün İzinleri Değiştirildi`)
      .setColor(newRole.color)
      .setTimestamp()
      .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
      return logkanal.send(embed)
    }
  })

  //Role Create

  client.on('roleCreate', async (newRole) => {
    const fot = client.users.cache.get('743579595860607086');
    const logkanalvarmı = await db.has(`log-${newRole.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${newRole.guild.id}`)
  
    const logkanal = client.channels.cache.get(logkanalgetir);
  
    const embed = new Discord.MessageEmbed()
    .setAuthor(newRole.guild.name, newRole.guild.iconURL({ dynamic:true }))
    .setTitle(`Bir Rol Oluşturuldu: ${newRole.name}`)
    .setTimestamp()
    .setColor(`${newRole.color}`)
    .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
    logkanal.send(embed);
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

    const fot = client.users.cache.get('743579595860607086');
    const logkanalvarmı = await db.has(`log-${oldRole.guild.id}`)
    if (logkanalvarmı === false) return;
    const logkanalgetir = await db.get(`log-${oldRole.guild.id}`)
  
    const logkanal = client.channels.cache.get(logkanalgetir);
  
    const embed = new Discord.MessageEmbed()
    .setAuthor(oldRole.guild.name, oldRole.guild.iconURL({ dynamic:true }))
    .setTitle(`Bir Rol Silindi: ${oldRole.name}`)
    .setTimestamp()
    .setColor(`RANDOM`)
    .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
    logkanal.send(embed);
  })

  //Voice State Update

  client.on('voiceStateUpdate', async (oldVoice, newVoice) => {
    const fot = client.users.cache.get('743579595860607086');
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
        .setColor("GREEN")
        .setAuthor(kisi.tag, kisi.avatarURL({ dynamic:true }))
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
        logkanal.send(embed);
      }
  
      if (yenikanal && !eskikanal) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${kisi} kişisi ${yenikanal} kanalına girdi`)
        .setColor("GREEN")
        .setAuthor(kisi.tag, kisi.avatarURL({ dynamic:true }))
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
        logkanal.send(embed);
      }
  
      if (eskikanal && !yenikanal) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${kisi} kişisi ${eskikanal} kanalından çıktı`)
        .setColor("RED")
        .setAuthor(kisi.tag, kisi.avatarURL({ dynamic:true }))
        .setTimestamp()
        .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
        logkanal.send(embed);
      }  
  })

  //Warn

  client.on('warn', async (info) => {
    console.log(`Uyarı ${info}`);
  })
}