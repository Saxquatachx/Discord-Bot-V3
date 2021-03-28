const Canvas = require('canvas');
const chalk = require('chalk');
const Discord = require('discord.js');
const DisTube = require('distube');
const randomPuppy = require('random-puppy');
const request = require('request');
const { Database } = require('wio.db');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');
const got = require('got');
const express = require('express');

const client = new Discord.Client();
const db = new Database('./fazlalıklar/database.json');
const {prefix, sahip, token } = require('../fazlalıklar/ayarlar.json');
const { head } = require('request');
const { title } = require('process');
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
const fot = client.users.cache.get('743579595860607086');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    let ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    if (ip.length < 7) return console.log(chalk.red("İstek İp Adresi: "+ip));
    if (ip.length > 7) {
        ip = ip.slice(7);
        console.log(chalk.red("İstek İp Adresi: "+ip));
    }
})

const server = app.listen(8080, 'https://discordbotumicin.herokuapp.com')