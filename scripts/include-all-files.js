const fs = require('fs');
const wwwDir = `${__dirname}/../www`;
const configFile = `${wwwDir}/_config.yml`;
fs.writeFileSync(configFile, `include:\n`)
const files = fs.readdirSync(wwwDir);
files.forEach(file => {
  fs.appendFileSync(configFile, `  - "${file}"\n`);
})
