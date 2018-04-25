const MongoClient = require('mongodb').MongoClient,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


// Conectarse a Base de Datos
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('');

    // Iniciar servidor
    app.listen(5000);
});


app.get('/productos', (req, res) => {
    db.collection('carros').find().toArray((err, result) => {
            res.render('index', {
                productos: result
            });
        })
});

/*app.get('/carros/:id', (req, res) => {
    db.collection('carros').find({ modelo: req.params.id }).toArray((err, result) => res.send(result))
*/