var path = require('path');
var BrigModule = require('brig-module');

var brigModule = new BrigModule();

brigModule.addImportPath(path.join(__dirname, 'imports'));
brigModule.addType(require('./types/RandomString'));

module.exports = brigModule;
