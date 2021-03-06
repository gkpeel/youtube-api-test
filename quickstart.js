var fs = require('fs');
var readline = require('readline');
var { google } = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'youtube-nodejs-quickstart.json';

fs.readFile('client_secret.json', function processClientSecrets(err, content) {
	if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	}
	authorize(JSON.parse(content), getChannel);
});

function authorize(credentials, callback) {
	var clientSecret = credentials.installed.client_secret;
	var clientID = credentials.installed.client_id;
	var redirectUrl = credentials.installed.redirect_uris[0];
	var oauth2Client = new OAuth2(clientID, clientSecret, redirectUrl);

	fs.readFile(TOKEN_PATH, function (err, content) {
		if (err) {
			getNewToken(oauth2Client, callback);
		} else {
			oauth2Client.credentials = JSON.parse(token);
			callback(oauth2Client);
		}
	});
}

function getNewToken(oauth2Client, callback) {
	var authUrl = oauth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES,
	});
	console.log('Authorize this app by visiting this url: ' + authUrl);
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	rl.question('Enter the code from that page here: ', function (code) {
		rl.close();
		oauth2Client.getToken(code, function (err, token) {
			if (err) {
				console.log('Error while trying to retrieve access token: ', err);
			}
			oauth2Client.credentials = token;
			storeToken(token);
			callback(oauth2Client);
		});
	});
}

function storeToken(token) {
	try {
		fs.mkdirSync(TOKEN_DIR);
	} catch (err) {
		if (err.code != 'EEXIST') {
			throw err;
		}
	}
	fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
		if (err) throw err;
		console.log('Token stored to' + TOKEN_PATH);
	});
}

function getChannel(auth) {
	var service = google.youtube('v3');
	service.channels.list(
		{
			auth: auth,
			part: 'snippet,contentDetails,statistics',
			forUsername: 'GoogleDevelopers',
		},
		function (err, response) {
			if (err) {
				console.log('The API returned an error: ' + err);
				return;
			}
			var channels = response.data.items;
			if (channels.length === 0) {
				console.log('No channel found');
			} else {
				console.log("This channel's ID is %s. Its title is '%s'. And it has %s views.", channels[0].id, channels[0].snippet.title, channels[0].statistics.viewCount);
			}
		}
	);
}
