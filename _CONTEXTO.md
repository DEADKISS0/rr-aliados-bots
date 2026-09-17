# bots_internos — Contexto RR Aliados

> **Propósito:** 20 bots unificados accesibles desde Hermes, OpenClaw, Telegram y Web  
> **Estado:** En desarrollo - Listo para despliegue inmediato

---

## 📁 ESTRUCTURA ACTUAL

| Archivo | Propósito | Estado |
|---------|-----------|--------|
| `package.json` | Dependencias del proyecto | ✅ Listo |
| `VERCEL.json` | Configuración de despliegue | ✅ Listo |
| `pages/api/hermes.js` | Endpoint para Hermes Desktop | ✅ Listo |
| `pages/api/openclaw.js` | Endpoint para OpenClaw | ✅ Listo |
| `pages/api/health.js` | Check de salud del sistema | ✅ Listo |
| `pages/index.js` | Dashboard web | ✅ Listo |
| `README.md` | Documentación principal | ✅ Listo |

---

## 🔗 USO DESDE OPENCLAW (Copiar/Pegar)

### Bot Cajero - Estado financiero (URGENTE)
```
Bot: cajero
Action: check_runway
API Key: sk_rr_bots_openclaw_2026_17sep
Formato: json
```

### Prompt OpenClaw directo:
```json
{
  "bot": "cajero",
  "action": "check_runway"
}
```

---

## 🎯 BOTOS CRITICOS IMPLEMENTADOS

| Bot | Uso | Endpoint |
|-----|-----|----------|
| **cajero** | Estado financiero | /api/openclaw |
| **prospector** | Generar leads | /api/openclaw |
| **pipeline** | Tracking oportunidades | /api/openclaw |
| **skills** | Orquestar agents | /api/openclaw |

---

## 🚀 DESARROLLO & DESPLEGUE

```bash
# Local development
cd bots_internos
npm install
npm run dev
# http://localhost:3000

# Build
npm run build

# Despliegue a Vercel
vercel --prod
```

---

## 🔐 API KEYS

- **OpenClaw:** `sk_rr_bots_openclaw_2026_17sep`
- **Header:** `X-API-Key`

---

## 📊 RESPUESTA ESPERADA (Test)

```bash
curl -X POST https://rr-aliados-bots.vercel.app/api/openclaw \
  -H "X-API-Key: sk_rr_bots_openclaw_2026_17sep" \
  -H "Content-Type: application/json" \
  -d '{"bot": "cajero", "action": "check_runway"}'
```

**Respuesta:**
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

---

*Actualizado 17/09/2026