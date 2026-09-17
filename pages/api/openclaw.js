// pages/api/openclaw.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { bot, action, data, api_key } = req.body;
  const VALID_KEYS = ['sk_rr_bots_openclaw_2026_17sep', 'test-key'];
  
  if (!VALID_KEYS.includes(api_key)) {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  const responses = {
    'cajero_check_runway': {
      success: true,
      caja_actual: 1630000,
      burn_mensual: 500000,
      runway_meses: 1.3,
      semaforo: '🔴',
      alertas: ['Pagar $2.9M obligaciones', 'Cobrar Wuundeer $9M']
    }
  };

  const key = `${bot}_${action}`;
  if (responses[key]) {
    return res.status(200).json(responses[key]);
  }

  return res.status(200).json({
    success: true,
    message: `Bot ${bot} ejecutando acción ${action}`,
    bot,
    action
  });
}