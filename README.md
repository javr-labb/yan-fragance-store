# YAN Fragance — Cloudflare Pages

Sitio estático preparado para desplegarse desde GitHub a Cloudflare Pages.

## Configuración de Cloudflare Pages

- Production branch: `main`
- Framework preset: `None`
- Build command: `exit 0` (si el panel permite dejarlo vacío, también puede quedar vacío)
- Build output directory: `public`
- Root directory: dejar vacío / raíz del repositorio

El archivo que Cloudflare debe servir como inicio es `public/index.html`.

## Estructura

```text
.
├── README.md
└── public/
    ├── index.html
    ├── _headers
    ├── assets/
    ├── css/
    └── js/
```

No agregues un archivo `_redirects` con `/* /index.html 200` salvo que conviertas el sitio en una SPA que realmente lo necesite.
