var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'orbitz',
        server: '210.18.177.213', 
        database: 'Leadmanagement'
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
    });

    module.exports = sql;