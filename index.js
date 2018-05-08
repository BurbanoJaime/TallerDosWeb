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


app.get('/transporte/Alquiler_Vehiculos/:id', (req, res) => {


    var prod = db.collection('carros')
        .find({
            _id: new ObjectID(req.params.id)
        })
        .toArray((err, result) => {
           // console.log(result[0]);
            res.render('det_prod', {
                carro: result[0]

            });
        });

});


/* FILTROS */
// Filtro de precio
app.get('/transporte/Alquiler_Vehiculos', (req, res) => {
    /*db.collection('productos')
        .find()
        .toArray((err, result) => {
            res.render('index', {
                productos: result
            });
        })*/

    var prod = db.collection('carros')
        .find();
    
    if(req.query.precio)
        prod.filter({ precio: req.query.precio });

   /* if(req.query.modelo)
        prod.filter({ modelo: req.query.modelo });*/

    prod.toArray((err, result) => {
            console.log('hola servidor')
            res.render('det_prod', {
                productos: result
            });
        })
});