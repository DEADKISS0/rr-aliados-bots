# 🤖 20 Bots Unificados - Guía de Integración

> **Base de datos Supabase:** `ntgtvtzbjwotuwkiflar.supabase.co`  
> **API Base:** `https://rr-aliados-bots.vercel.app/api`  
> **Última actualización:** 17/09/2026

---

## 🚀 USO RÁPIDO DESDE HERMANES

### Opción 1: Comando directo con URL
```
https://rr-aliados-bots.vercel.app/api/hermes?bot=cajero&action=check_runway&token=TU_TOKEN
```

### Opción 2: Formato Markdown para copiar y pegar

#### Ca jero Inteligente (Finanzas)
```markdown
🤖 **Bot Cajero - Estado financiero**
POST → /api/hermes?bot=cajero
{
  "action": "check_runway",
  "data": {}
}
```

#### Abridor de Prospectos (Ventas)
```markdown
🤖 **Bot Prospector - Nueva campaña**
POST → /api/hermes?bot=prospector
{
  "action": "campaign",
  "data": {
    "segmento": "panaderias",
    "objetivo": "5 prospectos calificados"
  }
}
```

#### Cierre Automático (Ventas)
```markdown
🤖 **Bot Cierre - Tracking cliente**
GET → /api/hermes?bot=cierre&cliente=BOGA
```

---

## 🔗 USO DESDE OPENCLAW

### Formato estándar OpenClaw
```bash
curl -X POST https://rr-aliados-bots.vercel.app/api/openclaw \
  -H "X-API-Key: sk_rr_bots_openclaw_2026" \
  -H "Content-Type: application/json" \
  -d '{
    "bot": "cajero",
    "action": "check_runway",
    "data": {}
  }'
```

### Prompt template para copiar
```
¡Ejecuta el bot cajero! 

Bot: cajero
Action: check_runway
Formato respuesta: json
```

---

## 📋 LISTADO COMPLETO DE BOTES (Copiar tabla)

| Bot | Alias | Acción | Endpoint | Plataforma |
|-----|-------|--------|----------|------------|
| Cajero Inteligente | cajero | check_runway | /api/hermes?bot=cajero&action=check_runway | Hermes/OpenClaw |
| Abridor de Prospectos | prospector | campaign | /api/hermes?bot=prospector|action=campaign | Hermes/OpenClaw |
| Cierre Automático | cierre | track | /api/hermes?bot=cierre&action=track | Hermes |
| Clock de Entregas | timeline | upcoming | /api/hermes?bot=timeline&action=upcoming | Hermes |
| Reunionero | meeting | schedule | /api/hermes?bot=meeting|action=schedule | Hermes |
| Documentista | docs | search | /api/hermes?bot=docs&action=search | Hermes |
| Brand Inspector | brand | audit | /api/hermes?bot=brand&action=audit | Hermes |
| Resource Finder | resources | search | /api/hermes?bot=resources&action=search | Hermes |
| Onboarding Copilot | onboard | start | /api/hermes?bot=onboard&action=start | Hermes |
| Skill Orchestrator | skills | orquestrear | /api/hermes?bot=skills|action=orquestrear | Hermes/OpenClaw |
| Client Success | success | check | /api/hermes?bot=success&action=check | Hermes |
| Facturador | facturas | generate | /api/hermes?bot=facturas|action=generate | Hermes |
| Pipeline Maestro | pipeline | status | /api/hermes?bot=pipeline&action=status | Hermes |
| Producción Auto | produccion | schedule | /api/hermes?bot=produccion|action=schedule | Hermes |
| Desarrollista | dev | review | /api/hermes?bot=dev&action=review | Hermes |
| Contratista | contratos | alert | /api/hermes?bot=contratos&action=alert | Hermes |
| Analista Metrics | metrics | dashboard | /api/hermes?bot=metrics|action=dashboard | Hermes |
| Reclutador | reclutamiento | find | /api/hermes?bot=reclutamiento|action=find | Hermes |
| Compliance Auditor | compliance | audit | /api/hermes?bot=compliance&action=audit | Hermes |
| Visionario | visionario | analyze | /api/hermes?bot=visionario|action=analyze | Hermes |

---

## 🔐 AUTENTICACIÓN

### API Key única para OpenClaw
```
X-API-Key: sk_rr_bots_openclaw_2026_17sep
```

### Token Bearer para Hermes
```
Authorization: Bearer <session_token>
```

---

## 📊 EJEMPLOS COMPLETOS

### Ejemplo 1: Estado de caja desde Hermes
```json
{
  "bot": "cajero",
  "action": "check_runway",
  "data": {}
}
```

**Respuesta esperada:**
```json
{
  "success": true,
  "caja_actual": 1630000,
  "burn_mensual": 500000,
  "runway_meses": 1.3,
  "semaforo": "🔴",
  "alertas": ["Pagar próximos $2.9M obligaciones"]
}
```

### Ejemplo 2: Generar campaña de prospección desde OpenClaw
```
Bot: prospector
Action: campaign
Data: 
  - segmento: "panaderias"
  - target_count: 20
```

### Ejemplo 3: Tracking BOGA desde Telegram
```
Command: /bot_cierre track client=BOGA
```

---

## 🔄 RESPALDAR ESTE ARCHIVO

Guarda esta información en:
- `05_IA_Herramientas/bots_internos/INTEGRATION_GUIDE.md`
- URL accessible: `https://rr-aliados-bots.vercel.app/docs/integracion`

---

## ❓ PREGUNTAS FRECUENTES

**Q: ¿Cómo obtengo mi API key?**  
A: Contactar a Santiago (CEO) - se genera en Supabase Dashboard

**Q: ¿Puedo usar varios bots en una sola conversación?**  
A: Sí, usa el bot orchestrator para coordinar múltiples agents

**Q: ¿Dónde veo el historial de ejecuciones?**  
A: `/dashboard/logs?bot=<alias>` o en tabla `bot_logs` de Supabase

**Q: ¿Cómo agrego un nuevo bot?**  
A: Inserta en tabla `bots` y crea endpoints en `bot_endpoints`