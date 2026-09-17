# 📊 TABLA DE BOTOS - Copiar/Pegar Inmediato

**Uso:** Copia esta tabla directamente a tu herramienta de documentación o hoja de cálculo

---

## 🟣 Tabla de los 20 Botos

| # | Bot | Alias | Categoría | Nivel | Área | Prioridad | Estado | Endpoint Hermes |
|---|-----|-------|-----------|-------|------|-----------|--------|-----------------|
| 1 | Cajero Inteligente | cajero | Finanzas | 1 | Suprema | 🔴 ALTA | pendiente | /api/hermes?bot=cajero&action=check_runway |
| 2 | Abridor de Prospectos | prospector | Ventas | 2 | 02_Ventas | 🔴 ALTA | pendiente | /api/hermes?bot=prospector&action=campaign |
| 3 | Cierre Automático | cierre | Ventas | 2 | 02_Ventas | 🔴 ALTA | pendiente | /api/hermes?bot=cierre&action=track |
| 4 | Clock de Entregas | timeline | Operacion | 1 | Multi | 🟡 MEDIA | pendiente | /api/hermes?bot=timeline&action=upcoming |
| 5 | Reunionero | meeting | Operacion | 3 | 09_Admin | 🟡 MEDIA | pendiente | /api/hermes?bot=meeting&action=schedule |
| 6 | Documentista | docs | Operacion | 2 | 00_gobierno | 🟡 MEDIA | pendiente | /api/hermes?bot=docs&action=search |
| 7 | Brand Inspector | brand | Operacion | 2 | 03_Brand | 🟢 BAJA | pendiente | /api/hermes?bot=brand&action=audit |
| 8 | Resource Finder | resources | Sistema | 1 | Sistema | 🟢 BAJA | pendiente | /api/hermes?bot=resources&action=search |
| 9 | Onboarding Copilot | onboard | HR | 3 | 09_Admin | 🟡 MEDIA | pendiente | /api/hermes?bot=onboard&action=start |
| 10 | Skill Orchestrator | skills | IA | 1 | 05_IA | 🔴 ALTA | activo | /api/hermes?bot=skills&action=orquestrear |
| 11 | Client Success | success | Clientes | 2 | 06_Clientes | 🔴 ALTA | pendiente | /api/hermes?bot=success&action=check |
| 12 | Facturador | facturas | Finanzas | 2 | 04_Finanzas | 🔴 ALTA | pendiente | /api/hermes?bot=facturas&action=generate |
| 13 | Pipeline Maestro | pipeline | Ventas | 2 | 02_Ventas | 🔴 ALTA | pendiente | /api/hermes?bot=pipeline&action=status |
| 14 | Producción Auto | produccion | Produccion | 2 | 07_Produccion | 🟡 MEDIA | pendiente | /api/hermes?bot=produccion&action=schedule |
| 15 | Desarrollista | dev | Dev | 3 | 08_Dev | 🟡 MEDIA | pendiente | /api/hermes?bot=dev&action=review |
| 16 | Contratista | contratos | Legal | 2 | 09_Admin | 🟡 MEDIA | pendiente | /api/hermes?bot=contratos&action=alert |
| 17 | Analista Metrics | metrics | Estrategia | 1 | 01_Estrategia | 🟡 MEDIA | pendiente | /api/hermes?bot=metrics&action=dashboard |
| 18 | Reclutador | reclutamiento | HR | 3 | 09_Admin | 🟢 BAJA | pendiente | /api/hermes?bot=reclutamiento&action=find |
| 19 | Compliance Auditor | compliance | Legal | 1 | 05_IA | 🟢 BAJA | pendiente | /api/hermes?bot=compliance&action=audit |
| 20 | Visionario | visionario | Estrategia | 1 | 01_Estrategia | 🟢 BAJA | pendiente | /api/hermes?bot=visionario&action=analyze |

---

## 🔗 URLs DE API (Copiar directamente)

### Para Hermes Desktop:
```
https://rr-aliados-bots.vercel.app/api/hermes?bot=cajero&action=check_runway
```

### Para OpenClaw (cURL):
```bash
curl -X POST https://rr-aliados-bots.vercel.app/api/openclaw \
  -H "X-API-Key: sk_rr_bots_openclaw_2026_17sep" \
  -H "Content-Type: application/json" \
  -d '{"bot": "cajero", "action": "check_runway"}'
```

### Para OpenClaw (Prompt):
```
Bot: cajero
Action: check_runway
Formato: json
```

---

## 🔐 API KEY

**OpenClaw:** `sk_rr_bots_openclaw_2026_17sep`  
**Header:** `X-API-Key`

---

## 📁 ARCHIVOS GENERADOS

| Archivo | Tamaño | Propósito |
|---------|--------|-----------|
| BOT_ORCHESTRATOR_README.md | 5.9KB | Inicio rápido con tabla |
| schema.sql | 2.7KB | Esquema base de datos |
| seed_bots_20.sql | 7.5KB | Seed de 20 bots |
| seed_endpoints.sql | 7.2KB | Endpoints por plataforma |
| config.json | 1.7KB | Configuración API |
| sync_bots.py | 11.2KB | Script sincronización |
| INTEGRATION_GUIDE.md | 4.9KB | Guía completa integración |
| bots_2026.json | 8.5KB | JSON para OpenClaw |
| TEST_SUITE.md | 5.4KB | Suite de pruebas |
| _CONTEXTO.md | 2.3KB | Contexto del sistema |
| _HISTORIAL.md | 1.8KB | Historial de cambios |

---

## 🚀 PRÓXIMOS PASOS

1. **Desplegar** en Vercel: `rr-aliados-bots.vercel.app`
2. **Configurar** webhook Telegram
3. **Testear** integración Hermes
4. **Testear** integración OpenClaw
5. **Actualizar** dashboard RR Aliados