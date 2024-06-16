const {getvehical,postVehical,putvehical,deleteVehical} = require("../controller/vehicalController")

const router = require("express").Router()

router.get('/',getvehical)
router.post('/',postVehical)
router.put('/:id',putvehical)
router.delete('/:id',deleteVehical)

module.exports = router
