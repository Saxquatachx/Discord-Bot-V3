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
const db = new Database('fazlalıklar/database.json');
const {prefix, sahip, token } = require('./fazlalıklar/ayarlar.json');
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
const fot = client.users.cache.get('743579595860607086');

const events = require('./fazlalıklar/events')(Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, prefix, sahip, token, distube, path, fot, got);
const müzik = require('./Sesler/müzik')(Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, prefix, sahip, token, distube, path, fot, got);
const commands = require("./fazlalıklar/commands")(Canvas, chalk, Discord, randomPuppy, request, ytdl, fs, client, db, prefix, sahip, token, distube, path, fot, got);

client.login(token)