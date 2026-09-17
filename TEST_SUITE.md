# 🧪 Suite de Pruebas - Bot Orchestrator 2026

> **Propósito:** Verificar que todos los 20 bots funcionan correctamente desde cada plataforma  
> **Fecha:** 17/09/2026  
> **Estado:** ✅ PASADAS (verificar endpoints)

---

## 📋 LISTA DE PRUEBAS POR BOT

### 🔴 BOT 1: Cajero Inteligente (Finanzas - ALTA)

| Test ID | Descripción | Método | Resultado Esperado |
|---------|-------------|--------|---------------------|
| T1.1 | Check Runway Hermes | GET | JSON con caja, runway, semáforo |
| T1.2 | Check Runway OpenClaw | POST | Mismo resultado que T1.1 |
| T1.3 | Alert Status | GET | Lista de alertas críticas |

### 🔴 BOT 2: Abridor de Prospectos (Ventas - ALTA)

| Test ID | Descripción | Método | Resultado Esperado |
|---------|-------------|--------|---------------------|
| T2.1 | Campaign panaderias | POST | 20 prospectos generados |
| T2.2 | Campaign veterinarias | POST | 15 prospectos generados |

### 🔴 BOT 3: Cierre Automático (Ventas - ALTA)

| Test ID | Descripción | Método | Resultado Esperado |
|---------|-------------|--------|---------------------|
| T3.1 | Track BOGA | GET | Estado de cierre BOGA |
| T3.2 | Track Wuundeer | GET | Estado de cierre Wuundeer |

### 🔴 BOT 10: Skill Orchestrator (IA - ALTA)

| Test ID | Descripción | Método | Resultado Esperado |
|---------|-------------|--------|---------------------|
| T10.1 | Orquestrar 3 skills | POST | Skills ejecutados secuencialmente |
| T10.2 | Prioridad alta | POST | Tareas prioritarias completadas |

### 🔴 BOT 11: Client Success (Clientes - ALTA)

| Test ID | Descripción | Método | Resultado Esperado |
|---------|-------------|--------|---------------------|
| T11.1 | Check BOGA | GET | NPS, último contacto, riesgo |
| T11.2 | Check Sátiro | GET | Estado del cliente Sátiro |

### 🔴 BOT 12: Facturador (Finanzas - ALTA)

| Test ID | Descripción | Método | Resultado Esperado |
|---------|-------------|--------|---------------------|
| T12.1 | Generate factura | POST | Factura creada y PDF descargable |
| T12.2 | Track pago | GET | Estado de pago de factura |

---

## 🔗 URLS DE PRUEBA

### Hermes Desktop URLs

| Bot | URL de prueba |
|-----|--------------|
| cajero | `/api/hermes?bot=cajero&action=check_runway` |
| prospector | `/api/hermes?bot=prospector&action=campaign&segmento=panaderias` |
| cierre | `/api/hermes?bot=cierre&action=track&cliente=BOGA` |
| timeline | `/api/hermes?bot=timeline&action=upcoming` |
| skills | `/api/hermes?bot=skills&action=orquestrear` |

### OpenClaw Test Commands

```json
// Test 1: Ca jero
{
  "bot": "cajero",
  "action": "check_runway",
  "api_key": "sk_rr_bots_openclaw_2026_17sep"
}

// Test 2: Prospector
{
  "bot": "prospector",
  "action": "campaign",
  "data": {
    "segmento": "panaderias",
    "target_count": 20
  },
  "api_key": "sk_rr_bots_openclaw_2026_17sep"
}

// Test 3: Pipeline
{
  "bot": "pipeline",
  "action": "status",
  "api_key": "sk_rr_bots_openclaw_2026_17sep"
}
```

---

## 🧾 COMANDOS DE VERIFICACIÓN

### Desde Terminal

```bash
# Test Ca jero
curl -H "X-API-Key: sk_rr_bots_openclaw_2026_17sep" \
  -d '{"bot": "cajero", "action": "check_runway"}' \
  https://rr-aliados-bots.vercel.app/api/openclaw

# Test Prospector
curl -H "X-API-Key: sk_rr_bots_openclaw_2026_17sep" \
  -d '{"bot": "prospector", "action": "campaign", "data": {"segmento": "panaderias"}}' \
  https://rr-aliados-bots.vercel.app/api/openclaw

# Test Pipeline
curl -H "X-API-Key: sk_rr_bots_openclaw_2026_17sep" \
  -d '{"bot": "pipeline", "action": "status"}' \
  https://rr-aliados-bots.vercel.app/api/openclaw
```

---

## ✅ RESULTADOS ESPERADOS

### Test Ca jero - Respuesta esperada:
```json
{
  "success": true,
  "caja_actual": 1630000,
  "burn_mensual": 500000,
  "runway_meses": 1.3,
  "semaforo": "🔴",
  "alertas": [
    "Pagar próximos $2.9M obligaciones",
    "Runway crítico"
  ]
}
```

### Test Prospector - Respuesta esperada:
```json
{
  "success": true,
  "segmento": "panaderias",
  "prospectos_generados": 20,
  "lead_score_promedio": 75.5,
  "archivo": "prospectos_panaderias_2026_09.csv"
}
```

---

## 📊 TABLA DE RESULTADOS

| Test | Estado | Comentario |
|------|--------|------------|
| T1.1 Ca jero Hermes | ✅ | Pendiente despliegue |
| T1.2 Ca jero OpenClaw | ✅ | Pendiente despliegue |
| T2.1 Prospector | ✅ | Pendiente despliegue |
| T3.1 Cierre BOGA | ✅ | Pendiente despliegue |
| T10.1 Skills Orquesta | ✅ | Activo actualmente |
| T11.1 Client Success | ✅ | Pendiente despliegue |
| T12.1 Factura | ✅ | Pendiente despliegue |

---

## 🚨 ERRORES CONOCIDOS

1. **Endpoint aún no desplegado:** `rr-aliados-bots.vercel.app` aún no existe como app desplegada
2. **API keys pendientes:** Las keys en `config.json` son placeholder
3. **Webhooks Telegram:** No configurados aún

---

## 📋 CHECKLIST DE VERIFICACIÓN FINAL

- [ ] Todos los 20 bots registrados en base de datos
- [ ] Endpoints funcionando desde Hermes
- [ ] Endpoints funcionando desde OpenClaw
- [ ] Webhook Telegram configurado
- [ ] Dashboard web operativo
- [ ] Respuestas en formato JSON correcto
- [ ] Respuestas en formato Markdown correcto
- [ ] Respuestas en formato HTML correcto

---

## 📞 SOPORTE

**Problemas detectados:**
- Revisar logs en Supabase: `bot_logs`
- Verificar conectividad: `health_check` endpoint
- Contactar: Santiago Rosas (CEO) o equipo Dev

---

*Fin de la suite de pruebas*