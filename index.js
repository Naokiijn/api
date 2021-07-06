const registerFont = require('canvas')
const express = require('express')
const createCanvas = require('canvas')
const app = express()
const path = require("path")
const Redis = require('ioredis')
const redis = new Redis(6379,"127.0.0.1")
const { Canvas } = require('canvas-constructor')
const canvas = require('canvas')
const canvacord = require('canvacord')
const cheerio = require('cheerio')
const tabletojson = require('tabletojson').Tabletojson
const fetch = require('node-fetch')
const fs = require('fs-extra')


app.get('/api/textpro/google/:feed', async (req, res) => {

    const img = await canvas.loadImage('https://s2.glbimg.com/8j1g7t6N1MyBEY-qbEOy3T4nxUc=/850x446/s2.glbimg.com/60nC8Sy_jjyu1TSWu_ktZ5QuXtw=/0x0:778x363/695x324/s.glbimg.com/po/tt2/f/original/2014/05/27/screen_shot_2014-05-27_at_6.18.06_pm.png')
  
    let image = new Canvas(550, 267)
    .printImage(img, 0, 0, 550, 235)
    .setTextFont('18px Roboto')
    .printText(req.params.feed, 45, 157)
    .toBuffer();

    res.set({'Content-Type': 'image/png'}) //configurando a imagem para saida png
    res.send(image) //enviando a imagem

})

app.get('/api/textpro/yt/:feed', async (req, res) => {

    const img = await canvas.loadImage('https://miro.medium.com/max/3840/1*x0fTn02beb561leud9Wz0g.png')
  
    let image = new Canvas(550, 267)
    .printImage(img, 0, 0, 550, 235)
    .setTextFont('18px arial')
    .printText(req.params.feed, 112, 178)
    .toBuffer();

    res.set({'Content-Type': 'image/png'}) //configurando a imagem para saida png
    res.send(image) //enviando a imagem

})


app.listen(8080) //abrindo o server na porta 8080
