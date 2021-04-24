const {createPool, mysql}  = require('mysql');

var pool = createPool({
    host     : 'b8tpxkmzeo1jz4ypqogp-mysql.services.clever-cloud.com',
    user     : 'ultbemifiunzlpg8',
    password : 'FCF1Ab4LQ0iuXyoq2Gvl',
    database : 'b8tpxkmzeo1jz4ypqogp',
    debug : false
});

module.exports = pool;