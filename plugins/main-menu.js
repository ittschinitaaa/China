let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
    let txt = `
 `.........․⁀⸱⁀⸱︵⸌⸃૰⳹․💥․⳼૰⸂⸍︵⸱⁀⸱⁀․........
𔓕꯭  ꯭ 𓏲꯭֟፝੭ ꯭⌑(꯭𝐄).꯭𝐗.꯭𝐏.꯭𝐋.꯭𝐎.꯭𝐒.꯭𝐈.꯭𝐎.꯭𝐍꯭⌑꯭ 𓏲꯭֟፝੭ ꯭  ꯭𔓕
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭

“ Hola *@${userId.split('@')[0]}* Soy *🄻una 🄱ot 🄱eta*
 Aqui tienes la lista de mis comandos.💗🧸

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🄼🄴🄽🅄-🄱🄾🅃໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇「👑」 *🄲ʀᴇᴀᴅᴏʀ:* Mia
├ׁ̟̇「🌻」 *🄼ᴏᴅᴏ:* Público
├ׁ̟̇「🌻」 *🄻ɪʙʀᴇʀɪᴀ:* Baileys
├ׁ̟̇「🤖」 *🄱ᴏᴛ:*  ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
├ׁ̟̇「⏱️」 *🅃ɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:* ${uptime}
├ׁ̟̇「📝」 *🄲omandos:* ${totalCommands}
├ׁ̟̇「👥」  *🅄sᴜᴀʀɪᴏs:* ${totalreg}
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝


