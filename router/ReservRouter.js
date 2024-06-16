const {getReser,postReser,putReser,deleteReser} = require("../controller/reservationContro")

const router = require("express").Router()

router.get('/',getReser)
router.post('/',postReser)
router.put('/:id',putReser)
router.delete('/:id',deleteReser)

module.exports = router
