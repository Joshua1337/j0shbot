import dude from 'debug-dude'
import config from '../config.json'
import fs from 'fs'
import path from 'path'
import http from 'http'
import request from 'request'
import { connect, message } from 'coffea'
import { version } from '../package.json'

const networks = connect(config)
const { log, info } = dude('bot')

info(`JoshBot v${version} starting`)

networks.on('command', (evt, reply) => {
  console.log('Received command event: %o', evt)
  switch (evt.cmd) {
  case 'maxi':
	let maxi = Math.floor((Math.random() * 20) + 1)
	reply({ type: 'action', action: 'upload_photo' })
     	 reply({
	        type: 'photo',
          data: fs.createReadStream(path.join(__dirname, `/../pic/maxi/${maxi}.jpg`)),
	         options: {
		           caption: 'Meow! 😻',
               reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
       	     }
        })
  break
  case 'snowball':
	let snowball = Math.floor((Math.random() * 10) + 1)
	reply({ type: 'action', action: 'upload_photo' })
      reply({
      	 type: 'photo',
      	 data: fs.createReadStream(path.join(__dirname, `/../pic/snowball/${snowball}.jpg`)),
	        options: {
		          caption: 'Meow! 😻',
              reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
            }
      })
  case 'drachenlord':
	let drache = Math.floor((Math.random() * 106) + 1)
	reply({ type: 'action', action: 'record_audio' })
     	 reply({
      	 type: 'voice',
      	 data: fs.createReadStream(path.join(__dirname, `/../voice/Dragenlord/${drache}.mp3`)),
	        options: {
		          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
          }
      })
  break

case 'latency': {                                                     
  reply({
    type: 'message',
    text: `${(Date.now() / 1000 - evt.raw.date).toFixed(3)} seconds.`,
    options: {                                                        
      reply_to_message_id: evt.raw.message_id,
    }
  })                                                                  
                                                                      
  break
}
  case 'help':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/help.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.message_id
        }
      })
  break
  case 'nogf':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/nogf.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'gf':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/gf.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'oshit':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/oshit.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'prank':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/prank.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'lustig':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/lustig.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'kranplatz':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/kranplatz.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'nudel':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/nudel.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'ey':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/ey.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'schokodrink':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/schokodrink.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'ruediger':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/ruediger.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'windows':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/windows.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'ok':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/ok.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
	case 'pizza':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/pizza.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
	case 'sehrgut':
  reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/sehrgut.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
	case 'maimai':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/maimai.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
	case 'snapchat':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/snapchat.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
	case 'weeb':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/weeb.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
	case 'kantig':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/kantig.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
  case 'paket':
    reply({ type: 'action', action: 'typing' })
    reply({
      type: 'message',
      text: fs.readFileSync(path.join(__dirname, '..', '/text/paket.md')),
      options: {
          parse_mode: 'html',
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
  break
    case 'shibe':
  let shibe = Math.floor((Math.random() * 456) + 1)
	reply({ type: 'action', action: 'typing' })
  reply({
  type: 'message',
  text: `<a href="https://t.me/muchshibe/${shibe}">Shibe :3</a>`,
  options: {
    parse_mode: 'html',
    reply_to_message_id: evt && evt.raw && evt.raw.message_id
  }
  })
  }
})

networks.on('new_chat_participant', (evt, reply) => {
	console.log('Received message event: %o', evt)
	let chatid = evt && evt.chat
	if (chatid == -1001066517264) { //loungefilter
	 } else {
    reply({
    type: 'message',
    text: `<b>was geht brudi ✌🏼</b>`,
    options: {
      parse_mode: 'html',
      reply_to_message_id: evt && evt.raw && evt.raw.message_id
    }
  })
}})

networks.on('left_chat_participant', (evt, reply) => {
  console.log('Received message event: %o', evt)
    reply({
    type: 'message',
    text: `<b>hau rein brudi 💪🏼</b>`,
    options: {
      parse_mode: 'html',
      reply_to_message_id: evt && evt.raw && evt.raw.message_id
    }
  })
})

//voice hashtags
networks.on('message', (evt, reply) => {
  let hashtags = evt.text.match(/#([a-zA-Z]+)/)
  if (hashtags && hashtags.length > 1) {
    let voicePath = path.join(__dirname, `/../voice/${hashtags[1]}.mp3`)
    if (fs.existsSync(voicePath)) {
     reply({ type: 'action', action: 'record_audio' })
      reply({
        type: 'voice',
        data: fs.createReadStream(voicePath),
        options: {
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
    }
  }
})

//video hashtags
networks.on('message', (evt, reply) => {
  let video = evt.text.match(/#([a-zA-Z]+)/)
  if (video && video.length > 1) {
    let videoPath = path.join(__dirname, `/../video/${video[1]}.mp4`)
    if (fs.existsSync(videoPath)) {
     reply({ type: 'action', action: 'record_video' })
      reply({
        type: 'video',
        data: fs.createReadStream(videoPath),
        options: {
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
    }
  }
})

//img hashtags
networks.on('message', (evt, reply) => {
  let img = evt.text.match(/#([a-zA-Z]+)/)
  if (img && img.length > 1) {
    let photoPath = path.join(__dirname, `/../img/etc/${img[1]}.jpg`)
    if (fs.existsSync(photoPath)) {
     reply({ type: 'action', action: 'upload_photo' })
      reply({
        type: 'photo',
        data: fs.createReadStream(photoPath),
        options: {
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
    }
  }
})

//sticker hashtags soon with fileid
networks.on('message', (evt, reply) => {
  let sticker = evt.text.match(/#([a-zA-Z]+)/)
  if (sticker && sticker.length > 1) {
    let stickerPath = path.join(__dirname, `/../sticker/${sticker[1]}.webp`)
    if (fs.existsSync(stickerPath)) {
      reply({
        type: 'sticker',
        data: fs.createReadStream(stickerPath),
        options: {
          reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
        }
      })
    }
  }
})


//spotify_uri thanks to @michealharker https://github.com/6697/6697-bot
networks.on('message', (evt, reply) => {
    console.log('Received message event: %o', evt)
    let chatid = evt && evt.chat
	if (chatid == -1001066517264) {
	 } else {
	if (/spotify:track:([A-z0-9]+)/.test(evt.text)) {
    let matches = evt.text.match(/spotify:track:([A-z0-9]+)/)
    let id = matches[1]
    request(`https://api.spotify.com/v1/tracks/${id}`, function (err, res, body) {
      if (!err && res.statusCode === 200) {
        let data = JSON.parse(body);
        let title = data && data.name;
        let spotify_url = data && data.album && data.album.external_urls[0] && data.album.external_urls[0].spotify
        let artists = data && data.album && data.album.artists && data.album.artists.map(artist => artist.name).join(', ')
        let album = data && data.album && data.album.name
        let image_url = data && data.album.images && data.album.images[0] && data.album.images[0].url
        let minutes = Math.floor(data && data.duration_ms / 60000)
        let seconds = ((data && data.duration_ms % 60000) / 1000).toFixed(0)
        reply({
          type: 'message',
          text: `*${title}* (${minutes}:${seconds < 10 ? '0' : ''}${seconds}) by *${artists}* - in album *${album}*.[​](${image_url})`,
          options: {
            parse_mode: 'markdown',
            reply_to_message_id: evt && evt.raw && evt.raw.message_id
          }
        })
      }
    })
  }
}})
