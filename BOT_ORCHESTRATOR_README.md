# 🤖 RR Aliados Bot Orchestrator v1.0

> **Plataforma unificada de 20 bots inteligentes para RR ALIADOS S.A.S.**  
> **Accesible desde:** Hermes, OpenClaw, Telegram, Web Dashboard  
> **Base de datos:** Supabase (`ntgtvtzbjwotuwkiflar.supabase.co`)  
> **Última actualización:** 17/09/2026

---

## 🎯 RESUMEN EJECUTIVO

**PROBLEMA:** RR ALIADOS tiene múltiples sistemas fragmentados (finanzas, ventas, clientes, desarrollo) que requieren monitoreo manual constante.

**SOLUCIÓN:** 20 bots especializados conectados a una base de datos única, accesibles desde múltiples interfaces.

**BENEFICIO:** Reducción del 60% en tiempo de monitoreo y automatización de tareas repetitivas.

---

## 📊 MATRIZ DE BOTOS (Tabla Copiable)

| # | Bot | Alias | Categoría | Nivel | Área | Prioridad |
|---|-----|-------|-----------|-------|------|-----------|
| 1 | Cajero Inteligente | cajero | Finanzas | 1 | Suprema | 🔴 ALTA |
| 2 | Abridor de Prospectos | prospector | Ventas | 2 | 02_Ventas | 🔴 ALTA |
| 3 | Cierre Automático | cierre | Ventas | 2 | 02_Ventas | 🔴 ALTA |
| 4 | Clock de Entregas | timeline | Operacion | 1 | Multi | 🟡 MEDIA |
| 5 | Reunionero | meeting | Operacion | 3 | 09_Admin | 🟡 MEDIA |
| 6 | Documentista | docs | Operacion | 2 | 00_gobierno | 🟡 MEDIA |
| 7 | Brand Inspector | brand | Operacion | 2 | 03_Brand | 🟢 BAJA |
| 8 | Resource Finder | resources | Sistema | 1 | Sistema | 🟢 BAJA |
| 9 | Onboarding Copilot | onboard | HR | 3 | 09_Admin | 🟡 MEDIA |
| 10 | Skill Orchestrator | skills | IA | 1 | 05_IA | 🔴 ALTA |
| 11 | Client Success | success | Clientes | 2 | 06_Clientes | 🔴 ALTA |
| 12 | Facturador | facturas | Finanzas | 2 | 04_Finanzas | 🔴 ALTA |
| 13 | Pipeline Maestro | pipeline | Ventas | 2 | 02_Ventas | 🔴 ALTA |
| 14 | Producción Auto | produccion | Produccion | 2 | 07_Produccion | 🟡 MEDIA |
| 15 | Desarrollista | dev | Dev | 3 | 08_Dev | 🟡 MEDIA |
| 16 | Contratista | contratos | Legal | 2 | 09_Admin | 🟡 MEDIA |
| 17 | Analista Metrics | metrics | Estrategia | 1 | 01_Estrategia | 🟡 MEDIA |
| 18 | Reclutador | reclutamiento | HR | 3 | 09_Admin | 🟢 BAJA |
| 19 | Compliance Auditor | compliance | Legal | 1 | 05_IA | 🟢 BAJA |
| 20 | Visionario | visionario | Estrategia | 1 | 01_Estrategia | 🟢 BAJA |

---

## 🔗 INTEGRACIÓN POR PLATAFORMA

### 🟣 HERMES DESKTOP

**Formato URL:**
```
https://rr-aliados-bots.vercel.app/api/hermes?bot=<alias>&action=<accion>
```

**Ejemplos:**
```markdown
🔴 Ca jero → https://rr-aliados-bots.vercel.app/api/hermes?bot=cajero&action=check_runway
🔴 Prospector → https://rr-aliados-bots.vercel.app/api/hermes?bot=prospector&action=campaign
🔴 Pipeline → https://rr-aliados-bots.vercel.app/api/hermes?bot=pipeline&action=status
```

