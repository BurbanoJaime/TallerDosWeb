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
MongoClient.connect('mongodb+srv://cluster0-8rmnt.mongodb.net/tienda', {
    auth: {
        user: 'jaimeBurbano',
        password: 'ContraseñaSuperSegura123'
    }
}, function (err, client) {
    if (err) throw err;

    db = client.db('tienda');

    // Iniciar servidor
    app.listen(process.env.PORT ||5000);
});

// Dirección del index
app.get('/', (req, res) => {
    res.render('index');
});

// Dirección de visualización de productos de Alquiler de Vehículos
app.get('/transporte/Alquiler_Vehiculos', (req, res) => {

    var carrosCollection = db.collection('carros').find();

    //Filtro por precio
    if (req.query.min && req.query.max)
        carrosCollection.filter({
            precio: {
                $gte: parseInt(req.query.min),
                $lte: parseInt(req.query.max)

            }
        });


    //Filtro de color
    if (req.query.color)
        carrosCollection.filter({
            color: req.query.color
        });


    carrosCollection.toArray((err, result) => {

        res.render('transporte_Carros', {
            carros: result
        });
    })
});

//Dirección de visualización de cada producto
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



// Dirección de visualización de checkout
app.get('/checkout', (req, res) => {
    res.render('checkout');
});


//Carrito
app.get('/productosPorIds', (req, res) => {
    var arreglo = req.query.id.split(',');
    arreglo = arreglo.map(function (id) {
        return new ObjectID(id);
    });
    var prod = db.collection('carros')
        .find({
            _id: {
                $in: arreglo
            }
        })
        .toArray((err, result) => {
            res.send(result);
        });
});


app.get("/error", (req, res) => {
    res.render('error');
});