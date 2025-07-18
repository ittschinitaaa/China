let handler = async (m, { conn }) => {
  const reglas = `
⚠️ 𝑅𝐸𝑆𝑃𝐸𝑇𝐴 𝐿𝐴𝑆 𝑅𝐸𝐺𝐿𝐴𝑆 ⚠️
1: ¡𝙽𝙾 𝙻𝙻𝙰𝙼𝙴𝚂 𝙰𝙻 𝙱𝙾𝚃!
2: ¡𝙽𝙾 𝙷𝙰𝙲𝙴𝚂 𝚂𝙿𝙰𝙼 𝙰𝙻 𝙱𝙾𝚃!
3: ¡𝙽𝙾 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚂𝙸𝙽 𝙿𝙴𝚁𝙼𝙸𝚂𝙾!
4: ¡𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰 𝙰𝙻 𝙾𝚆𝙽𝙴𝚁 𝚂𝙾𝙻𝙾 𝚂𝙸 𝙴𝚂 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃𝙴!
5: ¡𝙽𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝚂 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃!
6: ¡𝚁𝙴𝚂𝙿𝙴𝚃𝙰 𝙻𝙾𝚂 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂!
7: ¡𝚄𝚂𝙰 𝙴𝙻 𝙱𝙾𝚃 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙰𝙿𝚁𝙾𝙿𝙸𝙰𝙳𝙰!
8: ¡𝙽𝙾 𝙸𝙽𝚂𝚄𝙻𝚃𝙴𝚂 𝙰𝙻 𝙱𝙾𝚃!

📔 𝙸𝙽𝙵𝙾: Si quebrantas alguna regla,
𝚙𝚞𝚎𝚍𝚎𝚜 𝚜𝚎𝚛 𝚋𝚕𝚘𝚚𝚞𝚎𝚊𝚍𝚘 𝚘 𝚋𝚊𝚗𝚎𝚊𝚍𝚘.

📝 𝙽𝙾𝚃𝙰: *Bot en fase de prueba*
> Si te gusta el bot, deja una ⭐ en el repositorio de GitHub.
  `.trim()

  await conn.sendMessage(m.chat, {
    text: reglas,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.help = ['botreglas']
handler.tags = ['info']
handler.command = ['botreglas', 'reglasbot']

export default handler
