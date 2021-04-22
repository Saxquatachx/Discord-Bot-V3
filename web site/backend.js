const Canvas = require('canvas');
const chalk = require('chalk');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const request = require('request');
const { JsonDatabase } = require('wio.db');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');
const got = require('got');
const express = require('express');

const client = new Discord.Client();
const db = new JsonDatabase('./fazlalıklar/database.json');
const {prefix, sahip, token } = require('../fazlalıklar/ayarlar.json');
const { head } = require('request');
const { title } = require('process');
const fot = client.users.cache.get('743579595860607086');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.use(express.static(path.join(__dirname, '../web site')));

app.listen(port,() => {
    console.log(chalk.hex("#1DE5EC  ")(`Panel ${port}. port üzerinde yayınlanmakta !`));
})