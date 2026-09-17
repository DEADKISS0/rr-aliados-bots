# 📋 GUÍA DE LOS 20 AGENTES DE RR ALIADOS

> **Propósito:** Lista completa de los 20 agentes especializados para usar desde cualquier chat (Hermes, OpenClaw, Telegram)

---

## 🔴 CRÍTICOS (Prioridad Alta - Usar diariamente)

| # | Agente | Uso Principal | Trigger |
|---|--------|---------------|---------|
| 1 | **Cajero** | Estado financiero, runway | "¿Runway?", "Estado caja" |
| 2 | **Prospector** | Generar leads, pipeline | "Nuevos prospects", "Leads panaderías" |
| 3 | **Cierre** | Tracking de contratos | "Estado BOGA", "Cierre Sátiro" |
| 4 | **Skills** | Orquestar múltiples agents | "Orquesta todo", "Multi-agentes" |

---

## 🟡 ALTO PRIORIDAD

| # | Agente | Uso Principal | Trigger |
|---|--------|---------------|---------|
| 5 | **Pipeline** | Dashboard de ventas | "Pipeline ventas", "Oportunidades" |
| 6 | **Facturas** | Crear/gestionar facturas | "Nueva factura BOGA" |
| 7 | **Timeline** | Fechas y entregas | "Entregas próximas" |
| 8 | **Success** | Client success tracking | "Estado cliente Wuundeer" |

---

## 🟢 MEDIO PRIORIDAD

| # | Agente | Uso Principal | Trigger |
|---|--------|---------------|---------|
| 9 | **Meeting** | Coordinar reuniones | "Reunión mañana" |
| 10 | **Docs** | Búsqueda documentos | "Buscar contrato" |
| 11 | **Brand** | Verificar identidad visual | "Brand kit BOGA" |
| 12 | **Resources** | Encontrar recursos | "¿Dónde está?" |
| 13 | **Onboard** | Onboarding empleados | "Nuevo colaborador" |
| 14 | **Desarrollista** | Code review, dev | "Revisar PR" |
| 15 | **Cronograma** | Planes y fechas | "Roadmap 2026" |

---

## 🔵 BAJA PRIORIDAD

| # | Agente | Uso Principal | Trigger |
|---|--------|---------------|---------|
| 16 | **Producción** | Content scheduling | "Publicar contenido" |
| 17 | **Contratista** | Gestión contratos | "Vencimientos contractuales" |
| 18 | **Metrics** | KPIs y métricas | "Métricas del mes" |
| 19 | **Reclutamiento** | Screening candidatos | "Buscar desarrollador" |
| 20 | **Compliance** | Auditoría normativa | "¿Estamos en compliance?" |

---

## 🎯 EJEMPLOS DE USO DESDE CUALQUIER CHAT

### Preguntas directas:
```
Cajero, ¿cuál es el runway?
Prospector, generar 20 leads para panaderías
Pipeline, ¿estado actual?
Skills, orquestar análisis financiero y ventas
```

### Preguntas estructuradas:
```
Agente: cajero
Pregunta: Estado financiero con alertas
Formato: Markdown
```

### Urgente:
```
Cajero, URGENTE - Runway crítico necesito acciones
```

---

## 🔗 INTEGRACIÓN TECHNICAL

### Endpoints disponibles:
- **Hermes:** `/api/hermes?bot=<alias>&action=<accion>`
- **OpenClaw:** `POST /api/openclaw`
- **Web:** `https://rr-aliados-bots.vercel.app/`

### API Key OpenClaw:
```
X-API-Key: ***
```

---

## 📁 DOCUMENTACIÓN DETALLADA

Cada agente tiene su archivo SKILL.md en:
```
bots_internos/agentes/agente-<nombre>.md
```