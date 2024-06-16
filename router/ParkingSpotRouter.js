const {getParkingSpot,postParkingSpot,putParkingSpot,deleteParkingSpot } = require("../controller/parkingSpotController");

const router = require("express").Router();

router.get('/', getParkingSpot);
router.post('/', postParkingSpot);
router.put('/:id', putParkingSpot);
router.delete('/:id', deleteParkingSpot);

module.exports = router;
