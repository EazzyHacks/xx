let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;@evolution.hack 👑;\nFN:@evolution.hack 👑\nORG:@evolution.hack 👑\nTITLE:\nitem1.TEL;waid=519369941:51936994155\nitem1.X-ABLabel:@evolution.hack 👑\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:@evolution.hack 👑\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'お@evolution.hack ⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
