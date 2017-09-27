#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');
const notify = require('notify-send');

const args = require('minimist')(process.argv.slice(2));
const dir = path.join(process.env.HOME, args.d);


console.dir(args);

console.log(`Setting up watch on ${dir}`);
fs.watch(dir, function(evt, name) {
	if (evt === 'rename') {
		const filePath = path.join(dir, name);
		fs.access(filePath, fs.constants.R_OK, (err) => {
			if (err) {
				return;
			}
			var form = new FormData();
			form.append('apikey', args.a);
			form.append('file', fs.createReadStream(filePath));
			fetch('https://files.yamanickill.com/api/upload', { method: 'POST', body: form })
				.then(function(res) {
					return res.json();
				}).then(function (json) {
					notify.notify(json.message, json.url);
				}).catch(function(error) {
					console.log(error);
					notify.notify('Failed upload', error);
				});
		});
	}
});