var pathToFfmpeg = require('ffmpeg-static');
module.exports = (Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, ardb, prefix, sahip, token, distube, path, got) => {
    client.on('message', async (message) => {
        const fot = client.users.cache.get('796305982665916436');
        if (message.channel.type !== "text") return;

        //Sesli Komutlar
        if (message.content.toLowerCase() === "sesliden çık") {
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription("Bir Sesli Kanalda Değilsin")
                    .setColor("RANDOM")
                    .setFooter(`Created by Saxquatchx |`, fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.leave();
        }

        //Abdülhamit
        if (message.content.toLowerCase() === 'sen abdülhamidi savundun') {
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
            if (!voiceChannel) {
                const embed = new Discord.MessageEmbed()
                    .setDescription('Senin Bulunduğun Bir Odada Değilim !')
                    .setColor("RANDOM")
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            voiceChannel.join()
                .then(connection => {
                    console.log(chalk.red("Bot "), chalk.blue(message.guild.name, " sunucusunda "), chalk.green(voiceChannel.name, " kanalına girdi"))
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
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift();

        const müzikkanalvarmı = db.has(`müzikodası-${message.guild.id}`);
        if (müzikkanalvarmı === false) {
            if (!message.content.startsWith(prefix)) return;
            if (command == "oynat") return distube.play(message, args.join(" "));
            if (command == "geç" || command == "skip") return distube.skip(message);
            if (command == "dur") {
                distube.stop(message);
                const embed = new Discord.MessageEmbed()
                    .setDescription("Müzik Durduruldu  <a:yesiltk:749379707556069457>")
                    .setColor("RED")
                    .setAuthor(message.author.username, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send({
                    embed: embed
                });
            }
            if (command == "sıra") {
                let queue = distube.getQueue(message);
                const embed = new Discord.MessageEmbed()
                    .setTitle("Şu an ki sıra:")
                    .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
                    .setColor("GREEN")
                    .setAuthor(message.author.username, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            if (command == "karıştır") {
                distube.shuffle(message);
                const embed = new Discord.MessageEmbed()
                    .setDescription("Sıra karıştırıldı <a:yesiltk:749379707556069457>")
                    .setColor("GREEN")
                    .setAuthor(message.author.username, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            if (command == "döngü") {
                let mode = distube.setRepeatMode(message, parseInt(args[0]));
                mode = mode ? mode == 2 ? "Sıra Döngüde" : "Şarkı Döngüde" : "Kapalı";
                return message.channel.send("Döngü modu değiştirildi `" + mode + "`");
            }
            if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, "flanger", "gate", "haas", "reverse", "surround", "mcompand", "phaser", "tremolo", "earwax"].includes(command)) {
                let filter = distube.setFilter(message, command);
                return message.channel.send("Uygulanan filtre: " + (filter || "Off"));
            }   
        }
        const müzikkanalgetir = db.get(`müzikodası-${message.guild.id}`);
        if (message.channel.id !== müzikkanalgetir) {
            if (!message.content.startsWith(prefix)) return;
            if (command == "oynat") return distube.play(message, args.join(" "));
            if (command == "geç" || command == "skip") return distube.skip(message);
            if (command == "dur") {
                distube.stop(message);
                const embed = new Discord.MessageEmbed()
                    .setDescription("Müzik Durduruldu  <a:yesiltk:749379707556069457>")
                    .setColor("RED")
                    .setAuthor(message.author.username, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send({
                    embed: embed
                });
            }
            if (command == "sıra") {
                let queue = distube.getQueue(message);
                const embed = new Discord.MessageEmbed()
                    .setTitle("Şu an ki sıra:")
                    .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
                    .setColor("GREEN")
                    .setAuthor(message.author.username, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            if (command == "karıştır") {
                distube.shuffle(message);
                const embed = new Discord.MessageEmbed()
                    .setDescription("Sıra karıştırıldı <a:yesiltk:749379707556069457>")
                    .setColor("GREEN")
                    .setAuthor(message.author.username, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            if (command == "döngü") {
                let mode = distube.setRepeatMode(message, parseInt(args[0]));
                mode = mode ? mode == 2 ? "Sıra Döngüde" : "Şarkı Döngüde" : "Kapalı";
                return message.channel.send("Döngü modu değiştirildi `" + mode + "`");
            }
            if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, "flanger", "gate", "haas", "reverse", "surround", "mcompand", "phaser", "tremolo", "earwax"].includes(command)) {
                let filter = distube.setFilter(message, command);
                return message.channel.send("Uygulanan filtre: " + (filter || "Off"));
            }   
        } else {
            if (message.content.toLowerCase() === "geç" || message.content.toLowerCase() === "g" || message.content.toLowerCase() === "s" || message.content.toLowerCase() === "skip") {
                return distube.skip(message);
            }
            else if (message.content.toLowerCase() === "dur" || message.content.toLowerCase() === "stop" || message.content.toLowerCase() === "d" || message.content.toLowerCase() === "st") {
                distube.stop(message);
                const embed = new Discord.MessageEmbed()
                    .setDescription("Müzik Durduruldu  <a:yesiltk:749379707556069457>")
                    .setColor("RED")
                    .setAuthor(message.author.username, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send({
                    embed: embed
                });
            }
            else if (message.content.toLowerCase() === "sıra" || message.content.toLowerCase() === "list") {
                let queue = distube.getQueue(message);
                const embed = new Discord.MessageEmbed()
                    .setTitle("Şu an ki sıra:")
                    .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
                    .setColor("GREEN")
                    .setAuthor(message.author.username, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            else if (message.content.toLowerCase() === "karıştır" || message.content.toLowerCase() === "random") {
                distube.shuffle(message);
                const embed = new Discord.MessageEmbed()
                    .setDescription("Sıra karıştırıldı <a:yesiltk:749379707556069457>")
                    .setColor("GREEN")
                    .setAuthor(message.author.username, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setFooter("Created by Saxquatchx", fot.avatarURL({
                        dynamic: true
                    }))
                return message.channel.send(embed);
            }
            else if (message.content.toLowerCase() === "döngü" || message.content.toLowerCase() === "loop") {
                let mode = distube.setRepeatMode(message, parseInt(args[0]));
                mode = mode ? mode == 2 ? "Sıra Döngüde" : "Şarkı Döngüde" : "Kapalı";
                return message.channel.send("Döngü modu değiştirildi `" + mode + "`");  
            }
            else if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, "flanger", "gate", "haas", "reverse", "surround", "mcompand", "phaser", "tremolo", "earwax"].includes(message.content.toLowerCase())) {
                let filter = distube.setFilter(message, command);
                return message.channel.send("Uygulanan filtre: " + (filter || "Off"));
            }   
            distube.play(message, args.join(" "));
        }
    })

    const status = (queue) => `Ses: \`${queue.volume}%\` | Filtreler: \`${queue.filter || "Kapalı"}\` | Döngü: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Tüm Sıra" : "Bu Şarkı" : "Kapalı"}\` | Otomatik Oynatma: \`${queue.autoplay ? "Açık" : "Kapalı"}\``;

    distube.on("playSong", (message, queue, song) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Şu anda oynatılıyor:")
            .setDescription(` \`${song.name}\` - \`${song.formattedDuration}\` <a:yesiltk:749379707556069457> \nŞunun tarafından istendi: ${song.user}\n${status(queue)}`)
            .setColor("GREEN")
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setFooter("Created by Saxquatchx")
        message.channel.send(embed);
    })
    distube.on("addSong", (message, queue, song) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Sıraya eklendi:")
            .setDescription(` \`${song.name}\` - \`${song.formattedDuration}\` <a:yesiltk:749379707556069457> \nŞunun tarafından istendi: ${message.author}\n${status(queue)}`)
            .setColor("BLUE")
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setFooter("Created by Saxquatchx")
        message.channel.send(embed);
    })
    distube.on("playList", (message, queue, playlist, song) => {
        const embed = new Discord.MessageEmbed()
            .setDescription(`Oynatılan playlist: \`${playlist.name}\` Oynatılan şarkı: \`${song.name} (${playlist.songs.length}).\` \nŞu kişi tarafından: ${song.user}\nŞimdi Oynatılıyor \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`)
            .setColor("BLACK")
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setFooter("Created by Saxquatchx")
        message.channel.send(embed);
    })
    distube.on("addList", (message, queue, playlist) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Sıraya eklendi:")
            .setDescription(` \`${playlist.name}\` - \`${playlist.songs.length}\`  <a:yesiltk:749379707556069457> \nŞunun tarafından istendi: ${message.author}\n${status(queue)}`)
            .setColor("#25DAC2")
            .setAuthor(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
        message.channel.send(embed);
    })
    distube.on("searchResult", (message, result) => {
        let i = 0;
        const embed = new Discord.MessageEmbed()
            .setDescription(`**Bir şarkı seçin**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n**60 Saniye içinde girmelisiniz yoksa seçenekler iptal edilecektir**`)
            .setColor("#6B26C3")
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setFooter("Created by Saxquatchx")
        message.channel.send(embed);
    })
    distube.on("searchCancel", (message) => {
        const embed = new Discord.MessageEmbed()
            .setDescription("Arama iptal edildi <a:krmzitik:749379768520146955>")
            .setColor("RED")
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setFooter("Created by Saxquatchx")
        message.channel.send(embed)
    })
    distube.on("error", (message, e) => {
        console.error(e)
        message.channel.send("<a:unlem:825146178503966770> bir hata meydana geldi: " + e);
    });
}