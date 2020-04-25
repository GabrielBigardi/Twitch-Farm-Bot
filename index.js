const tmi = require('tmi.js');
const clientTwitch = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.username
		password: process.env.password
	},
	channels: [ 'fnxlnt',
		'saullo',
		'fkswp',
		'piripakyz',
		'p4ndaotv',
		'stereonline',
		'rubini',
		'mch_agg',
		'surskity',
		'eliastibianodoido',
		'player_dbr',
		'rabiscoart',
		'marcaorx',
		'metyzera',
		'shktt',
		'cogu',
		'murilo_rt',
		'jschritte',
		'tutu_dias'
	]
});
clientTwitch.connect();
clientTwitch.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!testecomandao') {
		clientTwitch.say(channel, `@${tags.username}, salve!`);
	}
});