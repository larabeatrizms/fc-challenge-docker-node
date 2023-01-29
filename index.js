const express = require('express');
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'node',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    connection.query(`select name from people`, (err, result) => {
        if (err) throw err;

        const peopleNames = result.map(people => people.name);
        
        res.send(`
            <h1>Full Cycle Rocks!<h1>
            <p>${peopleNames}</p>`
        )
    });
});

app.listen(port, () => {
    console.log(`server is running at ${port}!`)
})
