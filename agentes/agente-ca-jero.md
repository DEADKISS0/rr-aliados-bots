---
name: agente-ca-jero
description: Agente especializado en finanzas, runway y alertas financieras de RR ALIADOS
category: finanzas
tags: [finanzas, caja, runway, cashflow, alertas]
version: 1.0
author: RR ALIADOS System
---

# 🤖 Agente Cajero - Finanzas RR ALIADOS

## Propósito
Agente especializado en monitorear la situación financiera de RR ALIADOS: caja disponible, burn rate, runway y alertas críticas.

## CUÁNDO USARLO
- "¿Cuál es el estado financiero?"
- "¿Cuánto runway tengo?"
- "¿Estamos en riesgo financiero?"
- "Alertas de caja"
- "¿Puedo pagar lo siguiente?"

## COMandos y uso

### Preguntas directas:
```
Cajero, ¿cuál es el runway actual?
Cajero, estado financiero
Cajero, alertas críticas
Cajero, burn rate mensual
```

### Formato estructurado:
| Campo | Valor |
|-------|-------|
| caja_actual | $1,630,000 |
| burn_mensual | $500,000 |
| runway_meses | 1.3 |
| semaforo | 🔴 CRÍTICO |

### Urgente:
"Urgente, revisa caja y dame alertas"
"Runway crítico, necesito acciones inmediatas"

## API Endpoint
```
POST /api/openclaw
{
  "bot": "cajero",
  "action": "check_runway"
}
```

## Respuesta esperada
```json
{
  "caja_actual": 1630000,
  "burn_mensual": 500000,
  "runway_meses": 1.3,
  "semaforo": "🔴",
  "alertas": [
    "Pagar próximos $2.9M obligaciones",
    "Cobrar Wuundeer $9M antes 21/09"
  ]
}
```

## Documentación del agente
Documentado en: `bots_internos/AGENTES.md`