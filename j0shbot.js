'use strict';

var _debugDude = require('debug-dude');

var _debugDude2 = _interopRequireDefault(_debugDude);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _coffea = require('coffea');

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var networks = (0, _coffea.connect)(_config2.default);

var _dude = (0, _debugDude2.default)('bot'),
    log = _dude.log,
    info = _dude.info;

info('JoshBot v' + _package.version + ' starting');

networks.on('command', function (evt, reply) {
    console.log('Received command event: %o', evt);
    switch (evt.cmd) {
        case 'maxi':
            var maxi = Math.floor(Math.random() * 20 + 1);
            reply({
                type: 'action',
                action: 'upload_photo'
            });
            reply({
                type: 'photo',
                data: _fs2.default.createReadStream(_path2.default.join(__dirname, '/../img/maxi/' + maxi + '.jpg')),
                options: {
                    caption: 'Meow!  😻',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'snowball':
            var snowball = Math.floor(Math.random() * 10 + 1);
            reply({
                type: 'action',
                action: 'upload_photo'
            });
            reply({
                type: 'photo',
                data: _fs2.default.createReadStream(_path2.default.join(__dirname, '/../img/snowball/' + snowball + '.jpg')),
                options: {
                    caption: 'Meow! 😻',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'latency':
            {
                reply({
                    type: 'message',
                    text: (Date.now() / 1000 - evt.raw.date).toFixed(3) + ' seconds.',
                    options: {
                        reply_to_message_id: evt.raw.message_id
                    }
                });
            }
            break;
        case 'drachenlord':
            var drache = Math.floor(Math.random() * 106 + 1);
            reply({ type: 'action', action: 'record_audio' });
            reply({
                type: 'voice',
                data: _fs2.default.createReadStream(_path2.default.join(__dirname, '/../voice/Dragenlord/' + drache + '.mp3')),
                options: {
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;

        case 'help':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/help.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.message_id
                }
            });
            break;
            
        case 'nogf':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/nogf.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
            
        case 'gf':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/gf.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
            
        case 'oshit':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/oshit.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
            
        case 'prank':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/prank.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
            
        case 'lustig':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/lustig.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
            
        case 'kranplatz':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/kranplatz.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
            
        case 'nudel':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/nudel.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
            
        case 'ey':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/ey.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
            
        case 'schokodrink':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/schokodrink.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
            
        case 'ruediger':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/ruediger.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            
            break;
        case 'junge':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/junge.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'gilbert':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/gilbert.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'windows':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/windows.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'ok':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/ok.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'pizza':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/pizza.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'sehrgut':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/sehrgut.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'maimai':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/maimai.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'snapchat':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/snapchat.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'weeb':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/weeb.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'kantig':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/kantig.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;
        case 'paket':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/paket.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
            break;

        case 'bibi':
            var bibi = Math.floor(Math.random() * 18837 + 1);
            reply({
                type: 'action',
                action: 'upload_photo'
            });
            reply({
                type: 'message',
                text: '<a href="https://t.me/bibisbeautypalace69/' + bibi + '">Much Shibe :3</a>',
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.message_id
                }
            });
            break;
        case 'gif':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/gif.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.message_id
                }
            });
            break;
        case 'diepartei':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/diepartei.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.message_id
                }
            });
            break;
        case 'hipster':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/hipster.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.message_id
                }
            });
            break;

        case 'nsfw':
        case 'nsfl':
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '/text/nsfw.md')),
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.message_id
                }
            });
            break;
        case 'shibe':
            var shibe = Math.floor(Math.random() * 1201 + 1);
            reply({
                type: 'action',
                action: 'typing'
            });
            reply({
                type: 'message',
                text: '<a href="https://t.me/muchshibe/' + shibe + '">Much Shibe :3</a>',
                options: {
                    parse_mode: 'html',
                    reply_to_message_id: evt && evt.raw && evt.raw.message_id
                }
            });
    }
});

networks.on('new_chat_participant', function (evt, reply) {
    console.log('Received message event: %o', evt);
    var chatid = evt && evt.chat;
    if (chatid == -1001064544612) {
        //englishfilter xd 
        reply({
            type: 'message',
            text: '<b>sup bro \u270C\uD83C\uDFFC</b>',
            options: {
                parse_mode: 'html',
                reply_to_message_id: evt && evt.raw && evt.raw.message_id
            }
        });
    } else if (chatid == -1001066517264) {} else {
        reply({
            type: 'message',
            text: '<b>was geht brudi \u270C\uD83C\uDFFC</b>',
            options: {
                parse_mode: 'html',
                reply_to_message_id: evt && evt.raw && evt.raw.message_id
            }
        });
    }
});

networks.on('left_chat_participant', function (evt, reply) {
    console.log('Received message event: %o', evt);
    var chatid = evt && evt.chat;
    if (chatid == -1001064544612) {//englishfilter xd 
    } else {
        reply({
            type: 'message',
            text: '<b>hau rein brudi \uD83D\uDCAA\uD83C\uDFFC</b>',
            options: {
                parse_mode: 'html',
                reply_to_message_id: evt && evt.raw && evt.raw.message_id
            }
        });
    }
});

//voice hashtags soon using fileid xd
networks.on('message', function (evt, reply) {
    var hashtags = evt.text.match(/#([a-zA-Z]+)/);
    if (hashtags && hashtags.length > 1) {
        var voicePath = _path2.default.join(__dirname, '/../voice/' + hashtags[1] + '.mp3');
        if (_fs2.default.existsSync(voicePath)) {
            reply({
                type: 'action',
                action: 'record_audio'
            });
            reply({
                type: 'voice',
                data: _fs2.default.createReadStream(voicePath),
                options: {
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
        }
    }
});

//video hashtags soon using fileid xd
networks.on('message', function (evt, reply) {
    var video = evt.text.match(/#([a-zA-Z]+)/);
    if (video && video.length > 1) {
        var videoPath = _path2.default.join(__dirname, '/../video/' + video[1] + '.mp4');
        if (_fs2.default.existsSync(videoPath)) {
            reply({
                type: 'action',
                action: 'record_video'
            });
            reply({
                type: 'video',
                data: _fs2.default.createReadStream(videoPath),
                options: {
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
        }
    }
});

//img hashtags soon using fileid xd
networks.on('message', function (evt, reply) {
    var img = evt.text.match(/#([a-zA-Z]+)/);
    if (img && img.length > 1) {
        var photoPath = _path2.default.join(__dirname, '/../img/etc/' + img[1] + '.jpg');
        if (_fs2.default.existsSync(photoPath)) {
            reply({
                type: 'action',
                action: 'upload_photo'
            });
            reply({
                type: 'photo',
                data: _fs2.default.createReadStream(photoPath),
                options: {
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
        }
    }
});

//sticker hashtags soon using fileid xd
networks.on('message', function (evt, reply) {
    var sticker = evt.text.match(/#([a-zA-Z]+)/);
    if (sticker && sticker.length > 1) {
        var stickerPath = _path2.default.join(__dirname, '/../sticker/' + sticker[1] + '.webp');
        if (_fs2.default.existsSync(stickerPath)) {
            reply({
                type: 'sticker',
                data: _fs2.default.createReadStream(stickerPath),
                options: {
                    reply_to_message_id: evt && evt.raw && evt.raw.reply_to_message && evt.raw.reply_to_message.message_id
                }
            });
        }
    }
});
