---
sidebar_position: 5
---

# Rich Text Photo

El bloc **Rich Text + Photo** permet crear contingut amb text formatat (negreta, cursiva, enllaços, llistes, títols) al costat d'una imatge.

## Camps

| Camp | Descripció |
|------|------------|
| **RichText** | Contingut amb format (editor de blocs de Strapi) |
| **Photo** | Imatge a mostrar |
| **Alignment** | Left (foto esquerra) o Right (foto dreta) |

## Editor de Rich Text

Utilitza l'editor de blocs de Strapi amb botons de format:

- **Títols H1-H6**: Per títols de secció
- **Negreta** (`Cmd/Ctrl+B`): Per ressaltar text
- **Cursiva** (`Cmd/Ctrl+I`): Per èmfasi
- **Enllaços**: Afegir URLs clicables
- **Llistes**: Vinyetes o numeració

## ⚠️ Important: Etiquetes i text destacat

:::warning Estils especials
Per mostrar **etiquetes/tags** o **text destacat** amb estil personalitzat:

**Per etiquetes inline**
1. Selecciona el text
2. Fes clic al botó **codi** (`<>`)

**Per text destacat** (ex: Ester Rafael)
1. Fes clic al botó **quote** (bloc de cita)
2. Escriu el text
:::

### Exemple - Crèdits de projecte

```
Descripció del projecte aquí...

behance          ← selecciona i fes servir estil "codi"
Ester Rafael     ← fes servir estil "quote"
```

## Consells

- Comença amb **H3** (no H1 o H2)
- Alterna l'alineació en blocs consecutius (Left, Right, Left...)
- Mida d'imatge recomanada: mínim 800px d'amplada, màx 2MB

## Mòbil

En mòbil, la imatge i el text s'apilen verticalment (imatge a dalt) independentment de l'alineació.
