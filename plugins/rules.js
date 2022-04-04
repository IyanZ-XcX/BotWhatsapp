let fetch = require('node-fetch')
let rb = global.rules
let handler = async (m, { conn }) => await conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'RULES')).buffer(), `
${rb}
`.trim(), 'Harap patuhin peraturan tersebut', 'DONASI', '.donasi', 'OWNER', '.owner', m)

handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(rules|peraturan)$/i

module.exports = handler
