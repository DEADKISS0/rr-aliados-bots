// pages/api/health.js
export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    bots_implementados: 4,
    bots_criticos: ['cajero', 'prospector', 'pipeline', 'skills']
  });
}