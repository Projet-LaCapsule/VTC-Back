var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addTrip', async function(req, res) {
  var addTrip = await new TripModel({
    departure: req.body.departure,
    arrival: req.body.arrival,
    hourdeparture: req.body.hourdeparture,
    price: req.body.price,
    distance: req.body.distance,
    hourDeparture: req.body.hourDeparture,
    time: req.body.time
  })

  await addTrip.save(function(err, trip) {
    console.log(err);
    console.log(trip);
    res.json({trip});
  });
})

router.get('/confirmTravel', async function(req, res) {
    var findUser = await UserModel.findById({_id: req.query.id}, function(err, user) {
      console.log(user);
      user.trips.push(req.query.idTrip);

      user.save();
      res.json({user});
    })
})

module.exports = router;
