var pathToFfmpeg = require('ffmpeg-static');
module.exports = (Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, prefix, sahip, token, distube, path, fot, got) => {
    client.on('message', async (message) =>{

          //Sesli Komutlar
          if (message.content.toLowerCase() === "sesliden çık") {
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) {
            const embed = new Discord.MessageEmbed()
            .setDescription("Bir Sesli Kanalda Değilsin")
            .setColor("RANDOM")
            .setFooter(`Created by Saxquatchx |`, fot.avatarURL({ dynamic:true }))
            return message.channel.send(embed);
            }
            voiceChannel.leave();
        }

                      //Abdülhamit
                      if (message.content.toLowerCase() === 'sen abdülhamidi savundun') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'abdülahmit.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //Araba
                    if (message.content.toLowerCase() === 'bu araba kime çıkıyo') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'araba.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //Diss
                    if (message.content.toLowerCase() === 'diss') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'diss.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //eheğ
                    if (message.content.toLowerCase() === 'eheğ') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'eheğ.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //Andımız
                    if (message.content.toLowerCase() === 'andımız') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'andimiz.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //Yakıştı
                    if (message.content.toLowerCase() === 'bu yakıştı mı sana kardeşim') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'yakisti.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //habıbi
                    if (message.content.toLowerCase() === 'habibi pıliz') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'habıbi.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //İsmet
                    if (message.content.toLowerCase() === 'ismet') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'ismet.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //kritik
                    if (message.content.toLowerCase() === 'kritik') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'kritik.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //osman
                    if (message.content.toLowerCase() === 'osman gültekin') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'osman.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //pepe
                    if (message.content.toLowerCase() === 'pepe') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'pepe.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //Ananı Avradını
                    if (message.content.toLowerCase() === 'senin ananı avradını') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'senin.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //Sen misin
                    if (message.content.toLowerCase() === 'sen misin ilacım') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'senmisin.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //anime
                    if (message.content.toLowerCase() === 'anime') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'anime.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //kara göründü
                    if (message.content.toLowerCase() === 'ordular ileri') {
                        const voiceChannel = message.member.voice.channel;
                        if(!voiceChannel){
                            const embed = new Discord.MessageEmbed()
                            .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                            .setColor("RANDOM")
                            .setFooter("Created by Saxquatchx", fot.avatarURL({ dynamic:true }))
                            return message.channel.send(embed);
                        }
                        voiceChannel.join()
                        .then(connection => {
                            console.log(chalk.red("Bot "),chalk.blue(message.guild.name," sunucusunda " ),chalk.green( voiceChannel.name, " kanalına girdi"))
                            const dispatcher = connection.play(
                                path.join(__dirname, 'ordular-ileri-kara-gorundu.mp3')
                            );
                            dispatcher.on('finish', () => {
                                voiceChannel.leave();
                            })
                        })
                        .catch();
                    }

                    //Distube

                    if (message.author.bot) return;
                    if (!message.content.startsWith(prefix)) return;
                    const args = message.content.slice(prefix.length).trim().split(/ +/g);
                    const command = args.shift();
                  
                    if (command == "oynat")
                        distube.play(message, args.join(" "));
                  
                    if (["tekrarla", "döngü"].includes(command))
                        distube.setRepeatMode(message, parseInt(args[0]));
                  
                    if (command == "dur") {
                        distube.stop(message);
                        const embed = new Discord.MessageEmbed()
                        .setDescription("Müzik Durduruldu :white_check_mark:")
                        .setColor("RED")
                        .setFooter("Created by Saxquatchx")
                        .setAuthor(message.author.tag, message.author.avatarURL())
                        message.channel.send({embed:embed});
                    }
                  
                    if (command == "geç")
                        distube.skip(message);
                  
                    if (command == "sıra") {
                        let queue = distube.getQueue(message);
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Şu an ki sıra:")
                        .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
                        .setColor("GREEN")
                        .setFooter("Created by Saxquatchx")
                        .setAuthor(message.author.tag, message.author.avatarURL())
                        message.channel.send(embed);
                    }
                  
                    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
                        let filter = distube.setFilter(message, command);
                        message.channel.send("Uygulanan filtre: " + (filter || "Off"));
                    }
    })
    
    // Queue status template
    const status = (queue) => `Ses: \`${queue.volume}%\` | Filtreler: \`${queue.filter || "Kapalı"}\` | Döngü: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Tüm Sıra" : "Bu Şarkı" : "Kapalı"}\` | Otomatik Oynatma: \`${queue.autoplay ? "Açık" : "Kapalı"}\``;

    // DisTube event listeners, more in the documentation page
    distube
    .on("playSong", (message, queue, song) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Şu anda oynatılıyor:")
    .setDescription(` \`${song.name}\` - \`${song.formattedDuration}\` \nŞunun tarafından istendi: ${song.user}\n${status(queue)}`)
    .setColor("GREEN")
    .setFooter("Created by Saxquatchx")
    .setAuthor(message.author.tag, message.author.avatarURL())
    message.channel.send(embed);
    }
    )

    .on("addSong", (message, queue, song) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(`${song.user} Tarafından Sıraya ${song.name} - \`${song.formattedDuration}\` isimli müzik eklendi :white_check_mark:`)
    .setColor("BLUE")
    .setFooter("Created by Saxquatchx")
    .setAuthor(message.author.tag, message.author.avatarURL())
    message.channel.send(embed);
    })

    .on("playList", (message, queue, playlist, song) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(`Oynatılan playlist \`${playlist.name}\` oynatılan şarkı (${playlist.songs.length}).\nŞu kişi tarafından: ${song.user}\nŞimdi Oynatılıyor \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`)
    .setColor("BLACK")
    .setFooter("Created by Saxquatchx")
    .setAuthor(message.author.tag, message.author.avatarURL())
    message.channel.send(embed);
    })
    .on("addList", (message, queue, playlist) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(`Eklendi \`${playlist.name}\` playlist (${playlist.songs.length} songs) sıraya\n${status(queue)}`)
    .setColor("#25DAC2")
    .setFooter("Created by Saxquatchx")
    .setAuthor(message.author.tag, message.author.avatarURL())
    message.channel.send(embed);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        const embed = new Discord.MessageEmbed()
        .setDescription(`**Bir şarkı seçin**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*60 Saniye içinde girmelisiniz yoksa seçenekler iptal edilecektir*`)
        .setColor("#6B26C3")
        .setFooter("Created by Saxquatchx")
        .setAuthor(message.author.tag, message.author.avatarURL())
        message.channel.send(embed);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => {
    const embed = new Discord.MessageEmbed()
    .setDescription("Arama iptal edildi")
    .setColor("RANDOM")
    .setFooter("Created by Saxquatchx")
    .setAuthor(message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
    })
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
    });
}