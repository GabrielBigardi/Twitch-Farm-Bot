const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: false },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.username,
		password: process.env.password
	},
	channels: [ 'fnxlntc',
		'saullo',
		'fkswp',
		'piripakyz',
		'p4ndaotv',
		'stereonline',
		'fittipaldibrothers',
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
		'tutu_dias',
		'fbzfps',
		'nattank'
	]
});
client.connect();

client.on("connecting", (address, port) => {
    console.log(`Tentando se conectar em: ${address}:${port}`);
});

client.on("connected", (address, port) => {
    console.log(`Conectado com sucesso: ${address}:${port}`);
});

client.on("disconnected", (reason) => {
    console.log(`Desconectado. Razão: ${reason}`);
});

client.on("join", (channel, username, self) => {
	if(self){
		console.log(`${username} entrou no canal: ${channel}`);
	}
});

client.on("pong", (latency) => {
    //console.log(`PONG efetuado ! Latência: ${latency}`);
});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!testecomandao') {
		console.log(`Comando recebido em ${channel}`);
	}
});