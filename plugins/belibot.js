let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *2 minggu* :      *Rp 5000*
╠➥ *1 Bulan* :      *Rp 5000*
╠➥ *Permanen* : *Rp 10000*
╠➥ *Owner* :   *Rp 15000*/bln
╠➥ *Sc Bot* : 
║https://github.com/Drz103/RadBot
╠═〘 PEMBAYARAN 〙 ═
╠➥ Dana Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 MIKU BOT〙 ═`.trim(), watermark, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler
