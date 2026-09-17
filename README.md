# 🤖 RR Aliados Bot Orchestrator v1.0

**20 bots unificados para RR ALIADOS S.A.S.**  
**Accesible desde:** Hermes, OpenClaw, Telegram, Web Dashboard

---

## 🚀 INICIO RÁPIDO (Copy/Paste)

### Para OpenClaw:
```json
{
  "bot": "cajero",
  "action": "check_runway",
  "api_key": "sk_rr_bots_openclaw_2026_17sep"
}
```

### Para Hermes:
```
Bot: cajero
Action: check_runway
```

### Para Terminal:
```bash
curl -X POST https://rr-aliados-bots.vercel.app/api/openclaw \
  -H "X-API-Key: sk_rr_bots_openclaw_2026_17sep" \
  -H "Content-Type: application/json" \
  -d '{"bot": "cajero", "action": "check_runway"}'
```

---

## 🎯 BOTOS CRÍTICOS (Prioridad 1)

| Bot | Uso |
|-----|-----|
| **cajero** | Estado financiero - RUNWAY CRÍTICO |
| **prospector** | Generar leads para cashflow |
| **pipeline** | Tracking $181M oportunidades |
| **skills** | Orquestar múltiples agents |

---

## 🔗 URLs DE API

| Plataforma | Endpoint |
|------------|----------|
| Hermes | `/api/hermes?bot=cajero&action=check_runway` |
| OpenClaw | `/api/openclaw` |
| Telegram | `/api/telegram/webhook` |
| Health | `/api/health` |

---

## 🛠️ DESARROLLO LOCAL

```bash
npm install
npm run dev
# Visita http://localhost:3000
```

## 🚀 DESPLEGUE

```bash
npm run build
npm run start
# o en Vercel: vercel --prod
```

---

## 🔐 API KEYS

- **OpenClaw:** `sk_rr_bots_openclaw_2026_17sep`
- **Hermes:** Bearer Token (vía Authorization header)

---

## 📁 ESTRUCTURA DEL PROYECTO

```
bots_internos/
├── pages/
│   └── api/
│       ├── hermes.js
│       ├── openclaw.js
│       └── health.js
├── package.json
├── README.md
└── VERCEL.json
```

---

*RR ALIADOS S.A.S. - 17/09/2026*