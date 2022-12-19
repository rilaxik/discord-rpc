const _rpc = require('discord-rpc')
const rpc = new _rpc.Client({
    transport: 'ipc'
})

rpc.on('ready', () => {
    rpc.setActivity({
        largeImageKey: 'sankarea-smile',
        largeImageText: ':)',
        details: 'unexpressable violence inside-',
    })
})

rpc.login({
    clientId: '926589274969755669'
})

console.log('rpc activated <3')