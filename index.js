const Canvas = require('canvas');
const chalk = require('chalk');
const Discord = require('discord.js');
const DisTube = require('distube');
const randomPuppy = require('random-puppy');
const request = require('request');
const { JsonDatabase } = require('wio.db');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');
const got = require('got');
const express = require('express');
const http = require('http');
const YouTubeNotifier = require('youtube-notification');
const rss = require('rss-converter');

const client = new Discord.Client();
const db = new JsonDatabase('fazlalıklar/database.json');
const edb = new JsonDatabase('fazlalıklar/emoji-database.json');
const kdb = new JsonDatabase('fazlalıklar/küfür-database.json');
const rdb = new JsonDatabase('fazlalıklar/reklam-database.json');
const ktdb = new JsonDatabase('fazlalıklar/komutdatabase.json');
const ldb = new JsonDatabase('fazlalıklar/links.json');
const ardb = new JsonDatabase('fazlalıklar/atananrol-database.json')
const {prefix, sahip, token } = require('./fazlalıklar/ayarlar.json');
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
const fot = client.users.cache.get('796305982665916436');
const app = express();
const port = process.env.PORT || 3000;

const events = require('./fazlalıklar/events')(Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, edb, rdb, kdb, ktdb, ardb, prefix, sahip, token, distube, path, fot, got);
const müzik = require('./Sesler/müzik')(Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, ardb, prefix, sahip, token, distube, path, fot, got);
const commands = require("./fazlalıklar/commands")(Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, edb, rdb, kdb, ktdb, ardb, prefix, sahip, token, distube, path, fot, got);
const yt_notification = require('./fazlalıklar/yt-notifications')(Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, distube, path, got, express, http, YouTubeNotifier, rss, client, db, ldb, prefix, sahip, token, fot);
const website = require('./web site/backend')

client.login(token)