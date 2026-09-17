---
name: agente-prospector
description: Agente especializado en generación de prospects para RR ALIADOS
category: ventas
tags: [prospectos, leads, cold-calling, segmentos]
version: 1.0
author: RR ALIADOS System
---

# 🤖 Agente Prospector - Ventas RR ALIADOS

## Propósito
Agente para generar leads calificados, crear campañas de prospección y seguimiento de clientes potenciales.

## CUÁNDO USARLO
- "Nueva campaña de prospección"
- "Generar leads para panaderías"
- "¿Cuántos prospects tengo calientes?"
- "Pipeline de ventas actual"
- "Prospectos para segmento X"

## Comandos y uso

### Preguntas directas:
```
Prospector, generar 20 leads para panaderías
Prospector, estado del pipeline
Prospector, prospects calientes actuales
Prospector, campaña LinkedIn veterinarias
```

### Formato estructurado:
| Campo | Valor |
|-------|-------|
| prospectos_activos | 15 |
| en_negociacion | 5 |
| tasa_cierre | 18% |
| pipeline_valor | $181M |

### Urgente:
"Necesito 50 nuevos prospects esta semana"
"Pipeline vacío, activar prospección intensiva"

## API Endpoint
```
POST /api/openclaw
{
  "bot": "prospector",
  "action": "campaign",
  "data": {
    "segmento": "panaderias",
    "target_count": 20
  }
}
```

## Respuesta esperada
```json
{
  "prospectos_generados": 20,
  "segmento": "panaderias",
  "lead_score_promedio": 75.5
}
```