.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍨⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🅄🅂🅄🄰🅁🄸🄾໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍨⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇「👤」 *🄲ʟɪᴇɴᴛᴇ:* @${userId.split('@')[0]}
├ׁ̟̇「🥇」 *🄴xᴘ:* ${user.exp}
├ׁ̟̇「🥈」 *🄽ɪᴠᴇʟ:* ${user.level}
├ׁ̟̇「🥉」 *🅁ᴀɴɢᴏ:* ${user.role}
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ

        *L I S T A  -  D E  -  C O M A N D O S* 

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🄸🄽🄵🄾×🄱🄾🅃 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• *#help • #menu*
├ׁ̟̇• *#uptime • #runtime*
├ׁ̟̇• *#sc • #script*
├ׁ̟̇• *#staff • #colaboradores*
├ׁ̟̇• *#bots • #sockets*
├ׁ̟̇• *#status • #estado*
├ׁ̟̇• *#links • #grupos*
├ׁ̟̇• *#infobot • #infobot*
├ׁ̟̇• *#sug • #newcommand*
├ׁ̟̇• *#p • #ping*
├ׁ̟̇• *#reporte • #reportar*
├ׁ̟̇• *#sistema • #system*
├ׁ̟̇• *#speed • #speedtest*
├ׁ̟̇• *#views • #usuarios*
├ׁ̟̇• *#funciones • #totalfunciones*
├ׁ̟̇• *#ds • #fixmsgespera*
├ׁ̟̇• *#editautoresponder*
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🄱🅄🅂🄲🄰🄳🄾🅁🄴🅂 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• *#tiktoksearch • #tiktoks*
├ׁ̟̇• *#tweetposts*
├ׁ̟̇• *#ytsearch • #yts*
├ׁ̟̇• *#githubsearch*
├ׁ̟̇• *#cuevana • #cuevanasearch*
├ׁ̟̇• *#google*
├ׁ̟̇• *#pin • #pinterest*
├ׁ̟̇• *#imagen • #image*
├ׁ̟̇• *#infoanime*
├ׁ̟̇• *#npmjs*
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🅂🄴🅁🄱🄾🅃 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• *#serbot code* 
├ׁ̟̇• *#code*
├ׁ̟̇• *#qr*
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ ×🅁×🄿×🄶× ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• *#w • #work • #trabajar*
├ׁ̟̇• *#slut • #protituirse*
├ׁ̟̇• *#cf • #suerte*
├ׁ̟̇• *#crime • #crimen*
├ׁ̟̇• *#casino • #apostar*
├ׁ̟̇• *#ruleta • #roulette • #rt*
├ׁ̟̇• *#slot*
├ׁ̟̇• *#cartera • #wallet*
├ׁ̟̇• *#banco • #bank*
├ׁ̟̇• *#deposit • #depositar • #d*
├ׁ̟̇• *#with • #retirar • #withdraw*
├ׁ̟̇• *#transfer • #pay*
├ׁ̟̇• *#miming • #minar • #mine*
├ׁ̟̇• *#buyall • #buy*
├ׁ̟̇• *#daily • #diario*
├ׁ̟̇• *#cofre*
├ׁ̟̇• *#weekly • #semanal*
├ׁ̟̇• *#monthly • #mensual*
├ׁ̟̇• *#steal • #robar • #rob*
├ׁ̟̇• *#robarxp • #robxp*
├ׁ̟̇• *#eboard • #baltop*
├ׁ̟̇• *#aventura • #adventure*
├ׁ̟̇• *#curar • #heal*
├ׁ̟̇• *#cazar • #hunt • #berburu*
├ׁ̟̇• *#inv • #inventario*
├ׁ̟̇• *#mazmorra • #explorar*
├ׁ̟̇• *#halloween*
├ׁ̟̇• *#christmas • #navidad*
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🅁🄴🄶🄸🅂🅃🅁🄾 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• *#reg • #verificar • #register*
├ׁ̟̇• *#unreg*
├ׁ̟̇• *#profile*
├ׁ̟̇• *#marry* [mension / etiquetar]
├ׁ̟̇• *#divorce*
├ׁ̟̇• *#setgenre • #setgenero*
├ׁ̟̇• *#delgenre • #delgenero*
├ׁ̟̇• *#setbirth • #setnacimiento*
├ׁ̟̇• *#delbirth • #delnacimiento*
├ׁ̟̇• *#setdescription • #setdesc*
├ׁ̟̇• *#deldescription • #deldesc*
├ׁ̟̇• *#lb • #lboard* + <Paginá>
├ׁ̟̇• *#level • #lvl* + <@Mencion>
├ׁ̟̇• *#comprarpremium • #premium*
├ׁ̟̇• *#confesiones • #confesar*
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🅂🅃🄸🄲🄺🄴🅁🅂 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• *#sticker • #s*
├ׁ̟̇• *#setmeta*
├ׁ̟̇• *#delmeta*
├ׁ̟̇• *#pfp • #getpic*
├ׁ̟̇• *#qc*
├ׁ̟̇• *#toimg • #img*
├ׁ̟̇• *#brat • #ttp • #attp*︎ 
├ׁ̟̇• *#emojimix*
├ׁ̟̇• *#wm*
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🄶🅁🅄🄿🄾🅂 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• *#hidetag*
├ׁ̟̇• *#gp • #infogrupo*
├ׁ̟̇• *#linea • #listonline*
├ׁ̟̇• *#open*
├ׁ̟̇• *#close*
├ׁ̟̇• *#setwelcome*
├ׁ̟̇• *#setbye*
├ׁ̟̇• *#testwelcome*
├ׁ̟̇• *#testbye*
├ׁ̟̇• *#link*
├ׁ̟̇• *admins • admin*
├ׁ̟̇• *#restablecer • #revoke*
├ׁ̟̇• *#kick* [número / mension]
├ׁ̟̇• *#add • #añadir • #agregar* [número]
├ׁ̟̇• *#promote* [mension / etiquetar]
├ׁ̟̇• *#demote* [mension / etiquetar]
├ׁ̟̇• *#gpbanner • #groupimg*
├ׁ̟̇• *#gpname • #groupname*
├ׁ̟̇• *#gpdesc • #groupdesc*
├ׁ̟̇• *#advertir • #warn • #warning*
├ׁ̟̇• *#unwarn • #delwarn*
├ׁ̟̇• *#advlist • #listadv*
├ׁ̟̇• *#bot on*
├ׁ̟̇• *#bot off*
├ׁ̟̇• *#mute* [mension / etiquetar]
├ׁ̟̇• *#unmute* [mension / etiquetar]
├ׁ̟̇• *#encuesta • #poll*
├ׁ̟̇• *#delete • #del*
├ׁ̟̇• *#fantasmas*
├ׁ̟̇• *#kickfantasma*
├ׁ̟̇• *#invocar • #tagall • #todos*
├ׁ̟̇• *#setemoji • #setemo*
├ׁ̟̇• *#listnum • #kicknum*
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🄾🄽 / 🄾🄵🄵 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• #enable <option>
├ׁ̟̇• #disable <option>
├ׁ̟̇• #on <option>
├ׁ̟̇• #off <option>
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🄳🄴🅂🄲🄰🅁🄶🄰🅂 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├̟̇ ׁ¡𝐀𝐥𝐠𝐮𝐧𝐨𝐬 𝐝𝐞 𝐥𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐟𝐮𝐞𝐫𝐨𝐧 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨𝐬!
├ׁ̟̇• *#tiktok • #tt*
├ׁ̟̇• *#mediafire • #mf*
├ׁ̟̇• *#pinvid • #pinvideo* + [enlacé]
├ׁ̟̇• *#mega • #mg* + [enlacé]
├ׁ̟̇• *#play • #play2*
├ׁ̟̇• *#ytmp3 • #ytmp4*
├ׁ̟̇• *#fb • #facebook*
├ׁ̟̇• *#fb • #facebook*
├ׁ̟̇• *#twitter • #x* + [Link]
├ׁ̟̇• *#ig • #instagram*
├ׁ̟̇• *#tts • #tiktoks* + [busqueda]
├ׁ̟̇• *#terabox • #tb* + [enlace]
├ׁ̟̇• *#ttimg • #ttmp3* + <url>
├ׁ̟̇• *#gitclone* + <url> 
├ׁ̟̇• *#apk • #modapk*
├ׁ̟̇• *#tiktokrandom • #ttrandom*
├ׁ̟̇• *#npmdl • #npmdownloader*
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🄷🄴🅁🅁🄰🄼🄸🄴🄽🅃🄰🅂 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• *#calcular • #calcular • #cal*
├ׁ̟̇• *#tiempo • #clima*
├ׁ̟̇• *#horario*
├ׁ̟̇• *#fake • #fakereply*
├ׁ̟̇• *#enhance • #remini • #hd*
├ׁ̟̇• *#letra*
├ׁ̟̇• *#read • #readviewonce • #ver*
├ׁ̟̇• *#whatmusic • #shazam*
├ׁ̟̇• *#ss • #ssweb*
├ׁ̟̇• *#length • #tamaño*
├ׁ̟̇• *#say • #decir* + [texto]
├ׁ̟̇• *#todoc • #toducument*
├ׁ̟̇• *#translate • #traducir • #trad* 
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🅂🅃🄰🄵🄵 🄻🅄🄽🄰-🄱🄾🅃 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇• #autoadmin
├ׁ̟̇• #banchat
├ׁ̟̇• #banuser <@tag> <razón>
├ׁ̟̇• #grupocrear <nombre>
├ׁ̟̇• #join <link>
├ׁ̟̇• #unbanchat
├ׁ̟̇• #unbanuser <@tag>
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
  `.trim()

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: "192828iqiiw8".id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              sourceUrl: redes,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m })

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
}
