---
sidebar_position: 3
---

# Publicar Canvis

Quan fas canvis al contingut, cal saber com es publiquen al lloc web.

## Flux de publicació

```
Editar contingut → Desar → Publicar → Actualització automàtica → Visible al web
```

## Tipus de contingut

### Col·leccions (Pàgines, Projectes, Categories)

Tenen dos estats:

| Estat | Descripció |
|-------|------------|
| **Draft** (Esborrany) | No visible al web |
| **Published** (Publicat) | Visible al web |

**Per publicar:**
1. Edita el contingut
2. Clica **Save** per desar
3. Clica **Publish** per fer-lo visible

### Tipus únics (Portada, Xarxes, Manteniment)

S'actualitzen automàticament en desar:
1. Edita el contingut
2. Clica **Save**
3. Els canvis es publiquen immediatament

## Actualització del web

:::info Sistema de caché
El lloc web utilitza una memòria cau (cache) per ser més ràpid. Quan publiques canvis, aquesta memòria s'actualitza automàticament.
:::

### Temps d'actualització

Normalment els canvis es veuen en **pocs segons** després de publicar.

### Si els canvis no es veuen

1. **Espera uns segons** - A vegades triga una mica
2. **Recarrega la pàgina** - Prem Ctrl+F5 (o Cmd+Shift+R a Mac)
3. **Comprova que has publicat** - Assegura't que el contingut no està en esborrany

## Forçar actualització manual

Si els canvis no apareixen, pots forçar l'actualització:

1. Al panell, ves al contingut que has canviat
2. Fes un petit canvi (afegeix un espai, per exemple)
3. Clica **Save** de nou

Això força el sistema a actualitzar la memòria cau.

:::tip Activar el worklet
Si tens accés al panell de Cloudflare, pots activar manualment el "worklet" per forçar una actualització completa. Normalment no cal fer-ho.
:::

## Bones pràctiques

1. **Revisa abans de publicar** - Els canvis són immediats
2. **No deixis esborranys** - Recorda publicar quan acabis
3. **Prova en una altra finestra** - Obre el web en mode incògnit per veure els canvis sense cache del navegador
