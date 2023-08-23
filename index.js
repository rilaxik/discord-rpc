const _rpc = require('discord-rpc');
const rpc = new _rpc.Client({transport: 'ipc'});

// responses
const responseActivity = `>>> activity details set successfully \n>>> enjoy <3`;
const responseLogin = '>>> successful login';
const responseError = '>>> something went wrong, please check your CONFIG.json';

// get valid fields from config.json
let config = {};
const data = {
    clientId,
    details,
    state,
    startTimestamp,
    largeImageKey,
    largeImageText,
    smallImageKey,
    smallImageText
} = require('./CONFIG.json')["rpc"];

// logic
_rpc.register(clientId);

rpc.on('ready', async () => {
    await rpc.setActivity(
        activityConfigFields() // pass valid fields
    ).then(() =>
        console.log(responseActivity)
    );
});

try {
    rpc.login({clientId});
    console.log(responseLogin);
} catch (e) {
    console.error(e);
    console.log(responseError);
}
// logic end

function activityConfigFields() {
    for (let i in data) {
        if (data[i] && i !== 'clientId' && i !== 'startTimestamp') {
            config[i] = data[i];
        } else if (i === 'startTimestamp') {
            i ? config[i] = Date.now() : null;
        }
    }
    return config;
}
