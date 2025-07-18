import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
  const img = 'https://files.catbox.moe/5s540n.jpg' // Cambia por tu imagen personalizada
  const reglas = `
⚠️𝑅𝐸𝑆𝑃𝐸𝑇𝐴 𝐿𝐴𝑆 𝑅𝐸𝐺𝐿𝐴𝑆⚠️
1: ¡𝙽𝙾 𝙻𝙻𝙰𝙼𝙰𝚁 𝙰𝙻 𝙱𝙾𝚃!,
2: ¡𝙽𝙾 𝙷𝙰𝙲𝙴𝚁𝙻𝙴 𝚂𝙿𝙰𝙼 𝙰𝙻 𝙱𝙾𝚃!,
3: ¡𝙽𝙾 𝙰𝙶𝚁𝙴𝙶𝙰𝙴 𝚂𝙸𝙽 𝙿𝙴𝚁𝙼𝙸𝚂𝙾 𝙰 𝙻𝙰 𝙱𝙾𝚃!
4: ¡𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰 𝙰𝙻 𝙾𝚆𝙽𝙴𝚁 𝚂𝙾𝙻𝙾 𝚂𝙸 𝙴𝚂 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃𝙴!,
5: ¡𝙽𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝚂 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃!,
6: ¡𝚁𝙴𝚂𝙿𝙴𝚃𝙰 𝙻𝙾𝚂 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂!,
7: ¡𝚄𝚂𝙰 𝙴𝙻 𝙱𝙾𝚃 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙰𝙿𝚁𝙾𝙿𝙸𝙰𝙳𝙰!,
8: ¡𝙽𝙾 𝙸𝙽𝚂𝚄𝙻𝚃𝙰𝚁 𝙰𝙻 𝙱𝙾𝚃!

📔𝗶𝗻𝗳𝗼 : 𝚂𝙸 𝚂𝙴 𝚀𝚄𝙴𝙱𝚁𝙰𝙽𝚃𝙰 𝙰𝙻𝙶𝚄𝙽𝙰 𝙳𝙴 𝙻𝙰𝚂 𝚁𝙴𝙶𝙻𝙰𝚂,
𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝚈 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃.

📝𝗡𝗼𝘁𝗮: "𝙻𝙰 𝙱𝙾𝚃 𝙴𝚂𝙰 𝙴𝙽 𝙵𝙰𝚂𝙴 𝙳𝙴 𝙿𝚁𝚄𝙴𝙱𝙰*
> sɪ ᴛᴇ ɢᴜsᴛᴏ ᴇʟ ʙᴏᴛ ᴅᴇᴊᴀ ᴜɴᴀ ⭐ ᴇɴ ᴇʟ ʀᴇᴘᴏsɪᴛᴏʀɪᴏ ᴅᴇ ɢɪᴛʜᴜʙ. 
`
  await conn.sendMessage(m.chat, {
    image: { url: img },
    caption: reglas,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.help = ['botreglas']
handler.tags = ['info']
handler.command = ['botreglas', 'reglasbot']

export default handler