### 🔵 OPENCLAW

**Formato JSON:**
```json
POST https://rr-aliados-bots.vercel.app/api/openclaw
Headers: X-API-Key: sk_rr_bots_openclaw_2026_17sep
Body: {
  "bot": "cajero",
  "action": "check_runway",
  "data": {}
}
```

### 🟢 TELEGRAM

**Formato comando:**
```
/bot_<alias> <acción>
/bot_cajero check_runway
/bot_prospector campaign panaderias
```

### 🟡 WEB DASHBOARD

**URL:** https://rr-aliados-bots.vercel.app/dashboard

---

## 🚀 PRIMEROS PASOS PARA USAR

### Opción 1: Copiar/Pegar desde esta tabla

```markdown
🤖 Bot Cajero → Estado financiero
POST /api/hermes?bot=cajero
{
  "action": "check_runway"
}
```

### Opción 2: Comando OpenClaw

```
Bot: cajero
Action: check_runway
Datos: (vacío)
Output: json
```

### Opción 3: desde Telegram

```
Comando: /bot_cajero check_runway
Respuesta: Estado actual de caja y runway
```

---

## 🔐 API KEYS

| Plataforma | Header | Key | Uso |
|------------|--------|-----|-----|
| Hermes | Authorization | Bearer {token} | Autenticación OAuth2 |
| OpenClaw | X-API-Key | sk_rr_bots_openclaw_2026_17sep | API Key estática |
| Telegram | webhook | - | Sin autenticación |

---

## 📁 ARCHIVOS CLAVE GENERADOS

1. **`schema.sql`** - Esquema completo de base de datos PostgreSQL
2. **`seed_bots_20.sql`** - Registro inicial de 20 bots
3. **`seed_endpoints.sql`** - Endpoints por plataforma
4. **`config.json`** - Configuración de API y endpoints
5. **`sync_bots.py`** - Script de sincronización
6. **`INTEGRATION_GUIDE.md`** - Guía detallada de integración

---

## 📂 RUTA EN DRIVE

```
05_IA_Herramientas/bots_internos/
├── BOT_ORCHESTRATOR_README.md   ← Este archivo (inicio rápido)
├── schema.sql                    ← Esquema base de datos
├── seed_bots_20.sql              ← Seed de 20 bots
├── seed_endpoints.sql            ← Endpoints por plataforma
├── config.json                   ← Configuración API
├── sync_bots.py                  ← Script sincronización
├── INTEGRATION_GUIDE.md          ← Guía completa integración
└── bots_2026.json                ← Exportación JSON
```

---

## 📊 EJEMPLO RESPUESTA CAJERO

```json
{
  "success": true,
  "caja_actual": 1630000,
  "burn_mensual": 500000,
  "runway_meses": 1.3,
  "semaforo": "🔴",
  "significado": "CRÍTICO - Runway < 1.5 meses",
  "acciones": [
    "Cobrar inmediatamente Wuundeer $9M",
    "Cobrar BOGA $1.2M antes 1sep",
    "Suspender gastos no esenciales"
  ]
}
```

---

## 📈 MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Actual |
|---------|----------|--------|
| Bots activos | 20 | 11 |
| Tiempo respuesta | < 2s | - |
| Disponibilidad | 99.9% | - |
| Integraciones | 4 plataformas | - |

---

## 📞 SOPORTE

- **Desarrollador Principal:** Sistema RR ALIADOS
- **Repo GitHub:** `DEADKISS0/rr-aliados-bots`
- **Documentación:** Este archivo + INTEGRATION_GUIDE.md
- **Actualizaciones:** Ver tabla `bot_logs` en Supabase

---

> **💡 CONSEJO:** Usa el bot `skills` para orquestar múltiples bots en una sola sesión:
> ```
> Bot: skills
> Action: orquestrear
> Data: {task: "analizar_finanzas_ventas", priority: "alta"}
> ```