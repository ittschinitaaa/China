let handler = async (m, { conn, command, usedPrefix }) => {
let img = 'https://files.catbox.moe/92p8um.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

ᰔᩚ ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/The-King-Destroy

❒ *Colaboradores:*

ᰔᩚ 𝓔𝓶𝓶𝓪 𝓥𝓲𝓸𝓵𝓮𝓽𝓼 𝓥𝓮𝓻𝓼𝓲ó𝓷 
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/Elpapiema

ᰔᩚ Niño Piña
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/WillZek

✧ ☆꧁༒ĹєǤ𝒆𝐧𝐃༒꧂☆
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/Diomar-s

ᰔᩚ I'm Fz' (Tesis)
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/FzTeis

ᰔᩚ Legna
> 🜸 Rol » *Mini-Dev* 
> ✧ GitHub » https://github.com/Legna-chan
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), m)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
