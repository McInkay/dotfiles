#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const file = path.join(__dirname, '..', '..', 'textcomplete', 'chrome');
const dir = path.join(os.homedir(), '.texpander');

fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  const expansions = JSON.parse(data);

	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}

  // Create files in ~/.texpander/trigger with content as the expansion
  Object.keys(expansions).forEach((key) => {
		const newFile = path.join(dir, key.substring(1));
		fs.writeFile(newFile, expansions[key], function (err) {
			if (err) return console.log(err);
		});
	});
});
