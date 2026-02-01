# Documentació Rafael

Documentació per al client del lloc web Rafael, creada amb [Docusaurus](https://docusaurus.io/).

## Configuració inicial

1. **Edita `docusaurus.config.ts`** amb el teu usuari i repo:

```ts
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/YOUR_REPO_NAME/',
organizationName: 'YOUR_USERNAME',
projectName: 'YOUR_REPO_NAME',
```

## Desenvolupament local

```bash
npm install
npm start
```

El lloc s'obrirà a `http://localhost:3000`.

## Desplegament a GitHub Pages

1. **Puja el codi a GitHub** (repo públic)

2. **Activa GitHub Pages:**
   - Ves a Settings > Pages
   - Source: selecciona **GitHub Actions**

3. **Fes push a `main`** - el workflow desplega automàticament

La documentació estarà a: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Estructura

```
docs/
├── intro.md              # Pàgina inicial
├── publicar.md           # Guia de publicació
├── manteniment.md        # Mode manteniment
├── continguts/           # Tipus de contingut
│   ├── pagines.md
│   ├── projectes.md
│   ├── portada.md
│   ├── categories.md
│   ├── serveis.md
│   └── xarxes.md
└── blocs/                # Blocs disponibles
    ├── intro.md
    ├── text.md
    ├── text-cta.md
    ├── text-foto.md
    ├── images.md
    ├── process.md
    ├── services.md
    └── contact.md
```

## Editar contingut

Els fitxers `.md` a `docs/` es poden editar directament a GitHub o localment. Usa markdown estàndard.
