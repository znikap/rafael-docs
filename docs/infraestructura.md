---
sidebar_position: 2
---

# Infraestructura

On està allotjat cada servei del teu lloc web.

## 🌐 Domini

| Servei | Detalls |
|--------|---------|
| **Registrador** | cdmon (domini registrat aquí) |
| **DNS** | Cloudflare (gestió de DNS transferida) |
| **Domini** | rafael.cat |

---

## ☁️ Cloudflare

El frontend del lloc web està allotjat a Cloudflare Workers.

| Element | Descripció |
|---------|------------|
| **Workers** | Executa el lloc web (Next.js) |
| **R2** | Emmagatzematge de cache |
| **D1** | Base de dades de tags de cache |
| **Pages** | Aquesta documentació |

🔗 [Dashboard Cloudflare](https://dash.cloudflare.com)

---

## 🚀 Strapi Cloud

El backend (CMS) està allotjat a Strapi Cloud.

| Element | Descripció |
|---------|------------|
| **API** | `fabulous-life-d873231a50.strapiapp.com` |
| **Admin** | [rafael.cat/adminet](https://rafael.cat/adminet) |
| **Base de dades** | PostgreSQL (inclòs) |

🔗 [Strapi Cloud Dashboard](https://cloud.strapi.io)

---

## 📧 Email

| Servei | Ús |
|--------|-----|
| **Infomaniak** | Correu electrònic (@rafael.cat) |
| **Resend** | Enviament de formularis de contacte |

🔗 [Infomaniak](https://manager.infomaniak.com)
🔗 [Resend Dashboard](https://resend.com)

---

## 💻 GitHub

Codi font del projecte (privat).

| Repositori | Descripció |
|------------|------------|
| **ester** | Monorepo (frontend + backend) |
| **rafael-docs** | Aquesta documentació |

🔗 [GitHub](https://github.com)

---

## 📊 Resum visual

```
rafael.cat
    │
    ├─→ Cloudflare (DNS + Workers)
    │       │
    │       └─→ Next.js Frontend
    │               │
    │               └─→ Strapi Cloud API
    │                       │
    │                       └─→ PostgreSQL
    │
    ├─→ Infomaniak (Email)
    │
    └─→ Resend (Formularis)
```

---

## 🔑 Accesos importants

| Servei | URL |
|--------|-----|
| Web | [rafael.cat](https://rafael.cat) |
| Admin CMS | [rafael.cat/adminet](https://rafael.cat/adminet) |
| Cloudflare | [dash.cloudflare.com](https://dash.cloudflare.com) |
| Strapi Cloud | [cloud.strapi.io](https://cloud.strapi.io) |
| Infomaniak | [manager.infomaniak.com](https://manager.infomaniak.com) |
| Resend | [resend.com](https://resend.com) |
| GitHub | [github.com](https://github.com) |
