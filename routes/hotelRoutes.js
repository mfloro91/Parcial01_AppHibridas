import express from "express"

const router = express.Router();

// Endpoints para hoteles

router.get('/')
router.get('/:id')
router.post('/')
router.put('/:id')
router.delete('/:id')

export default router;