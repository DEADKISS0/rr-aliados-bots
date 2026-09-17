# 📋 INSTRUCCIONES OPENCLAW - 20 BOTOS

## 🎯 USO INMEDIATO

### Bot Cajero - Estado financiero
```
Bot: cajero
Action: check_runway
API Key: sk_rr_bots_openclaw_2026_17sep
Formato: json
```

**Respuesta esperada:**
```json
{
  "success": true,
  "caja_actual": 1630000,
  "runway": 1.3,
  "semaforo": "🔴"
}
```

### Bot Prospector - Campaña de prospección
```
Bot: prospector
Action: campaign
Data: {"segmento": "panaderias", "target_count": 20}
API Key: sk_rr_bots_openclaw_2026_17sep
Formato: json
```

### Bot Pipeline - Estado pipeline
```
Bot: pipeline
Action: status
API Key: sk_rr_bots_openclaw_2026_17sep
Formato: json
```

### Bot Skills - Orquestar multi-agentes
```
Bot: skills
Action: orquestrear
Data: {"tarea": "analizar_finanzas"}
API Key: sk_rr_bots_openclaw_2026_17sep
Formato: json
```

## 🔗 URLs DEPLOY

- **API Hermes:** `https://rr-aliados-bots.vercel.app/api/hermes?bot=cajero&action=check_runway`
- **API OpenClaw:** `https://rr-aliados-bots.vercel.app/api/openclaw`
- **Dashboard:** `https://rr-aliados-bots.vercel.app/`

## 🚨 BOTOS CRÍTICOS (Prioridad alta)

1. **cajero** - Runway 1.3 meses - Cobrar Wuundeer $9M
2. **pipeline** - Tracking $181M oportunidades
3. **prospector** - Generar leads para cashflow
4. **skills** - Orquestar los 20 bots

---

## 📊 LISTA COMPLETA DE BOTOS

| # | Bot | Uso |
|---|-----|-----|
| 1 | cajero | Estado financiero |
| 2 | prospector | Generar prospects |
| 3 | cierre | Tracking cierres |
| 4 | timeline | Fechas entregas |
| 5 | meeting | Coordinar reuniones |
| 6 | docs | Búsqueda documentos |
| 7 | brand | Verificar brand kit |
| 8 | resources | Buscar recursos |
| 9 | onboard | Onboarding empleados |
| 10 | skills | Orquestar multi-agents |
| 11 | success | Client success tracking |
| 12 | facturas | Generar facturas |
| 13 | pipeline | Dashboard ventas |
| 14 | produccion | Programar contenido |
| 15 | dev | Code review |
| 16 | contratos | Gestión contratos |
| 17 | metrics | Dashboard métricas |
| 18 | reclutamiento | Screening candidatos |
| 19 | compliance | Auditoría normativa |
| 20 | visionario | Análisis mercado |