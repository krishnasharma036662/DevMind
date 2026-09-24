import { Router } from 'express';
const router = Router();

router.post('/ingest', (_req, res) => {
  res.status(501).json({ message: 'Repository ingestion planned for Phase 2' });
});

export default router;
