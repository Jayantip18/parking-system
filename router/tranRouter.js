const {getTran,postTran,putTran,deleteTran} = require("../controller/TransController");

const router = require("express").Router();

router.get('/', getTran);
router.post('/', postTran);
router.put('/:id', putTran);
router.delete('/:id', deleteTran);

module.exports = router;
