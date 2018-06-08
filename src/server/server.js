//npm install cors
//npm install mongo
//npm install node
//npm install express
var express = require('express');
var app = express();
app.use(express.static(__dirname));
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ encoded: false, extended: true })
app.use(bodyParser.urlencoded({ extended: true }));
var cors = require('cors')
app.use(cors());
var http = require('http')

const url = 'mongodb://localhost:27017';
const dbName = 'Walley_Tracker';
app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    // res.header("Access-Control-Allow-Methods", "*");
    //Either unComment this above 3 lines or install cors
    next();
});

// ***************************************
// *            GET REQUESTS             *
// ***************************************

app.get('/', function (req, res) {
    res.send("Hello");
})


app.get('/getTransactoinDetails', function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to the database:", err);
        }
        else {
            var db = client.db(dbName);
            db.collection("wallet")
                .find().toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.send(result);
                        console.log(result);

                    }
                });
            client.close();
        }
    });
});


// // ***************************************
// // *            POST REQUESTS            *
// // ***************************************

// app.use(bodyParser.json());
// app.post('/addgstdetailsdata', urlencodedParser, function (req, res) {
//     mongoClient.connect(url, function (err, client) {
//         if (err) {
//             console.log("error connecting to the database" + err);
//         }
//         else {
//             var db = client.db(dbName);
//             var collection = db.collection('gstdetails');
//             collection.insert(req.body, function (result, err) {
//                 if (err) {
//                     res.send(err);
//                 }
//                 else {
//                     res.send("Data Stored Successfully!");
//                 }
//             });
//             client.close();
//         }
//     });
// });



// // *********** END OF POST REQUESTS **************

// // ***************************************
// // *            DELETE REQUESTS          *
// // ***************************************

// app.use(bodyParser.json());
// app.delete('/delgstdetailsdata/:id', function (req, res) {
//     mongoClient.connect(url, function (err, client) {
//         if (err) {
//             console.log("error connecting to the database" + err);
//         }
//         else {
//             var db = client.db(dbName);
//             var collection = db.collection('gstdetails');
//             collection.deleteOne({ _id: new mongodb.ObjectID(req.params.id) }, function (result, err) {
//                 if (err) {
//                     res.send(err);
//                 }
//                 else {
//                     res.send("Data Removed Successfully!");

//                 }
//             });
//             client.close();
//         }
//     });
// });

// // *********** END OF DELETE REQUESTS **************


// // ***************************************
// // *            PUT REQUESTS             *
// // ***************************************

// app.use(bodyParser.json());

// app.put('/updategstdetailsdata', urlencodedParser, function (req, res) {
//     mongoClient.connect(url, function (err, client) {
//         if (err) {
//             console.log("error connecting to the database" + err);
//         }
//         else {

//             var db = client.db(dbName);

//             var collection = db.collection('gstdetails');
//             collection.update({ _id: new mongodb.ObjectID(req.body.id) }, { "name": req.body.name, "gst": req.body.gst, "dest": req.body.dest }, function (result, err) {
//                 if (err) {
//                     res.send(err);
//                     console.log("error inside");
//                 }
//                 else {
//                     res.send("Data updated Successfully!");
//                 }
//             });

//             client.close();
//         }
//     });
// });




// *********** END OF PUT REQUESTS **************

// app.listen(3000, '10.222.67.66', function () {

//     console.log("NRCM MAIN SERVER : 3000")
// });

app.listen(3000, function () {

    console.log("Walley MAIN SERVER : 3000")
});