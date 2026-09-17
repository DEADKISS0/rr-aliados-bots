// pages/api/hermes.js
export default async function handler(req, res) {
  const { bot, action } = req.query;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization required' });
  }

  const mockResponses = {
    'cajero_check_runway': {
      success: true,
      caja_actual: 1630000,
      burn_mensual: 500000,
      runway_meses: 1.3,
      semaforo: '🔴',
      alertas: [
        'Pagar próximos $2.9M obligaciones',
        'Cobrar Wuundeer $9M',
        'Runway crítico < 1.5 meses'
      ],
      bot: 'cajero',
      action: 'check_runway'
    }
  };

  const key = `${bot}_${action}`;
  if (mockResponses[key]) {
    return res.status(200).json(mockResponses[key]);
  }

  return res.status(200).json({
    success: true,
    message: `Bot ${bot} ejecutando acción ${action}`
  });
}