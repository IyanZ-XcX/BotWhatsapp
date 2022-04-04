let handler = async m => m.reply(`
◇ *⚠GRUP BOT⚠*


《 officiall Group *${conn.getName(conn.user.jid)}* 》 :
${(global.linkGC).map((v, i) => '➥ *Group ' + (i + 1) + '*\n' + v).join`\n \n`}

*《 DIAHARAPKAN UNTUK MEMATUHI PERATURAN GRUP ITU 》*
`.trim())
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
