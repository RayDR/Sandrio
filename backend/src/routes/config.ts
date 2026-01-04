import { Router } from 'express';

const router = Router();

// Store configuration endpoints
router.get('/config', (req, res) => {
  res.json({
    success: true,
    message: 'Store configuration',
  });
});

router.put('/config', (req, res) => {
  res.json({
    success: true,
    message: 'Store configuration updated',
  });
});

export default router;
