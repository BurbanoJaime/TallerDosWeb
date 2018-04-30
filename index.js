const MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID,
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

    db = client.db('TallerDos');

    // Iniciar servidor
    app.listen(5000);
});


// Dirección del index
app.get('/index', (req, res) => {
    res.render('index');
});


// Dirección de visualización de productos de Alquiler de Vehículos
app.get('/transporte/Alquiler_Vehiculos', (req, res) => {

    var carroCollection = db.collection('carros').find();

    carroCollection.toArray((err, result) => {

        res.render('transporte_Carros', {
            carros: result
        });
    })
});

//Dirección de visualización de cada producto en forma detallada
/*app.get('/transporte/Alquiler_Vehiculos/+_id', (req, res) => {
    db.collection('carros').find({ id: req.params.id }).toArray((err, result) => res.render( 'det_prod', {
        id:result
    }))
})*/

app.get('/prod', (req, res) => {
    res.render('det_prod');
});