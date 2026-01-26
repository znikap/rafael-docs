---
sidebar_position: 4
---

# Mode Manteniment

El **Mode Manteniment** permet mostrar una pàgina temporal mentre fas canvis importants al lloc web.

## Accedir

1. Al panell, ves a **Content Manager**
2. A la secció **Single Types**, clica **Maintenance Mode**

## Camps

| Camp | Descripció |
|------|------------|
| **Enabled** | Activa/desactiva el mode manteniment |
| **Title** | Títol de la pàgina de manteniment |
| **Message** | Missatge principal per als visitants |
| **Footer Text** | Text addicional al peu |

## Activar manteniment

1. Marca la casella **Enabled**
2. Escriu un **Title** (ex: "En construcció")
3. Escriu un **Message** (ex: "Estem fent millores. Tornarem aviat!")
4. Opcionalment afegeix un **Footer Text**
5. Clica **Save**

El lloc web mostrarà immediatament la pàgina de manteniment a tots els visitants.

## Desactivar manteniment

1. Desmarca la casella **Enabled**
2. Clica **Save**

El lloc web tornarà a funcionar normalment.

## Vista prèvia (bypass)

Si vols veure el web mentre està en manteniment:

1. Afegeix `?preview=preview` a qualsevol URL del lloc
   - Exemple: `https://elteudomini.com?preview=preview`
2. Això et permet navegar normalment durant 7 dies

Per sortir del mode preview:
- Afegeix `?preview=exit` a l'URL

:::tip Secret personalitzat
El codi de preview (`preview`) es pot canviar per seguretat. Consulta amb el teu desenvolupador si vols un codi diferent.
:::

## Quan usar-lo

- Quan fas canvis importants al contingut
- Durant actualitzacions del sistema
- Quan vols preparar nou contingut abans de publicar-lo
- Per a esdeveniments especials o llançaments

## Consells

:::caution Recorda desactivar-lo
No oblidis desactivar el mode manteniment quan acabis! El lloc seguirà mostrant la pàgina de manteniment fins que el desactivis.
:::
