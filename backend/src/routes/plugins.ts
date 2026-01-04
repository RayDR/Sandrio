import { Router } from 'express';

const router = Router();

// Plugin endpoints
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Get all plugins',
  });
});

router.post('/:id/enable', (req, res) => {
  res.json({
    success: true,
    message: 'Plugin enabled',
  });
});

router.post('/:id/disable', (req, res) => {
  res.json({
    success: true,
    message: 'Plugin disabled',
  });
});

router.put('/:id/config', (req, res) => {
  res.json({
    success: true,
    message: 'Plugin configuration updated',
  });
});

export default router;
